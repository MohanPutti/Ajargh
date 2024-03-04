import { replyReviewService } from "../../services/reviews/replyReview.service.js";

/**
 * create a review reply 
 * @param {*} req 
 * @param {*} res 
 */
const replyReview = async (req,res) =>{
    try{
        const {review_id,text} = req.body;
        let user_id = req.user.userId;
        const review= await replyReviewService({review_id,text,text,user_id});
        
        if(!review.status){
            res.status(500).json({ message: 'Review Reply addition failed' });
        }
        res.status(200).json({ status:'success',data:review.data });
    }
    catch(error){
        res.status(500).json({ message: 'Review Reply creation failed' });
    }
}
export {replyReview}