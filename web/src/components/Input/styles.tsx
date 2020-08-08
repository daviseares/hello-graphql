import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #181b1e;
  border-radius: 5px;
  border: 2px solid #181b1e;
  padding: 14px;
  width: 350px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  ${props =>
    props.isFocused &&
    css`
      color: #7159c1;
      border-color: #7159c1;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #7159c1;
    `}

  input {
    background: transparent !important;
    border: 0;
    outline: 0;
    flex: 1;
    color: #fff;

    &::placeholder {
      color: #bbb;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
