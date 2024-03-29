import { StyledFooter } from "./Footer.styled";
import { Container } from "styles/utilities";
import GithubLogo from "components/GithubLogo/GithubLogo";
import LinkedinLogo from "components/LinkedinLogo/LinkedinLogo";

export default function Footer() {
  return (
    <StyledFooter>
      <Container flex width="80%" className="footerContainer">
        <div className="footBrand">Web Bulletin &trade;</div>

        <ul className="footMenu">
          <li>
            <a
              href="https://in.linkedin.com/in/nabeel-asif-2549ba142"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nabeelcodes/web-bulletin-blog"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
}
