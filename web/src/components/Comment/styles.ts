import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  text-align: center;

  padding: 10px;
  width: 350px;
  height: 100px;
  background: ${lighten(0.06, '#181b1e')};
  border-radius: 5px;
  color: #fff;

  & + div {
    margin-top: 20px;
  }
`;

export const Date = styled.span`
  color: ${shade(0.5, '#fff')};
  font-size: 12px;

  position: absolute;
  bottom: 10px;
  right: 10px;
`;
