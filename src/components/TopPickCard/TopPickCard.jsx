import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'styles/utilities';
import { StyledTopPickCard } from './TopPickCard.styled';
import { motion } from 'framer-motion';

export default function TopPickCard({ blogDetails }) {
	const { id, title, description, images } = blogDetails;
	const { url, alternativeText } = images?.banner_image;

	const regexPatternToReplace = /(,+ )|\.|,|\' | \'|\'|\/| |\?/gm;
	const shallowUrl = title.replaceAll(regexPatternToReplace, '-').toLowerCase();

	return (
		<StyledTopPickCard
			as={motion.article}
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', stiffness: 98 }}
		>
			<div className='outerContainer'>
				<div className='imageContainerWrapper'>
					<motion.div
						className='imageContainer'
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={url}
							alt={alternativeText}
							priority={true}
							quality={100}
							height={750}
							width={1500}
							objectFit='cover'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
						/>
					</motion.div>
				</div>

				<Container className='innerContainer'>
					<h2>{title}</h2>
					<div className='readMoreContainer'>
						<p>{description}</p>

						<Link
							key={id}
							href={`/blogs/${id}-${shallowUrl}`}
						>
							<a>read more</a>
						</Link>
					</div>
				</Container>
			</div>
		</StyledTopPickCard>
	);
}
