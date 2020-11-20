import NextLink from 'next/link';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/fa/chevronRight';
import { Root, Header, SeasonContainer, Link, Description, Episodes, ViewButton } from './styles';

function Season({ seasons }) {
  return (
    <Root>
      <Header>
        Сезонов: {seasons.length}
      </Header>

      {
        seasons.map(season => (
          <NextLink key={season.id} href={{ pathname: `/serial/${season.serialLink}/${season.season}`, query: { seria: 1 }}}>
            <Link>
              <SeasonContainer>
                <Description>
                  <span>Сезон {season.season}</span>
                  <Episodes>Серий: {season.episodes}</Episodes>
                </Description>
                <ViewButton>Смотреть <Icon icon={chevronRight} /></ViewButton>
              </SeasonContainer>
            </Link>
          </NextLink>
        ))
      }
    </Root>
  );
}

Season.propTypes = {
  seasons: PropTypes.array.isRequired,
};

export default Season;
