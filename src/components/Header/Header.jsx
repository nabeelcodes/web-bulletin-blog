import Link from 'next/link';
import { StyledHeader, StyledLi } from './Header.styled';
import { Container } from 'styles/utilities';
import NavLogo from 'components/NavLogo/NavLogo';
import useCheckUrlPath from 'hooks/useCheckUrlPath';

export default function Header() {
	return (
		<StyledHeader>
			<Container
				flex
				width='80%'
				as='nav'
			>
				<div className='navBrand'>
					<Link href='/'>
						<a aria-label='link to Home page'>
							<span>
								<NavLogo darkMode={true} />
							</span>
						</a>
					</Link>
				</div>

				<div className='navMenu'>
					<ul>
						<StyledLi activeLink={useCheckUrlPath('/blogs')}>
							<Link href='/blogs'>
								<a aria-label='To Blogs, clicking this link will redirect the website to the all blogs page'>
									<span>Blogs</span>
								</a>
							</Link>
						</StyledLi>

						<StyledLi activeLink={useCheckUrlPath('/about')}>
							<Link href='/about'>
								<a aria-label='To About, clicking this link will redirect the website to the about page'>
									<span>About</span>
								</a>
							</Link>
						</StyledLi>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
