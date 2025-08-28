// lib/cache.ts
import fs from "fs";
import path from "path";
import createApiServer from "../apiServer";
import { ICategoriesResponse } from "@/interfaces/ICaterory";

const CACHE_PATH = path.resolve("./src/data/categories.json");

export async function getListCategoriesCached() {
    // Nếu file cache tồn tại thì đọc ra
    if (fs.existsSync(CACHE_PATH)) {
        const raw = fs.readFileSync(CACHE_PATH, "utf-8");
        try {
            return JSON.parse(raw);
        } catch {
            console.error("Cache JSON bị lỗi, sẽ fetch lại...");
        }
    }

    // Nếu chưa có cache thì gọi API
    const apiServer = createApiServer();
    try {
        console.log("Fetching categories from API...");
        const res = await apiServer.get("/categories", {
            params: {
                embed: "parent,children",
                perPage: 4,
                page: 1,
                sort: "lft",
            },
        });

        const data = res.data.result;

        // Lưu cache vào file JSON
        fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
        fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2), "utf-8");

        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}


export async function updateListCategoriesCached() {
    const apiServer = createApiServer();
    try {
        console.log("Fetching categories from API...");
        const res = await apiServer.get<ICategoriesResponse>("/categories", {
            params: {
                embed: "parent,children",
                perPage: 4,
                page: 1,
                sort: "lft",
            },
        });

        const data = res.data;

        // Ghi file cache
        fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
        fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2), "utf-8");

        return data;
    } catch (error) {
        console.error("❌ Error updating categories:", error);
        return null;
    }
}