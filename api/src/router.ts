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
import { changeApplicationStatus } from './app/useCases/applications/changeApplicationStatus';
import { updateStatus } from './app/useCases/status/updateStatus';
import { updateUser } from './app/useCases/users/updateUser';
import { deleteUser } from './app/useCases/users/deleteUser';
import { deleteApplication } from './app/useCases/applications/deleteApplication';
import { deleteStatus } from './app/useCases/status/deleteStatus';

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

// STATUS

// Create Status
router.post('/status', upload.single('image'), createStatus);

// List Status
router.get('/status', listStatus);

// Update Status
router.patch('/status/:statusId', updateStatus);

// Delete Status
router.delete('/status/:statusId', deleteStatus);

// Get Applications by Status
router.get('/status/:statusId/applications', listApplicationsByStatus);

// APPLICATION

// Create Application
router.post('/applications', createApplication);

// List Applications
router.get('/applications', listApplications);

// Update Application
router.patch('/status/:statusId', (req, res) => {
  res.send('OK');
});

// Change Application Status
router.patch('/applications/:applicationId', changeApplicationStatus);

// Delete Application
router.delete('/applications/:applicationId', deleteApplication);

// USER

// Create User
router.post('/users', upload.single('image'), createUser);

// List Users
router.get('/users', listUsers);

// Update User
router.patch('/users/:userId', updateUser);

// Delete User
router.delete('/users/:userId', deleteUser);
