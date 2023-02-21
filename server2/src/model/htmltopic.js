const mongoose=require("mongoose");
const Schema = mongoose.Schema;



const TopicSchema=new Schema({

    
       
          one: {
            type: String,
            required: true,
          },
         two: {
            type: String,
            required: true,
          },
          three: {
            type: String,
            required: true,
          },
          four: {
            type: String,
            required: true,
          },
         five: {
            type: String,
            required: true,
          },
          six: {
            type: String,
            required: true,
          },
      
     
    
})

const Topicpost=mongoose.model("Topicpost",TopicSchema)

module.exports=Topicpost