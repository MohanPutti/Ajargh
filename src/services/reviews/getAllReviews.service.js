import mysql from "../../models/mysql.js";
const getAllReviewsService = async () =>{
    try{
        let reviewRes = await mysql.getAllReviews();
        if(!reviewRes){
           return {status:true,data:[]};
        }
        let res=[];
        reviewRes.forEach(review => {
            res.push(review.dataValues)
        });
        return {status:true, data:res};
       
       }
       catch(error){
           return {status:false,error:'review list failure'};
    }
}
export {getAllReviewsService}