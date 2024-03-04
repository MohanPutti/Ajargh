import mysql from "../../models/mysql.js";
const deleteReviewService = async ({reviewId}) =>{
    try{
        let reviewRes = await mysql.deleteReview({reviewId});
        
        if(!reviewRes){
           return {status:false,error:'review deletion failure'};
        }
        return {status:true, data:'Successfully deleted '+reviewId};
       
       }
       catch(error){
           return {status:false,error:'review deletion failure'};
       }
}
export {deleteReviewService}