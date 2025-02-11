import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBx42Vr4dHXJxd2dopy2FcKDO8vvRud37Y",
  authDomain: "myproject-d8a41.firebaseapp.com",
  projectId: "myproject-d8a41",
  storageBucket: "myproject-d8a41.firebasestorage.app",
  messagingSenderId: "345254428019",
  appId: "1:345254428019:web:f8ea3e53f925a7e7069906",
  measurementId: "G-JXGXZFV3XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
