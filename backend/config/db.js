// import mongoose from "mongoose";
import pkg from "mongodb";
const {MongoClient} = pkg;

const connectDB = async () => {
  try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
    
    const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
    const PORT = process.env.PORT || 5000;
    
    client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
//     app.listen(PORT, () => {
//         console.log("listening for requests");
//     })
});


    console.log(`MongoDB Connected: `.cyan.underline);
  } catch (error) {
    console.error(`Error" ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
