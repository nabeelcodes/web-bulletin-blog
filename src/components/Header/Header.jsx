import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledHeader, StyledLi } from './Header.styled';
import { Container } from '../../styles/utilities';
import NavLogo from '../NavLogo/NavLogo';

export default function Header() {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	return (
		<StyledHeader>
			<Container flex width='80%' as='nav'>
				<div className='navBrand'>
					<span onClick={handleClick}>
						<NavLogo />
					</span>
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
