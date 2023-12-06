import { createClient } from '~/utils/createClient';

export default defineEventHandler(async (event) => {
	const client = createClient();
	const { description } = await readBody(event);

	if (!description) {
		throw new Error('No description provided.');
	}

	const response = await client.api.mutations.createTask({ description });

	if (response.data) {
		return {
			message: 'success',
			data: response.data,
		};
	} else {
		return {
			message: 'failed',
			data: response.error.message,
		};
	}
});
