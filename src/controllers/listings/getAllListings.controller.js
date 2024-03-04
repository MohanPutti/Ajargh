import { getAllListingsService } from "../../services/listings/getAllListings.service.js"

/**
 * get all listings
 * @param {*} req 
 * @param {*} res 
 */
const getAllListings = async (req,res) =>{
    try{
        const listings = await getAllListingsService();
        if(!listings.status){
            res.status(500).json({ message: 'Listing list failed' });
        }
       res.status(200).json({ data:listings.data});
    }
    catch(error){
        res.status(500).json({ message: 'Listing list failed' });
    }
}
export {getAllListings}