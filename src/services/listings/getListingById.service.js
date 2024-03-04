import mysql from "../../models/mysql.js";
const getListingByIdService = async ({listingId}) =>{
    try{
        let listingRes = await mysql.getListing({listingId});
        if(!listingRes){
           return {status:true, data:{}};
        }
        return {status:true, data:listingRes.dataValues};
       
       }
       catch(error){
           return {status:false,error:'listing list failure'};
    }
}
export {getListingByIdService}