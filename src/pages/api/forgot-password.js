import axios from "axios"
import Cookies from 'cookies'
import { decryptWb } from "@/components/crypto"

export default async function CallApiToServer(req, res) {

    try{
        let config = {
            method: req.method,
            maxBodyLength: Infinity,
            url: `${process.env.API_URL}/forgot-password`,
            headers: { 
                'Content-Type' : 'application/json',
            },
            data: JSON.parse(decryptWb(req.body)),
        }

        const request = await axios(config)
        
        return res.status(200).json(request?.data)

    }catch(e){
        return res.status(403).json(e?.response?.data?.message || "Lỗi không xác định")
    }
}