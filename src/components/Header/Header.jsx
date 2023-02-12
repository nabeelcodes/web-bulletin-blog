import { useRouter } from 'next/router';
import { StyledHeader, StyledLi } from './Header.styled';
import { Container } from 'styles/utilities';
import NavLogo from 'components/NavLogo/NavLogo';

export default function Header() {
	const router = useRouter();

	const handleClickForNavBrand = (e) => {
		e.preventDefault();
		router.push('/');
	};
	const handleClickForNavLinkBlogs = (e) => {
		e.preventDefault();
		router.push('/blogs');
	};
	const handleClickForNavLinkAbout = (e) => {
		e.preventDefault();
		router.push('/about');
	};

	return (
		<StyledHeader>
			<Container
				flex
				width='80%'
				as='nav'
			>
				<div
					className='navBrand'
					onClick={handleClickForNavBrand}
				>
					<span>
						<NavLogo />
					</span>
				</div>

				<div className='navMenu'>
					<ul>
						<StyledLi
							activeLink={router.asPath === '/blogs' ? true : false}
							onClick={handleClickForNavLinkBlogs}
						>
							<span>Blogs</span>
						</StyledLi>
						<StyledLi
							activeLink={router.asPath === '/about' ? true : false}
							onClick={handleClickForNavLinkAbout}
						>
							<span>About</span>
						</StyledLi>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
