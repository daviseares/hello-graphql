import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const GET_COMMENTS = gql`
  query {
    getComments {
      id
      name
      content
      createdAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($name: String, $content: String) {
    saveComment(input: { name: $name, content: $content }) {
      id
      name
      content
    }
  }
`;

export default client;
