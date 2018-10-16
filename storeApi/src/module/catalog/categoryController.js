/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /category
 * ---------------------------------------------------------*/

const express     = require('express');

const Category    = require('./categoryModel');

const controller  = express.Router();


controller.get('/list', async(req, res, next)=>{
    var category = await Category.find();
    
    if(category == null || category == undefined){
        return res.send(204).send({error: 'Not records of category found!'});
    }
    else{
        return res.send({category});
    }
});

controller.post('/register',async(req,res)=>{
    const { name } = req.body;

    try{
        if(await Category.findOne({name}))
            return res.status(400).send({error: 'Category already exists!'});

        const category = await Category.create(req.body);
        
        return res.send({category});
    }
    catch(error){
        return res.status(400).send({error: 'Register category failed'});
    }
});

module.exports = controller;