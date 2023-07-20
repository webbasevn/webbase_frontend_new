import AuthLayout from "@/layouts/auth"
import LoginForm from "@/partials/auth/login/form"
import { Box, Stack, Typography } from "@mui/material"
import Link from "next/link"

export default function LoginPage(){
    return(
        <>
            <Typography mb={2} variant="h1" component="h1" fontSize={22} fontWeight={700} textAlign="center" color="#333">
                Đăng nhập
            </Typography>
            <LoginForm />
            <Link href="/auth/forgot-password">
                <Typography variant="body2" textAlign="center" mt={2}>
                    Quên mật khẩu?
                </Typography>
            </Link>

            <Box mt={3} mb={4}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>

                    <Typography variant="body2">
                        Bạn chưa có tài khoản ?
                    </Typography>

                    <Link href="/auth/register">
                        <Typography variant="body2" fontWeight={600} color="primary.main">
                            Click vào đây để đăng ký
                        </Typography>
                    </Link>
                </Stack>
            </Box>
        </>
    )
}

LoginPage.Layout = AuthLayout