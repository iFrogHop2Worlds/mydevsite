import axios from "axios";

export default async function getReq(url){
        let q =  await axios.get(url);
        return q.data;      
}