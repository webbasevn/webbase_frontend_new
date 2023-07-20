import * as yup from 'yup'
const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/

const loginSchema = yup.object({
    phone: yup
        .string()
        .matches(phoneRegExp,'Số điện thoại không đúng định dạng VD: 0986868686')
        .required('Vui lòng nhập số điện thoại'),
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
})

const checkPhoneSchema = yup.object({

    phone: yup
        .string()
        .matches(phoneRegExp,'Số điện thoại không đúng định dạng VD: 0986868686')
        .required('Vui lòng nhập số điện thoại'),

})

const registerSchema = yup.object({
    name: yup
        .string()
        .required('Vui lòng nhập họ tên bạn'),
    phone: yup
        .string()
        .required('Thiếu số điện thoại, vui lòng f5 trang để thử lại'),
    
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),

    repeatPassword: yup
        .string()
        .required('Nhập lại mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})

const forgotPasswordSchema = yup.object({
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
    repeatPassword: yup
        .string()
        .required('Nhập lại mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})

export {
    loginSchema,
    registerSchema,
    checkPhoneSchema,
    forgotPasswordSchema
}