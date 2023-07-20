import axios from "axios";
import { decryptWb } from "@/components/crypto"
import { response_wb } from "@/resource/return";

export default async function handler(req, res) {

    if (req.method !== 'POST'){
        response_wb(res,'Method not found',null,400)
    }
    
    try {

        const bodyData = JSON.parse(decryptWb(req.body))

        // if(bodyData.secret !== process.env.SECRET_STRING){
        //     response_wb(res,'Dữ liệu không phù hợp',null,400)
        // }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.API_URL}/check-phone-exits`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : bodyData
        };

        const request = await axios(config)

        response_wb(res,'Kiểm tra thành công',{exits: request.data.exits},200)
        
    } catch (error) {
        console.log(error)
        response_wb(res,'Có lỗi, vui lòng f5 trang và thử lại',null,400)
    }
}
  