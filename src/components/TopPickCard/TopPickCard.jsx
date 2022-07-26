import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../styles/utilities';
import { StyledTopPickCard } from './TopPickCard.styled';

export default function TopPickCard({ blogDetails }) {
	const { title, description, published_on } = blogDetails?.attributes;
	const { url, alternativeText } = blogDetails?.attributes?.images?.data?.attributes;

	const regexPatternToReplace = / |(,+ )|\.|,|\?/gm;
	const shallowUrl = title.replaceAll(regexPatternToReplace, '-').toLowerCase();
	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);

	return (
		<StyledTopPickCard>
			<fieldset>
				<legend>Top Pick Of The Week</legend>

				<Link key={blogDetails?.id} href={`/blogs/${blogDetails?.id}-${shallowUrl}`}>
					<a>
						<Container className='outerContainer' flex>
							<Image
								src={url}
								alt={alternativeText}
								width={1200}
								height={700}
								quality={100}
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
							/>

							<Container className='innerContainer'>
								<time className='publishingDate'>{blogPublishingDate}</time>
								<h2>{title}</h2>
								<p>{description}</p>
							</Container>
						</Container>
					</a>
				</Link>
			</fieldset>
		</StyledTopPickCard>
	);
}
