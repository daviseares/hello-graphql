import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  justify-content: center;
  align-items: stretch;
  display: flex;

  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;

  padding: 20px 0px;
  width: 100%;
  max-width: 700px;
  background: ${lighten(0.06, '#181b1e')};

  @media (max-width: 800px) {
    max-width: 800px;
  }

  img {
    max-width: 300px;
    margin-bottom: 20px;
  }
  p {
    width: 250px;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 0;
  overflow: auto;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

export const TitleEmpty = styled.h1`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ImageEmpty = styled.img`
  max-width: 200px;
`;
