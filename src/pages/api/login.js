import axios from "axios"
import Cookies from 'cookies'
import parser from 'ua-parser-js'
import { decryptWb } from "@/components/crypto"

export default async function loginApi(req, res) {

    if (req.method !== 'POST'){
        return res.status(404).json({
            success: false,
            errorCode: 'REQUEST_NOT_FOUND',
            data: {
                msg: 'Request not found'
            }
        })
    }

    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development'
    })

    let current_device_id = null;

    if(cookies.get('device_id')) current_device_id = cookies.get('device_id')

    const ua = parser(req.headers['user-agent']);

    try{
        let config = {
            method: 'post',
            url: `${process.env.API_URL}/login`,
            headers: { 
                'Content-Type' : 'application/json'
            },
            data : {
                ... JSON.parse(decryptWb(req.body)),
                current_device_id,
                platform: "website",
                devices: {
                    device: ua.device?.model || 'unknow',
                    browser: ua.browser.name,
                    os: ua.os.name
                }
            }
        };

        const request = await axios(config)

        const expires = new Date();

        expires.setDate(expires.getDate() + 365);

        cookies.set('token', request.data.token, {
            httpOnly: true,
            sameSite: 'lax',
            expires: expires,
            maxAge: 86400000 * 365,
        })

        cookies.set('device_id', request.data.device_id, {
            httpOnly: true,
            sameSite: 'lax',
            expires: expires,
            maxAge: 86400000 * 365,
        })

        return res.status(200).json(request.data.message)

    }catch(err){
        return res.status(403).json({
            actionCode: 'show_msg',
            message: err?.response?.data?.message || "Có lỗi, vui lòng liên hệ hỗ trợ để xử lý",
            data: []
        })
    }
}