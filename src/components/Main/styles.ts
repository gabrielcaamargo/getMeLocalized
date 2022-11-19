import styled from 'styled-components';

export const MainContainer = styled.main``;

export const SearchContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;

  input {
    padding: 20px;
    font-size: 16px;
    border: 1px solid transparent;
    outline: none;
    transition: 0.2s ease-in all;
    background-color: #F6F6F6;
    border-radius: 4px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
    &:focus {
      border: 1px solid ${({theme}) => theme.colors.main};
    }
  }

  button {
    background-color: ${({theme}) => theme.colors.main};
    color: #FFF;
    font-weight: 800;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    transition: 0.2s ease-in all;
    padding: 20px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);

    &:hover {
      background-color: ${({theme}) => theme.colors.dark};
    }

    &:active {
      background-color: ${({theme}) => theme.colors.light};
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 48px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const MapContainer = styled.div``;

export const ResultsContainer = styled.div``;

export const Results = styled.div``;
