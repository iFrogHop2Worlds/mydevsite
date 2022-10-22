import axios from "axios";

export default async function getReq(url){
        let q =  await axios.get(url);
        console.log("qdata" + q.data)
        return q.data;      
}