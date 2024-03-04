import { getAllReviewsService } from "../../services/reviews/getAllReviews.service.js";

/**
 * get all reviews
 * @param {*} req 
 * @param {*} res 
 */
const getAllReviews = async (req,res) =>{
    try{
        const reviews = await getAllReviewsService();
        if(!reviews.status){
            res.status(500).json({ message: 'Reviews list failed' });
        }
       res.status(200).json({ data:reviews.data});
    }
    catch(error){
        res.status(500).json({ message: 'Reviews list failed' });
    }
}
export {getAllReviews}