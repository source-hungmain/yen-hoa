import { apiClient } from "../apiClient";

export function authLogin(phone: string) {
    return apiClient("/auth/login", {
        method: "POST",
        data: { phone, phone_country: "VN" },
    });
}
