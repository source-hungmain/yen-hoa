import { IResponseLogin } from "@/interfaces/IResponseLogin";
import { apiClient } from "../apiClient";

export function authLogin(phone: string): Promise<IResponseLogin> {
    return apiClient("/auth/login2", {
        method: "POST",
        data: { phone, phone_country: "VN" },
    });
}
