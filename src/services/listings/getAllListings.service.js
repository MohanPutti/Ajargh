import mysql from "../../models/mysql.js";
const getAllListingsService = async (req,res) =>{
    try{
        let listingRes = await mysql.getAllListing();
        if(!listingRes){
           return {status:true,data:[]};
        }
        let res=[];
        listingRes.forEach(listing => {
            res.push(listing.dataValues)
        });
        return {status:true, data:res};
       
       }
       catch(error){
           return {status:false,error:'listing list failure'};
    }
}
export {getAllListingsService}