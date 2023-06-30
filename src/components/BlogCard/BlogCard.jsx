import { useTheme } from 'styled-components';
import readingTime from 'reading-time';
import { StyledBlogCard } from './BlogCard.styled';
import useCheckUrlPath from 'hooks/useCheckUrlPath';

export default function BlogCard({ blogDetails }) {
	const { title, description, content, published_on } = blogDetails;
	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);
	const shortDescription = description.split(' ').slice(0, 20).join(' ');
	const readingStats = readingTime(content ? content : ' ');
	const onBlogsPage = useCheckUrlPath('/blogs');
	const appTheme = useTheme();

	return (
		<StyledBlogCard gradientEffects={onBlogsPage}>
			<div className='summary'>
				<h3>{title}</h3>
				<p>
					{shortDescription} <strong>...read more</strong>
				</p>
			</div>

			{onBlogsPage && (
				<div className='stats'>
					<time className='publishingDate'>{blogPublishingDate}</time>
					<div className='readingStats'>
						<svg
							width='15'
							height='15'
							viewBox='0 0 23 23'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.4676 21.1151C16.9905 21.1151 21.4676 16.638 21.4676 11.1151C21.4676 5.59226 16.9905 1.11511 11.4676 1.11511C5.94477 1.11511 1.46762 5.59226 1.46762 11.1151C1.46762 16.638 5.94477 21.1151 11.4676 21.1151Z'
								stroke={appTheme.colors.fontColor}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M11.4676 5.11511V11.1151L15.4676 13.1151'
								stroke={appTheme.colors.fontColor}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span>{readingStats.text}</span>
					</div>
				</div>
			)}
		</StyledBlogCard>
	);
}
