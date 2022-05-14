import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setLoading(false));
    };

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            } else {
                setUser({})
                setError('')
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setError('')
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        setLoading,
        googleSignIn,
        logOut
    }
};

export default useFirebase;