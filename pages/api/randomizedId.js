import db from "../../utils/db";
import Property from "../../model/propertymodel";

export default async function connect(req,res) {

    let randomNumberIdFull;
    let randomNumberIdString;
    let randomNumberId;

await db.connect();
const Props = await Property.find({id:""});
console.log(Props.length)

if(Property.length === 0){
    randomNumberIdFull = Math.random() * Date.now(); 
    randomNumberIdString = randomNumberIdFull.toString();
    randomNumberId = randomNumberIdString.slice(0,6)

} else {
const PropsId = Props.map(id=> id.id)
console.log(PropsId);
randomNumberIdFull = Math.random() * Date.now(); 
randomNumberIdString = randomNumberIdFull.toString();
randomNumberId = randomNumberIdString.slice(0,6)

console.log(randomNumberId);

PropsId.map(id=>{
    if(id.id === randomNumberId) {
        let randomNumberIdFull = Math.random() * Date.now(); 
        let randomNumberIdString = randomNumberIdFull.toString();
        let randomNumberId = randomNumberIdString.slice(0,6)
        console.log(randomNumberId)
    }
    return randomNumberId

})}

res.json({id:randomNumberId})
console.log({randomNumberId})

};