import { createListingService } from "../../services/listings/createListing.service.js";
/**
 * create listing
 * @param {*} req 
 * @param {*} res 
 */
const createListing = async (req,res) =>{
    try{
        const {name,phone,city,address,image} = req.body;
        let user_id = req.user.userId;
        const listing= await createListingService({name,phone,city,address,image,user_id});
        console.log(listing);
        if(!listing.status){
            res.status(500).json({ message: 'Listing creation failed' });
        }
        res.status(200).json({ status:'success',data:listing.data });
    }
    catch(error){
        res.status(500).json({ message: 'Listing creation failed' });
    }
}
export {createListing}