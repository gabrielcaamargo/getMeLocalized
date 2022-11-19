import { MainContainer, SearchContainer, MapContainer, ResultsContainer, Results } from './styles';

import map from '../../assets/mocks/map.svg';
import divisor from '../../assets/icons/divisor.svg';

export default function Main() {
  return (
    <MainContainer>
      <SearchContainer>
        <input type="text" placeholder='Search a place'/>
        <button type="button">Search</button>
      </SearchContainer>

      <MapContainer>
        <img src={map}/>
      </MapContainer>

      <ResultsContainer>
        <Results>
          <p><strong>Location: </strong> Porto Alegre</p>
          <p><strong>Address: </strong>Not informed</p>
          <p><strong>Country: </strong> Brazil 🇧🇷</p>
        </Results>
        <img src={divisor} alt="Divisor" />
        <Results>
          <p><strong>Places: </strong> Barranco, Parcão, Redenção...</p>
          <p><strong>Postal Code: </strong>Not informed</p>
          <p><strong>Region: </strong>South Brazil</p>
        </Results>
      </ResultsContainer>
    </MainContainer>
  );
}
