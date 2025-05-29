const API_URL = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

export default async function fetchAPI(query, { variables } = {}) {
	const headers = { "Content-Type": "application/json" };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			"Authorization"
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	const init = {
		method: "POST",
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
		next: { revalidate: 3600 }, // 1 hour
	};

	const res = await fetch(API_URL, init);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	const jsonResponse = await res.json(); // Await the resolution of the Promise

	return jsonResponse.data;
}
