import { decryptWb } from "@/components/crypto"

export default function handler(req, res) {

    try{
        const bodyData = JSON.parse(decryptWb(req.body))
        res.status(200).json(true)
    }catch(err){
        res.status(400).json('Request Not Allow')
    }
    
}
  