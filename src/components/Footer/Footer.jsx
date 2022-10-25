import { StyledFooter } from './Footer.styled';
import { Container } from '../../styles/utilities';
import GithubLogo from '../GithubLogo/GithubLogo';
import LinkedinLogo from '../LinkedinLogo/LinkedinLogo';

export default function Footer() {
	return (
		<StyledFooter>
			<Container flex width='80%' className='footerContainer'>
				<div className='footBrand'>Web Bulletin &trade;</div>

				<div className='footMenu'>
					<ul>
						<li>
							<a href='https://in.linkedin.com/in/nabeel-asif-2549ba142' target='_blank' rel='noreferrer'>
								<LinkedinLogo />
							</a>
						</li>
						<li>
							<a href='https://github.com/nabeelcodes/web-bulletin-blog' target='_blank' rel='noreferrer'>
								<GithubLogo />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</StyledFooter>
	);
}
