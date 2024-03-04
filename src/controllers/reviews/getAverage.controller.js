import {getAverageReviewService} from '../../services/reviews/getAverage.service.js'
/**
 * get average review of a listing
 * @param {*} req 
 * @param {*} res 
 */
const getAverageReview = async (req,res) =>{
    try{
        const {listingId} = req.body;
        const reviews = await getAverageReviewService({listingId});
        if(!reviews.status){
            res.status(500).json({ message: 'Reviews list failed' });
        }
       res.status(200).json({ data:{"listingId":listingId,"averageRating":reviews.data}});
    }
    catch(error){
        res.status(500).json({ message: 'Reviews list failed' });
    }
}
export {getAverageReview}