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
  status: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Status',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}));
