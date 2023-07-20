import { Alert, Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
import VerificationInput from "react-verification-input";

export default function HandleCheckOtpForgotPassword({...props}){

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const handleCheckOtp = async (value) => {
        setLoading(true)
        setError(false)
        try {
            await props.otpVal.confirm(value)
            props.setStep(3)
        } catch (error) {
            setError(true)
            console.log(error)
        }
        setLoading(false)
    }

    return(
        <>
            <Typography mb={2} variant="h1" component="h1" fontSize={22} fontWeight={700} textAlign="center" color="#333">
                {props.title}
            </Typography>

            <Typography variant="body2" textAlign="center" my={2}>
                {props.description}
            </Typography>
            {error && <Alert severity="error" sx={{mb: 3}}>Mã OTP không đúng, vui lòng thử lại</Alert>}
            <Stack direction="column" justifyContent="center" alignItems="center" position="relative">
                <VerificationInput
                    onComplete={value => handleCheckOtp(value)}
                    validChars="0-9"
                    inputProps={{ inputMode: "numeric" }}
                />

                {loading &&
                    <Stack 
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            bgcolor: 'rgb(0,0,0,0.1)',
                            zIndex: 1,
                        }}
                    >
                        <CircularProgress size={20}/>
                    </Stack>
                }
            </Stack>
        </>
    )
}