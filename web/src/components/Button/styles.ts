import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7159c1;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: bold;
  outline: 0;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#7159c1')};
  }
`;
