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
	const handleClickForBlogs = (e) => {
		e.preventDefault();
		router.push('/blogs');
	};
	const handleClickForAbout = (e) => {
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
				<div className='navBrand'>
					<span onClick={handleClickForNavBrand}>
						<NavLogo />
					</span>
				</div>

				<div className='navMenu'>
					<ul>
						<StyledLi activeLink={router.asPath === '/blogs' ? true : false}>
							<span onClick={handleClickForBlogs}>Blogs</span>
						</StyledLi>
						<StyledLi activeLink={router.asPath === '/about' ? true : false}>
							<span onClick={handleClickForAbout}>About</span>
						</StyledLi>
					</ul>
				</div>
			</Container>
		</StyledHeader>
	);
}
