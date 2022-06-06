import { StyledHeader } from './Header.styled';
import { Container } from '../../styles/utilities';

export default function Header() {
  return (
    <StyledHeader>
      <Container flex width="80%" as="nav">
        <div className="navBrand">Web-Bulletin</div>

        <div className="navMenu">
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}
