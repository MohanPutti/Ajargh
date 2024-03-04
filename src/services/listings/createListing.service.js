import mysql from "../../models/mysql.js"
const createListingService = async ({name,phone,city,address,image,user_id}) =>{
    try{
     let listingRes = await mysql.createListing({name,phone,city,address,user_id});
     if(!listingRes){
        return {status:false,error:'listing creation failure'};
     }
     return {status:true, data:listingRes.dataValues};
    
    }
    catch(error){
        return {status:false,error:'listing creation failure'};
    }
}
export {createListingService}