import React from 'react';

import { Container, Date } from './styles';

interface CommentProps {
  data: {
    name: string;
    content: string;
    createdAt: string;
  };
}
const Comment: React.FC<CommentProps> = ({ data }) => {
  const { name, content, createdAt } = data;

  return (
    <Container>
      <span>
        <strong>{name}</strong>
        {': '}
        {content}
      </span>
      <Date>{createdAt}</Date>
    </Container>
  );
};

export default Comment;
