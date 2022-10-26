import Head from 'next/head';
import { Container } from '../styles/utilities';
import { useRouter } from 'next/router';
/*	CSS STYLES ARE FETCHED FROM 'src/styles/utilities.js'	*/

export default function About() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>About - Web Bulletin</title>
			</Head>

			<Container width='70%' aboutPageContainer>
				<h1>About the Project</h1>

				<p>
					Web Bulletin has been born as your everyday blogging site that is powered by{' '}
					<a
						href='https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
						data-tooltip='Strapi developer docs'
						target='_blank'
						rel='noreferrer'
					>
						Strapi Headless CMS
					</a>
					on the backend and Nextjs on the frontend.
				</p>
				<p>
					Strapi provides us with an easy to use
					<a href='https://api-blog-strapi-next.herokuapp.com/admin/' data-tooltip='Strapi Dashboard for this Blog' target='_blank' rel='noreferrer'>
						Dashboard
					</a>
					, which facilitates posting Blog title, body, images and other information. This is converted into an easy to manage JSON by a REST/GraphQL
					API.
				</p>
				<p>
					<a href='https://nextjs.org/docs' data-tooltip='NextJS developer docs' target='_blank' rel='noreferrer'>
						NextJS
					</a>
					on the other hand helps us paint the frontend using this JSON. The website also automatically fetches new blog posts due to powerful
					SSR(Server Side Rendering) & ISR(Incremental Static Regeneration) features provided by NextJS.
				</p>
			</Container>
		</>
	);
}
