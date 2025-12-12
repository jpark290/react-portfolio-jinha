/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
Assignment: 2 – Portfolio Application (Node.js + Express + MongoDB)
Date: October 30, 2025
Description:
This file is part of the backend implementation for the portfolio application.
It contributes to Express server configuration, MongoDB integration,
RESTful API endpoints, or authentication logic as required.
*/

import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: 'Name is required' },
  email: {
    type: String, trim: true, unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  hashed_password: { type: String, required: 'Password is required' },
  salt: String
});

UserSchema.virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () { return this._password; });

UserSchema.path('hashed_password').validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.');
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required');
  }
}, null);

UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    } catch {
      return '';
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }
};

export default mongoose.model('User', UserSchema);
