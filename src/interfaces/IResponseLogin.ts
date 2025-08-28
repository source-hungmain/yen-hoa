export interface IResponseLogin {
    success: boolean;
    message: string;
    result: {
        otp_code: string;
        otp_expires_at: string;
        phone_national: string;
        total_otp_resend_attempts: number;
        user_id: number;
    };
}

export interface IFormLogin {
  sdt: string;
}
