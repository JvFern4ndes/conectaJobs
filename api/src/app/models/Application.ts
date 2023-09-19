import { model, Schema } from 'mongoose';

export const Application = model('Application', new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}));