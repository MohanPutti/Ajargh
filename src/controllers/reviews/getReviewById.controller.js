import {getReviewByIdService} from '../../services/reviews/getReviewById.service.js'
/**
 * get review by id
 * @param {*} req 
 * @param {*} res 
 */
const getReviewById = async (req,res) =>{
    try{
        const {reviewId} = req.params;
        const reviews = await getReviewByIdService({reviewId});
        if(!reviews.status){
            res.status(500).json({ message: 'Reviews list failed' });
        }
       res.status(200).json({ data:reviews.data});
    }
    catch(error){
        res.status(500).json({ message: 'Reviews list failed' });
    }
}
export {getReviewById}