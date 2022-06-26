import { Card } from './BlogCard.styled';

export default function BlogCard({ blogDetails }) {
	const { title, description } = blogDetails.attributes;

	return (
		<Card>
			<h3>{title}</h3>
			<p>{description}</p>
		</Card>
	);
}
