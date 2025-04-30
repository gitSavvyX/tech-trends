exports.handler = async (event, context) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const city = "Taxila,PK"; // Explicitly set to Taxila, Pakistan

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Unable to fetch weather data" }),
                headers: { "Content-Type": "application/json" }
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description
            }),
            headers: { "Content-Type": "application/json" }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error fetching weather" }),
            headers: { "Content-Type": "application/json" }
        };
    }
};