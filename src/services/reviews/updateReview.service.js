import mysql from "../../models/mysql.js";
const updateReviewService = async ({reviewId,text,rating}) =>{
    try{

        let reviewRes= await mysql.updateReview({reviewId,text,rating});
        if(!reviewRes){
           return {status:false,error:'review updation failure'};
        }
        
        return {status:true, data:'Review updated successfully'};
       
       }
       catch(error){
           return {status:false,error:'review updation failure'};
    }
}
export {updateReviewService}