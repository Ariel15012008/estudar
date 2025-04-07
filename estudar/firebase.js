// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuração fornecida pelo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBvTwfADFZD4sbV3n_xjbRa9j1UVcvs5Q",
  authDomain: "estudar-4c76e.firebaseapp.com",
  projectId: "estudar-4c76e",
  storageBucket: "estudar-4c76e.firebasestorage.app",
  messagingSenderId: "764484671194",
  appId: "1:764484671194:web:b2b369d36fbc2d52beb7e3",
  measurementId: "G-RWP3KGQHX9"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
