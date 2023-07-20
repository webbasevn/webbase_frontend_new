import axios from "axios"
import Cookies from 'cookies'
import { decryptWb } from "@/components/crypto"

export default async function CallApiToServer(req, res) {

    // get access token from cookies
    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development'
    })

    const device_id = cookies.get('device_id')
    
    // if(!ClientKey) return res.status(403).json('hết phiên làm việc, vui lòng f5 trang')
    const token = cookies.get('token')
    if(!token) return res.status(403).json('hết phiên làm việc, vui lòng f5 trang')

    const url = req.url.slice(5)

    try{
        
        let config = {
            method: req.method,
            maxBodyLength: Infinity,
            url: `${process.env.API_URL}/${url}`,
            headers: { 
                'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'device_id' : device_id
            },
            data: req.method === 'GET' ? null : JSON.parse(decryptWb(req.body))
        }

        const request = await axios(config)
        
        return res.status(200).json(request?.data)

    }catch(e){
        return res.status(403).json(e?.response?.data?.message || "Lỗi không xác định")
    }
}