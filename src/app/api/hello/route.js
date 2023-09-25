// Using for testing purposes and for learning how to use the API routes in Next.js 13

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello from Next.js!' }));
}

export async function POST(request) {
    return Response.json({ message: 'Hello from Post route!' })
}