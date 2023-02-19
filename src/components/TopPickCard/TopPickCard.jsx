import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'styles/utilities';
import { StyledTopPickCard } from './TopPickCard.styled';
import { motion } from 'framer-motion';

export default function TopPickCard({ blogDetails }) {
	const { id, title, description, published_on, images } = blogDetails;
	const { url, alternativeText } = images?.banner_image;

	const regexPatternToReplace = /(,+ )|\.|,|\' | \'|\'|\/| |\?/gm;
	const shallowUrl = title.replaceAll(regexPatternToReplace, '-').toLowerCase();
	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);

	return (
		<StyledTopPickCard
			as={motion.article}
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', stiffness: 98 }}
		>
			<fieldset>
				<legend>Top Pick Of The Week</legend>

				<Link
					key={id}
					href={`/blogs/${id}-${shallowUrl}`}
				>
					<a>
						<Container
							className='outerContainer'
							flex
						>
							<div className='imageContainerWrapper'>
								<motion.div
									className='imageContainer'
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									<Image
										src={url}
										alt={alternativeText}
										quality={100}
										width={1300}
										height={750}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
									/>
								</motion.div>
							</div>

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
