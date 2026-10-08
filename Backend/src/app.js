

// server ko create karna

const express = require('express');
const noteModel = require("./models/note.model")

const app = express();
const cors = require("cors")
const path = require("path")



app.use(express.json());
app.use(cors())
app.use(express.static("./public"))

//POST : /api/notes
// create new note and save data in mongodb

app.post("/api/notes",async (req,res)=>{
    const{title,description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created Successfully",
        note
    })

})


//GET : /api/notes
//Fetch all the notes from mongodb and send it them in response
// .find() method is used to fetch all the documents from the collection/database. It returns a promise that resolves to an array of documents.
// ye humesha , data ko in form of array of objects me return karta hai, chahe data me ek hi object ho ya multiple objects ho.

app.get("/api/notes", async (req,res)=>{
   const notes =  await noteModel.find()

   res.status(200).json({
    message:"Notes fetched successfully!",
    notes
   })
})


//DELETE /api.notes/:id
// Delete note withe the id from req.params


app.delete("/api/notes/:id", async (req,res)=>{
        const id = req.params.id
        
        // console.log(id)
        // findByIdAndDelete() 


        await noteModel.findByIdAndDelete(id)

        res.status(200).json({
            message:"Note deleted successfully!"
        })
})

//PATCH /api.notes/:id
// Update description of note withe the id from req.params
// req.body = description

app.patch('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    
    const updatedNote = await noteModel.findByIdAndUpdate(
        id,
        { description },
        { new: true }
    )

    res.status(200).json({
        message:"Note updated successfully!",
        note: updatedNote
    })
})


app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;
