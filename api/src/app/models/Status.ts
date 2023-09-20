import { model, Schema } from 'mongoose';

export const Status = model('Status', new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}));
