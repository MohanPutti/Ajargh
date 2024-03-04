import {updateReviewService} from '../../services/reviews/updateReview.service.js'
/**
 * update review
 * @param {*} req 
 * @param {*} res 
 */
const updateReview = async (req,res) =>{
    try{
        const {reviewId} = req.params;
        const {text,rating} = req.body;
        const reviews= await updateReviewService({reviewId,text,rating});
        if(!reviews.status){
            res.status(500).json({ message: 'Review updation failed' });
        }
       res.status(200).json({ data:reviews.data});
    }
    catch(error){
        res.status(500).json({ message: 'Review list failed' });
    }
}
export {updateReview}