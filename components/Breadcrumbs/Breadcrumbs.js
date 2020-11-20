import { Fragment } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Root, Link, Slash } from './styles';

function Breadcrumbs({ data }) {
  return (
    <Root>
      {
        data.map((crumb, i) => (
          <Fragment key={i}>
            {i !== 0 && <Slash>/</Slash>}
            <NextLink href={crumb.link}>
              <Link>{crumb.title}</Link>
            </NextLink>
          </Fragment>
        ))
      }
    </Root>
  );
}

Breadcrumbs.propTypes = {
  data: PropTypes.array.isRequired
};

export default Breadcrumbs;
