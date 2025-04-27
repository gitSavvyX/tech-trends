exports.handler = async (event, context) => {
    const stats = {
        message: "Cloud Computing in 2025",
        stat: "Over 90% of enterprises use multi-cloud strategies.",
        source: "Simulated data for Tech Trends project"
    };
    return {
        statusCode: 200,
        body: JSON.stringify(stats),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
};