import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDck_DSWiPc_VFo1jQm647h2N_ulMbUMC0',
	authDomain: 'freshmenu-7359f.firebaseapp.com',
	projectId: 'freshmenu-7359f',
	storageBucket: 'freshmenu-7359f.appspot.com',
	messagingSenderId: '708739950612',
	appId: '1:708739950612:web:65dc3b0da0d6e6beee5f01',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
