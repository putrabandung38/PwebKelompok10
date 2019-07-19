const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv =require('dotenv');
const Books = require('../models/books');


dotenv.config();


module.exports.getIndexBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "OK",
                authData: authData
            })
        }
    })
}

//view all buku = user
module.exports.getIndexBooks = (req, res) =>{
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) =>{
        if(error) {
            res.sendStatus(403);

        }else{
            res.json({
                message: 'OK',
                authData: authData
            })
        }
    })
}


//input buku = admin
module.exports.createBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles'] == "admin"){
            let values ={
                kode: req.body.kode,
                namabuku: req.body.namabuku,
                kategori: req.body.kategori,
                penulis: req.body.penulis,
                penerbit: req.body.penerbit,
                tahun: req.body.tahun,
                stock: req.body.stock,
                harga: req.body.harga
            }
            Books
            .create(values)
            .then((books) => {
                req.json(books);
            })
            .catch((error) =>{
                console.log("data not insert")
            })
        }else{
            res.sendStatus(403)
        }
    })
}          
 
//delete books
module.exports.deleteBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
        if(authData['roles'] == "admin") {
            let condition = {
                where : {
                    id : req.params.id
                }
            }
            Books
            .destroy(condition)
            .then((books) => {
                res.json(books);
                console.log(" Data Terhapus")
            })
            .catch((error) => {
                console.log("data tidak terhaous")
            })
        } else {
            res.sendStatus(403);
        }
    })
}


//update books = admin
module.exports.updateBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
        if(authData['roles'] == "admin"){
            let values ={
                kode: req.body.kode,
                namabuku: req.body.namabuku,
                kategori: req.body.kategori,
                penulis: req.body.penulis,
                penerbit: req.body.penerbit,
                tahun: req.body.tahun,
                stock: req.body.stock,
                harga: req.body.harga
            }
            let condition ={
                where : {
                    id : req.params.id
                }
            }
            Books
            .update(values, condition)
            .then((books) => {
                res.json(books);
            })
            .catch((error) => {
                console.log("Data Not Update");
            })
        }else{
            res.sendStatus(403);
        }
    })
}

module.exports.getAllBooks = (req, res) =>{
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) =>{
        if(authData['roles'] == "user") {
            Books
                .findAll({

                })
                .then((books) =>{
                    res.json(books)
                })
                .catch((error) =>{
                    console.log("data not fond");
                })
        }else{
            res.sendStatus(403);
        }
    })
}


//detail buku

module.exports.detailBooks = (req, res) =>{
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) =>{
        if(authData['roles'] == "user") {
            Books
                .findOne({
                    where : {
                        id : req.params.id
                    }

                })
                .then((books) =>{
                    res.json(books)
                })
                .catch((error) =>{
                    console.log("data not fond");
                })
        }else{
            res.sendStatus(403);
            console.log("Not Akses")
        }
    })
}
