import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfaxJpxwBiJYdnP5gfZNFSnsk_0nBFS6Q",
    authDomain: "project-ksv.firebaseapp.com",
    projectId: "project-ksv",
    storageBucket: "project-ksv.appspot.com",
    messagingSenderId: "322631636836",
    appId: "1:322631636836:web:e3b2206997886a03200c71"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export const getUserDoc = async ({uid,email}) => {
    const userDoc = doc(db, `users/${uid}`);
    const userData = await getDoc(userDoc);

    if (userData.exists()) {
        return userDoc;
    } else {
        const userDoc = await setDoc(doc(db, 'users', uid), {
            category: [],
            email
        });

        return userDoc;
    }
};

export const addCategoryToDB = async (uid, category) => {
    const userDoc = doc(db, `users/${uid}`);
    let data;

    let prevDoc = await getDoc(userDoc);

    if (prevDoc.exists()) {
        data = await updateDoc(userDoc, {categories: arrayUnion(category)});
    } else {
        data = await setDoc(userDoc, {categories: [category]});
    }

    return data;
};

export const getAllCategories = async (uid) => {
    console.log("Try get categories");
    const userDoc = doc(db, `users/${uid}`);
    const userData = await getDoc(userDoc);
    console.log("Go categories");
    console.log(userData.data());

    let ret = userData.data();
    console.log("End of get from db");
    return ret;
};


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider);
};

export const signInUser = (login, password) => {
    return signInWithEmailAndPassword(auth, login, password)
    .then((userData) => {
        console.log('USER SIGN IN', userData);
        return userData;
    })
};

export const registerUser = (login, password) => {
    return createUserWithEmailAndPassword(auth, login, password)
    .then((userData) => {
        console.log('USER REGISTERED', userData);
    });
};

export const logout = async () => {
    await signOut(auth);
};


export const onAuthStateChangedMaker = () => {
    return () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('USER LOGGED IN', user);
            } else {
                console.log('USER LOGGED OUT', user);
            }
        });
    };
}


export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
