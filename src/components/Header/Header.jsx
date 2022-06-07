import { StyledHeader } from './Header.styled';
import { Container } from '../../styles/utilities';
import NavLogo from '../NavLogo/NavLogo';
import Link from 'next/link';

export default function Header() {
  return (
    <StyledHeader>
      <Container flex width="80%" as="nav">
        <div className="navBrand">
          <NavLogo />
        </div>

        <div className="navMenu">
          <ul>
            <Link href="/" passHref>
              <li>Blog</li>
            </Link>
            <Link href="/about" passHref>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}
