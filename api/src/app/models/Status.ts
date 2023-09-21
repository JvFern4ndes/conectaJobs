import { model, Schema } from 'mongoose';

export const Status = model('Status', new Schema({
  imagePath: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  }
}));
