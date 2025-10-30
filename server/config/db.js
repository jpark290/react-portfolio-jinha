import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'Portfolio',
    });
    console.log(` MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
