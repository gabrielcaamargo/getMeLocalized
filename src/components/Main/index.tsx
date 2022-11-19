import { MainContainer, SearchContainer, MapContainer, ResultsContainer, Results } from './styles';

export default function Main() {
  return (
    <MainContainer>
      <SearchContainer>
        <input type="text" placeholder='Search a place'/>
        <button type="button">Search</button>
      </SearchContainer>
    </MainContainer>
  );
}
