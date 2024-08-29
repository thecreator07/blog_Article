import mongoose from "mongoose";


const connectDb = async () => {
    try {
      const connectionInstance = await mongoose.connect(process.env.DB_URL,{dbName:"CardDetails"});
      console.log(
        `MongoDb Connected !!  DB Host: ${connectionInstance.connection.host}`
      );
    } catch (error) {
      console.log("MongoDb connection FALED", error);
      process.exit(1); //forcibly shutdown if error occurs in db connection
    }
  };
  
  export default connectDb