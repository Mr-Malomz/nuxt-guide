import { APIClient } from '../keelClient';

export const createClient = () => {
	const config = useRuntimeConfig();

	if (!config.public.keelApiUrl) {
		throw new Error(
			'NUXT_PUBLIC_KEEL_API_URL environment variable not set.'
		);
	}

	const client = new APIClient({
		baseUrl: config.public.keelApiUrl,
	});

	return client;
};
