import db from "../../utils/db";
import Property from '../../model/property'

const handler = async(req,res) =>{
    await db.connect();
    await Property.create(req.body);
    res.send({massage: "added"});
}

export default handler;