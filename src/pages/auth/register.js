import AuthLayout from "@/layouts/auth";
import { useState } from "react";

// components
import RegisterForm from "@/partials/auth/register/form";
import CheckOtp from "@/partials/auth/register";
import FooterRegisterForm from "@/partials/auth/register/footer";

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [phone,setPhone] = useState()
    return (
        <>
            {step === 3 
            ?
                <RegisterForm 
                    phone={phone}
                />
            :
                <CheckOtp 
                    step={step}
                    setStep={setStep}
                    setPhone={setPhone}
                    title1="Đăng ký tài khoản"
                    description1="Để đăng ký tài khoản mới, vui lòng nhập số điện thoại bạn đang sử dụng"
                    title2="Xác minh số điện thoại"
                    description2="Vui lòng nhập 6 số xác minh trong tin nhắn chúng tôi gửi đến bạn"
                    checkPhoneExits={true}
                />
            }

            <FooterRegisterForm
                step={step}
                setStep={setStep}
            />
        </>
    );
}

RegisterPage.Layout = AuthLayout;
