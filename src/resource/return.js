export function response_wb(res,message = "",data = null,code = 200){

    return res.status(code).json({
        code: code,
        message: message,
        data: data
    },code)
    
}