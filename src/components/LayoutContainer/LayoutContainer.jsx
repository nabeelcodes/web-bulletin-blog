import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledLayoutContainer } from './LayoutContainer.styled';

export default function LayoutContainer({ children }) {
  return (
    <StyledLayoutContainer>
      <Header />
      {children}
      <Footer />
    </StyledLayoutContainer>
  );
}
