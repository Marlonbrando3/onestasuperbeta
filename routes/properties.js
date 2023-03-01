const express = require('express')
const router = express.Router();
const fs = require('fs')
const writeFile = require('fs')
const path = require('path')
const PropertySchema = require('../utils/property')
const multer  = require('multer');

    const ftpClient = require('ftp-client'),
        config = {
        host: 'serwer141299.lh.pl',
        user: 'serwer141299',
        password: 'Onesta_123_Wroc_!!!',
        },  
        options = {
        logging: 'basic'
        };

    console.log("Jestem w node")
    // console.log(__dirname)


        const storage = multer.diskStorage({ 
            destination: function (req, file, cb) {
            cb(null, 'image')
            },

            
            filename: function (req, file, cb) {
            const data = new Date().toLocaleDateString();
            const id = req.body.id
            const country = req.body.country
            const region = req.body.region
            const uniqueSuffix = '_'+ data + Date.now()+'___' + data + path.extname(file.originalname)
            // const uniqueImgName = req.body.country + req.body.region + req.body.title + Date.now().toLocaleDateString();
            cb(null, id+'_'+country+'_'+ region+ '-' + uniqueSuffix)
            }
        })

    const upload = multer({ storage: storage })
    
    // router.get('/properties', async (req,res) => {
    //     router.push('/panel')
    //     res.send("<p>lalala</p>")
    // });

    router.post('/properties', upload.array('PropImages'), async function (req,res) {

        // const PropImages = req.file
        // console.log(PropImages)
        // console.log("post")
        res.status(200).redirect('https://onesta.com.pl/panel')

        // const download = Buffer.from((req.body).toString('utf-8','base64'));
        // fs.writeFile("/",download)
        // console.log("po zapisaniu")
        // res.end(download);

        // upload(`${download}`);

        // if(images.current !== undefined){
        //     let i;
        //     let NewImages = [];
        //     let FileListContent = images.current.files
        //     let FileListLenght = images.current.files.length
            
        //     let File = FileListContent.item(1)
        //         for(i=0; i<FileListLenght; i++){
        //             NewImages.push(FileListContent[i].name)
        //         }

        //     console.log(NewImages)

        //     return NewImages
        // }   

        // const PropImages = res.download(req.body)
        // const PropImageStringify = JSON.stringify(PropImages)
        // console.log(PropImages)

        // client = new ftpClient(config, options);
        // console.log("Try connect to FTP")
        // await client.connect(function() {
        //     console.log("Logged to FTP")
        //     // console.log(images)
        //     // let imgName = [];
        //     // imgName = images.map(img => img.path)
        //     // console.log(imgName)
        //     client.upload(['public/images/**'], '/public_html/onestaforms.com.pl/images', {
        //         baseDir: 'public/images',
        //         overwrite: 'older'
        //         }, function (result) {
        //           console.log(result);
        //         });
        //     });

            // const images = req.body.image
            // console.log("zdjęcia "+ images)
            // const preUrlImage = images.map(img => "http://onestaforms.com.pl/images/" + img.filename)
            // console.log(preUrlImage)

            // const urlImages = preUrlImage

            // const obj = {
            //     image: req.body.image
            //     } 
            
            // console.log(req.body.image)


    // const newProperty = new PropertySchema({
    //     id: req.body.id,
    //     favorites: req.body.favorites,
    //     recomended:req.body.recomended,
    //     localization: req.body.localization,
    //     meters: req.body.meters,
    //     country: req.body.country,
    //     region: req.body.region,
    //     city: req.body.city,
    //     title: req.body.title,
    //     market: req.body.market,
    //     type: req.body.type,
    //     seaview: req.body.seaview,
    //     firstline: req.body.firstline,
    //     bathrooms: req.body.bathrooms,
    //     bedrooms: req.body.bedrooms,
    //     pool: req.body.pool,
    //     garden: req.body.garden,
    //     parking: req.body.parking,
    //     solarium: req.body.solarium,
    //     sauna: req.body.sauna,
    //     taras: req.body.taras,
    //     balcony: req.body.balcony,
    //     price: req.body.price,
    //     distance: req.body.distance,
    //     description: req.body.description,
    //     owner: req.body.owner,
    //     image: req.body.image
    // })    

    // await newProperty.save();
    // res.redirect('newproperty')
    // res.send(console.log("Sended to Mongo"))
})


module.exports = router