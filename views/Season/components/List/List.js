import { SeriesList, Seria, Text } from './styles';

function List({ switchSeria, active, series }) {
  return (
    <SeriesList>
      <div>
        {
          series.map(seria => (
            <Seria key={seria.id} onClick={() => switchSeria(seria.number)} active={seria.id === active}>
              <Text>Серия {seria.number}.</Text>
              &#8195;
              <Text>{seria.title}</Text>
            </Seria>
          ))
        }
      </div>
    </SeriesList>
  );
}

export default List;
