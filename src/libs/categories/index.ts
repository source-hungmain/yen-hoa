import createApiServer from "../apiServer";

export async function getListCategories() {
    const apiServer = createApiServer(); // Tạo instance Axios

    try {
        const res = await apiServer.get("/categories", {
            params: {
                embed: "parent,children",
                perPage: 4,
                page: 1,
                sort: "lft",
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching new getPosts:", error);
        return null; // Tránh lỗi làm crash app
    }
}