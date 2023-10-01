import { model, Schema } from 'mongoose';

export const Status = model('Status', new Schema({
  imagePath: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  }
}));
