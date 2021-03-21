import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return
  }
/* mongodb+srv://admin:<password>@cluster0.o4oeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */
  return mongoose.connect('mongodb+srv://admin:SuperPizdec228@cluster0.o4oeh.mongodb.net/serialkin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
}

export default dbConnect;
