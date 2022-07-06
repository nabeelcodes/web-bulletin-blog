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
						<a aria-label='Click on this logo to goto Homepage'>
							<NavLogo />
						</a>
					</Link>
				</div>

				<div className='navMenu'>
					<ul>
						<StyledLi activeLink={router.asPath === '/blogs' ? true : false}>
							<Link href='/blogs'>
								<a>Blogs</a>
							</Link>
						</StyledLi>
						<StyledLi activeLink={router.asPath === '/about' ? true : false}>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</StyledLi>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
