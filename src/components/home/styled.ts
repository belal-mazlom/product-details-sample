import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Preview = styled.div``;

export const Details = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.txtColor};
`;