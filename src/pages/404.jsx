import { Container } from '../styles/utilities';

const cssStyles = {
  display: 'grid',
  placeContent: 'center',
  height: '74.1vh'
};

export default function PageNotFound() {
  return (
    <Container style={cssStyles} width="70%">
      <h1>404, not found my bruh !!</h1>
    </Container>
  );
}
