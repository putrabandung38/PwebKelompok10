const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv =require('dotenv');

dotenv.config();

const Books = require('../models/books');

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


module.exports.postBooks = (req, res) => {
    Books.create({
     kode: req.body.kode,
     namabuku: req.body.namabuku,
     kategori: req.body.kategori,
     penulis: req.body.penulis,
     penerbit: req.body.penerbit,
     tahun: req.body.tahun,
     stock: req.body.stock,
     harga: req.body.harga
     
    }).then((books)=> {
        res.json(books)
    }).catch((error)=>{
        throw error;
    })
    
}

module.exports.deleteBooks = (req, res) => {
    let conditions = {
        where:{
            id:req.params.id
        }
    }
    Books.destroy(conditions)
        .then((books) => {
            res.json(books)
        }).catch((error) => {
            throw error
        })
}

module.exports.putBooks = (req, res) => {
    let value = {
        kode: req.body.kode,
        namabuku: req.body.namabuku,
        kategori: req.body.kategori,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        tahun: req.body.tahun,
        stock: req.body.stock
        
    }
    let conditions = {
        where :{
            id: req.params.id
        
        }
    }
    Books
    .update(value,conditions)
    .then((books)=> {
        res.json(books)
    }).catch((error)=>{
        throw error;
    })
}
