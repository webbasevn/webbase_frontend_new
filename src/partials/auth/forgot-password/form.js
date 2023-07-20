import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import WebbaseInput from "@/components/ui/input";
import { forgotPasswordSchema } from "@/models/schema";
import axiosClient from "@/api-client/axiosClient";

export default function ForgotPasswordForm({...props}) {

    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const formik = useFormik({
      initialValues: {
        phone: props.phone,
        password: '',
        repeatPassword: ''
      },
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values) => {
        setLoading(true)
        try {
          const req = await axiosClient.post('/forgot-password',values)
          await Swal.fire({
            icon: 'success',
            title: 'Thành công',
            text: 'Cập nhật mật khẩu thành công'
          })
          router.push('/auth/login')
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Ops,...',
            text: 'Có lỗi xảy ra, vui lòng F5 trang và thử lại'
          })
        }
        setLoading(false)
      }
    })

    return(
      <>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={3}>
            <Stack direction="column" spacing={1.5}>

              <WebbaseInput
                id="password" 
                name="password" 
                size="small"
                label="Mật khẩu mới"
                placeholder="Mật khẩu mới"
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
              Đặt lại mật khẩu
            </LoadingButton>

          </Stack>
        </form>
      </>
    )

    
}