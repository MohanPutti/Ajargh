import { getListingByIdService } from "../../services/listings/getListingById.service.js";

/**
 * get lisitng by id
 * @param {*} req 
 * @param {*} res 
 */
const getListingById = async (req,res) =>{
    try{
        const {listingId} = req.params;
        const listings = await getListingByIdService({listingId});
        if(!listings.status){
            res.status(500).json({ message: 'Listing list failed' });
        }
       res.status(200).json({ data:listings.data});
    }
    catch(error){
        res.status(500).json({ message: 'Listing list failed' });
    }
}
export {getListingById}