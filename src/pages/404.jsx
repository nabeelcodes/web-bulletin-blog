import { Container } from '../styles/utilities';

const cssStyles = {
	display: 'grid',
	placeContent: 'center',
	height: 'calc(100vh - 170px)'
};

export default function PageNotFound() {
	return (
		<Container style={cssStyles} width='70%'>
			<h1>404, not found my bruh !!</h1>
		</Container>
	);
}
