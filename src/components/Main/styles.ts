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

  @media screen and (max-width: 400px) {
    max-width: 90vw;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const MapContainer = styled.div`
  margin-top: 44px;
  height: 356px;
  background-color: #E6E6E6;
  img {
    display: none;
  }
`;

export const ResultsContainer = styled.div`
  background-color: #E6E6E6;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 28px auto 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1024px) {
    padding: 20px;
    max-width: 92vw;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 20px 12px;
    align-items: start;
    & > img {
      display: none;
    }
  }
`;

export const Results = styled.div`
  font-size: 18px;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    height: 32px;
  }

  @media screen and (max-width: 640px) {
    gap: 16px;

    p {
      width: 100%;
    }
  }
`;
