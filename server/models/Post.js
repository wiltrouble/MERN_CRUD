import mongoose from 'mongoose';

const postSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  shift: {
    type: String,
    required: true,
    trim: true
  },
  photo: {
    url: String,
    public_id: String
  },
  registrationDate: {
    type: Date,
  }
})

export default mongoose.model('Post', postSchema)