import mysql from "../../models/mysql.js";
const replyReviewService = async ({review_id,text,user_id}) =>{
    try{
        let reviewRes = await mysql.replyReview({review_id,text,user_id});
        if(!reviewRes){
           return {status:false,error:'review reply creation failure'};
        }
        return {status:true, data:reviewRes.dataValues};
       
       }
       catch(error){
           return {status:false,error:'review reply creation failure'};
       }
}
export {replyReviewService}