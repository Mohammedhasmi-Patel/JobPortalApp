import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`datatbase connection successfully`);
  } catch (error) {
    console.log(`error while db connection ${error}`);
  }
};

export default conn;
