exports.handler = async (event, context) => {
    const posts = [
        { title: "The AI Revolution in 2025", url: "post1.html", content: "Artificial intelligence is transforming industries, from healthcare to entertainment." },
        { title: "Why Cloud Computing Rules", url: "post2.html", content: "Cloud computing powers businesses with scalability and flexibility." },
        { title: "The Rise of Quantum Computing", url: "post3.html", content: "Quantum computing promises to revolutionize problem-solving." }
    ];

    const query = event.queryStringParameters.query || "";
    const results = posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) || 
        post.content.toLowerCase().includes(query.toLowerCase())
    );

    return {
        statusCode: 200,
        body: JSON.stringify(results),
        headers: { "Content-Type": "application/json" }
    };
};