import createApiServer from "../apiServer";

export async function authLogin(phone: string) {
    const apiServer = createApiServer(); // Tạo instance Axios

    try {
        const res = await apiServer.post("/auth/login", {
            params: {
                phone: phone,
                phone_country: "VN",
            },
        });
        return res.data.result;
    } catch (error) {
        console.error("Error fetching new authLogin:", error);
        return null; // Tránh lỗi làm crash app
    }
}