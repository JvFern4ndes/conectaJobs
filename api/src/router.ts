import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createStatus } from './app/useCases/status/createStatus';
import { listStatus } from './app/useCases/status/listStatus';
import { listApplications } from './app/useCases/applications/listApplications';
import { listUsers } from './app/useCases/users/listUsers';
import { createUser } from './app/useCases/users/createUser';
import { createApplication } from './app/useCases/applications/createApplication';
import { listApplicationsByStatus } from './app/useCases/status/listApplicationsByStatus';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Create Status
router.post('/status', createStatus);

// List Status
router.get('/status', listStatus);

// Update Status
router.patch('/status/:statusId', (req, res) => {
  res.send('OK');
});

// Create Application
router.post('/applications', createApplication);

// List Applications
router.get('/applications', listApplications);

// Get Applications by Status
router.get('/status/:statusId/applications', listApplicationsByStatus);

// Update Application

// Change Application Status
router.patch('/applications/:applicationId', (req, res) => {
  res.send('OK');
});

// Delete Application
router.patch('/applications/:applicationId', (req, res) => {
  res.send('OK');
});

// Create User
router.post('/users', upload.single('image'), createUser);

// List Users
router.get('/users', listUsers);

// Update User
router.patch('/user/:userId', (req, res) => {
  res.send('OK');
});

// Delete User
router.delete('/user/:userId', (req, res) => {
  res.send('OK');
});
