import mysql from "../../models/mysql.js";
const createReviewService = async ({listing_id,text,rating,user_id}) =>{
    try{
        let reviewRes = await mysql.createReview({listing_id,text,rating,user_id});
        if(!reviewRes){
           return {status:false,error:'review creation failure'};
        }
        return {status:true, data:reviewRes.dataValues};
       
       }
       catch(error){
           return {status:false,error:'review creation failure'};
       }
}
export {createReviewService}