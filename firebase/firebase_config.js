const { initializeApp } = require('firebase/app');
require('dotenv').config()

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig);

module.exports = app
