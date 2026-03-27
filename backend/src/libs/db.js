import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_CONNECTIONSTRING) {
      throw new Error("Thiếu MONGODB_CONNECTIONSTRING");
    }

    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết CSDL thành công!");
  } catch (error) {
    console.log("Lỗi khi kết nối CSDL:", error.message);
    process.exit(1);
  }
};
