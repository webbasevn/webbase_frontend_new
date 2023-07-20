import AuthLayout from "@/layouts/auth";
import { useState } from "react";

// components
import ForgotPasswordForm from "@/partials/auth/forgot-password/form";
import FooterForgotPasswordForm from "@/partials/auth/forgot-password/footer";
import CheckOtpForgotPassword from "@/partials/auth/forgot-password";

export default function ForgotPasswordPage(){

    const [step, setStep] = useState(1);
    const [phone,setPhone] = useState()

    return(
        <>
            {step === 3 
            ?
                <ForgotPasswordForm 
                    phone={phone}
                />
            :
                <CheckOtpForgotPassword 
                    step={step}
                    setStep={setStep}
                    setPhone={setPhone}
                    checkPhoneExits={false}
                    title1="Quên mật khẩu"
                    description1="Để đặt lại mật khẩu mới cho tài khoản của bạn, vui lòng nhập số điện thoại đăng ký"
                    title2="Xác minh số điện thoại"
                    description2="Vui lòng nhập 6 số xác minh trong tin nhắn chúng tôi gửi đến bạn"
                />
            }

            <FooterForgotPasswordForm 
                step={step}
            />
        </>
    )
}

ForgotPasswordPage.Layout = AuthLayout