import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin-shubham:Test123@cluster0.90axl.mongodb.net/proshop?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB