import mongoose from "mongoose"
const Mongo_URL = 'mongodb+srv://sajawalamin009:G7MUqgTax47D4ONz@project2.hzwcryr.mongodb.net/project2';
const connectdb = async () => {
    try {
        const conn = await mongoose.connect(Mongo_URL);
        console.log(`connected to mongoogo db ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`mongodb error${error}`);
    }
}
export default connectdb;