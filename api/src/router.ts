import { Router } from 'express';

import { listStatus } from './app/useCases/status/listStatus';

export const router = Router();

// Create Status
router.post('/status', (req, res) => {
  res.send('OK');
});

// List Status
router.get('/status', listStatus);

// Create Application
router.post('/applications', (req, res) => {
  res.send('OK');
});

// List Applications
router.get('/applications', (req, res) => {
  res.send('OK');
});

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
