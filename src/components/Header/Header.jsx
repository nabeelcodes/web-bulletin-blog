import { StyledHeader, StyledLi } from './Header.styled';
import { Container } from '../../styles/utilities';
import NavLogo from '../NavLogo/NavLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();

	return (
		<StyledHeader>
			<Container flex width='80%' as='nav'>
				<div className='navBrand'>
					<Link href='/'>
						<a>
							<NavLogo />
						</a>
					</Link>
				</div>

				<div className='navMenu'>
					<ul>
						<Link href='/blogs'>
							<a>
								<StyledLi activeLink={router.asPath === '/blogs' ? true : false}>Blogs</StyledLi>
							</a>
						</Link>
						<Link href='/about'>
							<a>
								<StyledLi activeLink={router.asPath === '/about' ? true : false}>About</StyledLi>
							</a>
						</Link>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
