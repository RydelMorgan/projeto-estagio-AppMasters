import { initializeApp, getApps, FirebaseApp } from 'firebase/app'

const firebaseConfig: any = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}
let firebaseApp: FirebaseApp | undefined

if (firebaseConfig?.projectId) {
  firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
}

export { firebaseApp, firebaseConfig }
