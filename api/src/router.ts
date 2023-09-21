import { Router } from 'express';

import { createStatus } from './app/useCases/status/createStatus';
import { listStatus } from './app/useCases/status/listStatus';
import { listApplications } from './app/useCases/applications/listApplications';

export const router = Router();

// Create Status
router.post('/status', createStatus);

// List Status
router.get('/status', listStatus);

// Update Status
router.patch('/status/:statusId', (req, res) => {
  res.send('OK');
});

// Create Application
router.post('/applications', (req, res) => {
  res.send('OK');
});

// List Applications
router.get('/applications', listApplications);

// Get Applications by Status
router.get('/status/:statusId/applications', (req, res) => {
  res.send('OK');
});

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
router.post('/users', (req, res) => {
  res.send('OK');
});

// List Users
router.get('/users', (req, res) => {
  res.send('OK');
});

// Update User
router.patch('/user/:userId', (req, res) => {
  res.send('OK');
});

// Delete User
router.delete('/user/:userId', (req, res) => {
  res.send('OK');
});
