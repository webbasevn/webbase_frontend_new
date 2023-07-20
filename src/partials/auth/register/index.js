import { useState } from "react"
import { signInWithPhoneNumber } from 'firebase/auth'
import { authFirebase, renderRecaptcha } from "../../../components/firebase/init"
import HandleAddPhone from "./step1"
import HandleCheckOtp from "./step2"
import Swal from "sweetalert2"

export default function CheckOtp({...props}){

    const [otpVal,setOtpVal] = useState()

    async function handleGetOtp(phoneNumber){
        renderRecaptcha()
        let appVertify = window.recaptchaVerifier;
        const phone = '+84' + phoneNumber.slice(1)
        try {
            const confirmationResult = await signInWithPhoneNumber(authFirebase,phone,appVertify)
            window.confirmationResult = confirmationResult;
            setOtpVal(confirmationResult) 
        } catch (error) {
            Swal.fire({
              icon: 'warning',
              title: 'Cảnh báo spam',
              text: 'Bạn đã gửi yêu cầu quá nhiều lần với số điện thoại này, vui lòng thử lại sau 30p'
            })
        }
    }

    return(
        <>
            <div id="recaptcha-container"></div>
            {props.step === 1 &&
                <HandleAddPhone
                    title={props.title1}
                    description={props.description1}
                    setStep={props.setStep}
                    handleGetOtp={handleGetOtp}
                    setPhone={props.setPhone}
                    checkPhoneExits={props.checkPhoneExits}
                />
            }
            {props.step === 2 &&
                <HandleCheckOtp
                    title={props.title2}
                    description={props.description2}
                    otpVal={otpVal}
                    setStep={props.setStep}
                />
            }
        </>
    )
}