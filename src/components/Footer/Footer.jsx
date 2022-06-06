import { StyledFooter } from './Footer.styled';
import { Container } from '../../styles/utilities';

export default function Footer() {
  return (
    <StyledFooter>
      <Container flex width="80%">
        <div className="footBrand">Footer Brand</div>

        <div className="footMenu">
          <ul>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </Container>
    </StyledFooter>
  );
}
