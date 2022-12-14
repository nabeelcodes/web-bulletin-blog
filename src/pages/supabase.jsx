import { supabase } from '../utils/supabaseClient';

export default function Supabase({ data, error }) {
	return <h1>{data?.[0].title}</h1>;
}

export const getServerSideProps = async () => {
	let { data, error } = await supabase.from('blogs').select('*');

	return {
		props: {
			data,
			error
		}
	};
};
