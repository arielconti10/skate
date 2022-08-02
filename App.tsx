import * as React from 'react';
import Routes from './src/routes';

import { initializeApp } from 'firebase/app';
import { AuthProvider } from './src/hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwqhW8Nw7Xg7sSETB_625m_yNj3KSjQ0w",
  authDomain: "sktnew-777.firebaseapp.com",
  projectId: "sktnew-777",
  storageBucket: "sktnew-777.appspot.com",
  messagingSenderId: "1051242235544",
  appId: "1:1051242235544:web:9de106dd9d09c1ca67b2ed",
  measurementId: "G-ZF19F62H14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;