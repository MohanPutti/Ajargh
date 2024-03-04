import { deleteReviewService } from "../../services/reviews/deleteReview.service.js";

/**
 * delete review
 * @param {*} req 
 * @param {*} res 
 */
const deleteReview = async (req,res) =>{
    try{
        const {reviewId} = req.params;

        const result = await deleteReviewService({reviewId});
        if(!result.status){
            res.status(500).json({ message: 'Review deletion failed' });
        }
        res.status(200).json({ status:'success',data:result.data });
    }
    catch(error){
        res.status(500).json({ message: 'Review deletion failed' });
    }
}
export {deleteReview}