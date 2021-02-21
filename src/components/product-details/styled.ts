import { Button } from '@components/styled';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 2rem;
  gap: 2rem;
  position: relative;
  width: 100%;
`;


export const Title = styled.h1`
  color: ${({ theme }) => theme.txtColor};
  font-size: 2.1rem;
  font-family: 'Helvetica';
  font-weight: 400;
  margin: 0;
  text-align: center;
`;


export const Preview = styled.div`
  grid-column: span 12 / span 12;
  ${Title} {
    margin-top: 2rem;
  }
  @media (min-width: 1200px) {
    ${Title} {
      display: none;
    }
    grid-column: span 6 / span 6;
    .carousel-root {
      display: flex;
      flex-direction: row-reverse;
      .carousel:nth-child(2) {
        max-width: 16rem;
        .thumbs {
          align-items: center;
          transform: none !important;
          text-align: center;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  .carousel {
    .thumb {
      cursor: pointer;
      @media (min-width: 1200px) {
        display: block;
        margin-bottom: 0.3rem;
      }
    }
    .control-dots {
      .dot {
        background-color: ${({ theme }) => theme.txtColor};
        &.selected {
          background-color: ${({ theme }) => theme.secondaryColor};
        }
      }
    }
  }
`;

export const Details = styled.div`
  grid-column: span 12 / span 12;
  padding: 1rem 1rem 0;
  @media (max-width: 1199px) {
    ${Title} {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    grid-column: span 6 / span 6;
    padding: 6rem 1rem 0;
  }
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h4`
  color: ${({ theme }) => theme.txtColor};
  font-size: 1.4rem;
  font-family: 'Helvetica';
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.txtColor};
  font-size: 1.8rem;
  font-family: 'Helvetica';
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

export const Slide = styled.div`
  width: 100%;
  background: transparent;
`;

export const SizeBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
  > h3 {
    font-size: 1.8rem;
    font-weight: 300;
    margin: 1rem 0;
    color: ${({ theme }) => theme.txtColor};
  }
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SizeBtn = styled.button<{ selected: boolean }>`
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  padding: 1rem;
  background-color: ${({ theme, selected }) => selected ? theme.primaryColor : theme.secondaryBgColor};
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Description = styled.p`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 1.4rem;
  padding: 0 6rem;
`;

export const AddCartBtn = styled(Button)`
  text-transform: uppercase;
  width: 30rem;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.primaryColor};
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
