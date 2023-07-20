import { Box, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";

import WebbaseInput from "@/components/ui/input";
import { registerSchema } from "@/models/schema";

export default function RegisterForm({...props}) {

    const {register} = useAuth()

    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const formik = useFormik({
      initialValues: {
        name: "",
        phone: props.phone,
        password: "",
        repeatPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: async (values) => {
        setLoading(true)
        try {
          await register(values)
          router.push('/auth/change-package')
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }
    })

    return(
      <>
        <Typography mb={2} variant="h1" component="h1" fontSize={22} fontWeight={700} textAlign="center" color="#333">
            Đăng ký
        </Typography>

        <Typography variant="body2" textAlign="center" my={2}>
            Vui lòng hoàn tất form đăng ký bên dưới để đăng ký tài khoản mới
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={3}>
            <Stack direction="column" spacing={1.5}>

              <WebbaseInput
                id="name" 
                name="name" 
                size="small"
                placeholder="Họ tên bạn"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <Image
                      src="/icon/user.svg"
                      width={19}
                      height={19}
                      alt="fullname icon"
                    />
                  </InputAdornment>
                }
                label="Họ tên bạn"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <WebbaseInput
                id="password" 
                name="password" 
                size="small"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <Image
                      src="/icon/lock.svg"
                      width={19}
                      height={16}
                      alt="Vi Flag"
                    />
                  </InputAdornment>
                }

                endAdornment={
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : < Visibility /> }
                  </IconButton>
                }
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

              <WebbaseInput
                id="repeatPassword" 
                name="repeatPassword" 
                size="small"
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type={showRepeatPassword ? 'text' : 'password'}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <Image
                      src="/icon/lock.svg"
                      width={19}
                      height={16}
                      alt="Vi Flag"
                    />
                  </InputAdornment>
                }

                endAdornment={
                  <IconButton onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
                    {showRepeatPassword ? <VisibilityOff /> : < Visibility /> }
                  </IconButton>
                }
                value={formik.values.repeatPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
              />

            </Stack>  

            <LoadingButton
              loading={loading}
              variant="contained"
              size="large"
              type="submit"
              fullWidth
            >
              Đăng ký
            </LoadingButton>

          </Stack>
        </form>
      </>
    )

    
}