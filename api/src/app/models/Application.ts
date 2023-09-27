import { model, Schema } from 'mongoose';

export const Application = model('Application', new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
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
    ref: 'Status',
    default: '650b890adc317d1d6fd2a55c',
  }
}));
