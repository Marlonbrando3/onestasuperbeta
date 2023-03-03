import mongoose from "mongoose"
import Property from '../../model/propertymodel'

export default async function addpropertytomongo(req,res){

    console.log("łączę aby dodać nieruchomość")
    await mongoose.connect(process.env.MONGO_URI);
    console.log("połączyłem aby dodać nieruchomość")


    const newProperty = new Property({
        id: req.body.id,
        country: req.body.country,
        region: req.body.region,
        city: req.body.city,
        title: req.body.title,
        market: req.body.market,
        type: req.body.type,
        seaview: req.body.seaview,
        firstline: req.body.firstline,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
        pool: req.body.pool,
        garden: req.body.garden,
        parking: req.body.parking,
        solarium: req.body.solarium,
        sauna: req.body.sauna,
        taras: req.body.taras,
        balcony: req.body.balcony,
        price: req.body.price,
        distance: req.body.distance,
        description: req.body.description,
        owner: req.body.owner,
        image: req.body.image

    })    
    await newProperty.save();
    res.redirect('newproperty')
    res.send(console.log("Sended to Mongo"))

}