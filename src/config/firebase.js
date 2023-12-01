import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCpgrVcDXlXLX4WAodmil9VR5VH7ZT4B1E',
  authDomain: 'react-fb-v6-tw.firebaseapp.com',
  projectId: 'react-fb-v6-tw',
  storageBucket: 'react-fb-v6-tw.appspot.com',
  messagingSenderId: '522941673631',
  appId: '1:522941673631:web:2721eb7e839c38f9d1b2aa'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
