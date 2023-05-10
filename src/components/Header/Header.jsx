import { StyledHeader, StyledLi } from './Header.styled';
import { Container } from 'styles/utilities';
import NavLogo from 'components/NavLogo/NavLogo';
import useCheckUrlPath from 'hooks/useCheckUrlPath';
import Link from 'next/link';

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
						<Link href='/blogs'>
							<a aria-label='link to blogs page'>
								<StyledLi activeLink={useCheckUrlPath('/blogs')}>
									<span>Blogs</span>
								</StyledLi>
							</a>
						</Link>

						<Link href='/about'>
							<a aria-label='link to about page'>
								<StyledLi activeLink={useCheckUrlPath('/about')}>
									<span>About</span>
								</StyledLi>
							</a>
						</Link>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
