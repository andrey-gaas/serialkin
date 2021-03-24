import PropTypes from 'prop-types';
import PlayerReact from 'react-player';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import {
  Root,
  Header,
  PlayerContainer,
  SeriesContainerDesctop,
  SeriesContainerMobile,
  SeriesList,
  Seria,
  SeriaText,
} from './styles';

function Player({ serial, url, title, series, isOpenMenu, switchMenu, switchSeria }) {
  return (
    <Root>
      <PlayerContainer>
        <Header>
          <span>{serial}</span>
          <span>{title}</span>
        </Header>
        <PlayerReact
          url={url}
          width="100%"
          height="100%"
          controls
        />
      </PlayerContainer>

      <SeriesContainerDesctop>
        <Header>
          Список серий
        </Header>
        
        <SeriesList>
          <div>
            {
              series.map(seria => (
                <Seria key={seria.id} onClick={() => switchSeria(seria.number)}>
                  <SeriaText>Серия {seria.number}.</SeriaText>
                  &#8195;
                  <SeriaText>{seria.title}</SeriaText>
                </Seria>
              ))
            }
          </div>
        </SeriesList>
      </SeriesContainerDesctop>

      <SeriesContainerMobile>
        <Header onClick={switchMenu}>
          Список серий
          {
            isOpenMenu ?
              <Icon icon={chevronUp} /> :
              <Icon icon={chevronDown} />
          }
        </Header>
        {
          isOpenMenu &&
          <SeriesList>
            <div>
              {
                series.map(seria => (
                  <Seria key={seria.id} onClick={() => switchSeria(seria.number)}>
                    <SeriaText>Серия {seria.number}.</SeriaText>
                    &#8195;
                    <SeriaText>{seria.title}</SeriaText>
                  </Seria>
                ))
              }
            </div>
          </SeriesList>
        }
      </SeriesContainerMobile>
    </Root>
  );
}

Player.propTypes = {
  serial:      PropTypes.string.isRequired,
  series:      PropTypes.array.isRequired,
  url:         PropTypes.string.isRequired,
  title:       PropTypes.string.isRequired,
  isOpenMenu:  PropTypes.bool.isRequired,
  switchMenu:  PropTypes.func.isRequired,
  switchSeria: PropTypes.func.isRequired,
};

export default Player;
