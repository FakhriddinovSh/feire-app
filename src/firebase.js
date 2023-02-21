import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDlNvxc2wXO2MtGZR2Q8jpsNJ8fckutd8A',
	authDomain: 'fir-app-d35fb.firebaseapp.com',
	projectId: 'fir-app-d35fb',
	storageBucket: 'fir-app-d35fb.appspot.com',
	messagingSenderId: '605326476990',
	appId: '1:605326476990:web:58c39a86c83cc5bb9900ef',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const signInWithGoogle = () => {
	signInWithPopup(auth, provider);
};
