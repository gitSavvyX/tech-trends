export default async (request, context) => {
    const country = context.geo?.country?.name || "World";
    return new Response(`Welcome to Tech Trends from ${country}!`, {
        headers: { "Content-Type": "text/plain" }
    });
};