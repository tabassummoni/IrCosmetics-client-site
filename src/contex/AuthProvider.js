import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from '../Firebase/firebase.init';
import useAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const signInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            // Create user in the database if they don't exist
                            const userForDb = {
                                name: currentUser.displayName,
                                email: currentUser.email,
                                role: 'user'
                            };
                            axiosPublic.post('/users', userForDb)
                                .then(dbRes => {
                                    console.log('User saved to database:', dbRes.data);
                                });
                        }
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        updateUserProfile,
        logIn,
        logOut,
        resetPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;