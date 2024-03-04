import mysql from "../../models/mysql.js";
const deleteListingService = async ({listingId}) =>{
    try{
        let listingRes = await mysql.deleteListing({listingId});
        
        if(!listingRes){
           return {status:false,error:'listing deletion failure'};
        }
        return {status:true, data:'Successfully deleted '+listingId};
       
       }
       catch(error){
           return {status:false,error:'listing deletion failure'};
       }
}
export {deleteListingService}