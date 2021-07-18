import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import { Container, Breadcrumbs } from '../../components';
import { Player, Header, List, SeeAlso } from './components';
import { Grid, ContentContainer, SideContainerDesctop, BottomContainerMobile, ListContainer } from './styles';

function Season({ breadcrumbs, seria, switchSeria, series, seeAlso }) {
  const [isOpen, setOpen] = useState(false);
  const switchMenu = () => setOpen(!isOpen);

  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Grid>
        <ContentContainer>
          <Header>
            <span>{seria.serial}</span>
            <span>{seria.title}</span>
          </Header>
          <Player url={seria.link} />
        </ContentContainer>
        <SideContainerDesctop>
          <ListContainer>
            <Header>
              Список серий
            </Header>
            <List series={series} switchSeria={switchSeria} active={seria.id} />
          </ListContainer>

          <SeeAlso list={seeAlso} />
        </SideContainerDesctop>

        <BottomContainerMobile>
          <Header onClick={switchMenu}>
            Список серий
            {
              isOpen ?
                <Icon icon={chevronUp} /> :
                <Icon icon={chevronDown} />
            }
          </Header>
          { isOpen && <List series={series} switchSeria={switchSeria} active={seria.id} />}
        </BottomContainerMobile>
      </Grid>
    </Container>
  );
}

Season.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  series:      PropTypes.array.isRequired,
  seria:       PropTypes.object.isRequired,
  seeAlso:     PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Season;
