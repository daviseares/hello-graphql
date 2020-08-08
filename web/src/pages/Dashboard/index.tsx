import React, { useRef, useCallback, useEffect, useState } from 'react';
import moment from 'moment';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useMutation } from '@apollo/client';

import logo from '../../assets/logo.svg';
import empty from '../../assets/empty.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Comment from '../../components/Comment';

import client, { ADD_COMMENT, GET_COMMENTS } from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Right,
  Left,
  Empty,
  TitleEmpty,
  ImageEmpty,
} from './styles';

interface FormData {
  name: string;
  content: string;
}

interface CommentProps {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é um campo obrigatório'),
  content: Yup.string().required('O comentário é um campo obrigatório'),
});

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);

  const [addComment] = useMutation(ADD_COMMENT);

  useEffect(() => {
    client
      .query({
        query: GET_COMMENTS,
      })
      .then(result => {
        const formatedComments = result.data.getComments.map(
          (comment: CommentProps) => ({
            ...comment,
            createdAt: moment(comment.createdAt).format('DD-MM-YYYY'),
          }),
        );
        setComments(formatedComments);
      });
  }, []);

  const handleSubmit = useCallback(
    async (data: FormData, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, { abortEarly: false });

        const { name, content } = data;
        const result = await addComment({ variables: { name, content } });

        const comment = {
          ...result.data.saveComment,
          createdAt: moment(result.data.saveComment.createdAt).format(
            'DD-MM-YYYY',
          ),
        };

        setComments(state => [...state, comment]);

        reset(); // reset data
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [addComment],
  );

  return (
    <Container>
      <Left>
        <img src={logo} alt="logo" />
        <p>Um simples hello world para consumir API em GraphQL</p>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="content" placeholder="Deixe um comentário" />

          <Button>Comentar</Button>
        </Form>
      </Left>

      <Right>
        {comments.length > 0 ? (
          comments.map(comment => <Comment data={comment} key={comment.id} />)
        ) : (
          <Empty>
            <TitleEmpty>Oops! Ainda não temos comentários.</TitleEmpty>
            <ImageEmpty src={empty} alt="comentarios" />
          </Empty>
        )}
      </Right>
    </Container>
  );
};

export default Dashboard;
