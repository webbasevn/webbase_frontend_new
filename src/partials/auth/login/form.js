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
import { useAuth } from "@/hooks/useAuth";

import WebbaseInput from "@/components/ui/input";
import { loginSchema } from "@/models/schema";

export default function LoginForm() {

    const {login} = useAuth()

    const [showPassword, setShowPassword] = useState(false)
    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const formik = useFormik({
      initialValues: {
        phone: '',
        password: ''
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        setLoading(true)

        try {
          
          await login(values)
          router.push('/')
          return

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Ops,...',
            text: error?.response?.data?.message || "Lỗi rồi"
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
                id="phone" 
                name="phone" 
                size="small"
                placeholder="Số điện thoại"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <Image
                      src="/icon/phone.svg"
                      width={19}
                      height={19}
                      alt="Vi Flag"
                    />
                  </InputAdornment>
                }
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                label="Số điện thoại"
              />
              <WebbaseInput
                id="password" 
                name="password" 
                size="small"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

            </Stack>  

            <LoadingButton
              loading={loading}
              variant="contained"
              size="large"
              type="submit"
              fullWidth
            >
              Đăng nhập
            </LoadingButton>

          </Stack>
        </form>
      </>
    )

    
}
