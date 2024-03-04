import mysql from "../../models/mysql.js";
const getReviewByIdService = async ({reviewId}) =>{
    try{
        let reviewRes = await mysql.getReview({reviewId});
        if(!reviewRes){
           return {status:true, data:{}};
        }
        return {status:true, data:reviewRes.dataValues};
       
       }
       catch(error){
           return {status:false,error:'review list failure'};
    }
}
export {getReviewByIdService}