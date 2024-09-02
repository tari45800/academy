import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyBXgDgp1MPvMhHxaV_A8Zlbk7z6PLzXNf0',
//   authDomain: 'prac2-68a51.firebaseapp.com',
//   projectId: 'prac2-68a51',
//   storageBucket: 'prac2-68a51.appspot.com',
//   messagingSenderId: '440936863031',
//   appId: '1:440936863031:web:07bd64bab38c942a23f6b2',
//   measurementId: 'G-QB1W2GZH1D',
// };

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
