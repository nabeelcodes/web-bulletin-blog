import Link from 'next/link';
import { StyledNewArticles } from './NewArticles.styled';

function Post({ blog }) {
	const { id, title, description } = blog;
	const regexPatternToReplace = /(,+ )|\.|,|\' | \'|\'|\/| |\?/gm;
	const shallowUrl = blog?.title
		.replaceAll(regexPatternToReplace, '-')
		.toLowerCase();

	return (
		<Link href={`/blogs/${id}-${shallowUrl}`}>
			<a className='post-link'>
				<li className='post'>
					<p className='postTitle'>{title}</p>
					<p className='postDescription'>{description.substring(0, 100)}...</p>
				</li>
			</a>
		</Link>
	);
}

export default function NewArticles({ blogs }) {
	return (
		<StyledNewArticles>
			<p className='title'>New</p>

			<ul className='listWrapper'>
				{blogs &&
					blogs?.slice(1, 4).map((blog) => {
						return (
							<Post
								key={blog.id}
								blog={blog}
							/>
						);
					})}
			</ul>
		</StyledNewArticles>
	);
}
