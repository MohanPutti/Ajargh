import mysql from "../../models/mysql.js";
const getAverageReviewService = async ({listingId}) =>{
    try{
        let reviewRes = await mysql.getReviewByListingId({listingId});
        if(!reviewRes){
           return {status:true, data:{}};
        }
        let totalRating=0;
        reviewRes.forEach(review => {
            console.log(review.dataValues.rating);
            totalRating+=review.dataValues.rating;
        });
        const averageRating = totalRating/reviewRes.length;
        return {status:true, data:averageRating};
       
       }
       catch(error){
           return {status:false,error:'review list failure'};
    }
}
export {getAverageReviewService}