import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles data-test="nav">
    <Link href="/features">
      <a>Features</a>
    </Link>
  </NavStyles>
);

export default Nav;
