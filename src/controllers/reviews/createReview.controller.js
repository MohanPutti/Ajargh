import { createReviewService } from "../../services/reviews/createReview.service.js";

/**
 * create a review
 * @param {*} req 
 * @param {*} res 
 */
const createReview = async (req,res) =>{
    try{
        const {listing_id,text,rating} = req.body;
        let user_id = req.user.userId;
        const review= await createReviewService({listing_id,text,rating,user_id});
        
        if(!review.status){
            res.status(500).json({ message: 'Review creation failed' });
        }
        res.status(200).json({ status:'success',data:review.data });
    }
    catch(error){
        res.status(500).json({ message: 'Listing creation failed' });
    }
}
export {createReview}