import { model, Schema } from 'mongoose';

export const User = model('User', new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  application: {
    type: Schema.Types.ObjectId,
    ref: 'Application',
  }
}));
