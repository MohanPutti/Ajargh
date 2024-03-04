import { updateListingService } from "../../services/listings/updateListing.service.js";

/**
 * update listing
 * @param {*} req 
 * @param {*} res 
 */
const updateListing = async (req,res) =>{
    try{
        const {listingId} = req.params;
        const {name,phone,city,address,image} = req.body;
        const listings = await updateListingService({listingId,name,phone,city,address,image});
        if(!listings.status){
            res.status(500).json({ message: 'Listing updation failed' });
        }
       res.status(200).json({ data:listings.data});
    }
    catch(error){
        res.status(500).json({ message: 'Listing list failed' });
    }
}
export {updateListing}