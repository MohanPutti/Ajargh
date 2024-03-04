import { deleteListingService } from "../../services/listings/deleteListing.service.js";

/**
 * delete listing
 * @param {*} req 
 * @param {*} res 
 */
const deleteListing = async (req,res) =>{
    try{
        const {listingId} = req.params;
        console.log(listingId);
        const result = await deleteListingService({listingId});
        if(!result.status){
            res.status(500).json({ message: 'Listing deletion failed' });
        }
        res.status(200).json({ status:'success',data:result.data });
    }
    catch(error){
        res.status(500).json({ message: 'Listing deletion failed' });
    }
}
export {deleteListing}