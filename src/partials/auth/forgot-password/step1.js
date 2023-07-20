import { Alert, Box, InputAdornment, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";

import WebbaseInput from "@/components/ui/input";
import { checkPhoneSchema } from "@/models/schema";
import axiosClient from "@/api-client/axiosClient";

export default function HandleCheckPhoneForgotPassword({...props}) {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const formik = useFormik({
      initialValues: {
        phone: '',
      },
      validationSchema: checkPhoneSchema,
      onSubmit: async (values) => {
        setLoading(true)
        setError(false)
        props.setPhone(values.phone)
        try {
          const req =  await axiosClient.post('/check-phone-exits',values)

          if(!req.exits){
            setLoading(false)
            setError(true)
            return
          }

          // render capcha
          await props.handleGetOtp(values.phone)

          props.setStep(2)

        } catch (error) {
          console.log(error)
          setError(true)
        }
        setLoading(false)
      }
    })

    return(
      <>
        <Typography mb={2} variant="h1" component="h1" fontSize={22} fontWeight={700} textAlign="center" color="#333">
            {props.title}
        </Typography>

        <Typography variant="body2" textAlign="center" my={3}>
          {props.description}
        </Typography>
        <div id="recaptcha-container"></div>
        {error && <Alert severity="error" sx={{mb: 2}}>Số điện thoại chưa được đăng ký, vui lòng kiểm tra lại</Alert>}
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