import mysql from "../../models/mysql.js";
const updateListingService = async ({listingId,name,phone,city,address,image}) =>{
    try{

        let listingRes = await mysql.updateListing({listingId,name,phone,city,address,image});
        if(!listingRes){
           return {status:false,error:'listing updation failure'};
        }
        
        return {status:true, data:'Listing updated successfully'};
       
       }
       catch(error){
           return {status:false,error:'listing updation failure'};
    }
}
export {updateListingService}