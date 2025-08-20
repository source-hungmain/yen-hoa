import createApiServer from "../apiServer";

export async function getCurrentWeather(latLong?: string) {
    const apiServer = createApiServer("http://api.weatherapi.com/v1"); // Tạo instance Axios

    try {
        const res = await apiServer.get("/current.json", {
            params: {
                lang: "vi",
                api: "yes",
                q: latLong,
                key: "01fc8f65b8254643814101208252008"
            },
        });

        return { weather: res.data.current.condition };
    } catch (error) {
        console.error("Error fetching new getPosts:", error);
        return null; // Tránh lỗi làm crash app
    }
}