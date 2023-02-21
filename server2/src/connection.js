const mongoose =require("mongoose")

const DB="mongodb+srv://shivam:ft12shivam12@cluster0.gde5omw.mongodb.net/?retryWrites=true&w=majority"

const connection=mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
console.log(e.message)
})


module.exports=connection