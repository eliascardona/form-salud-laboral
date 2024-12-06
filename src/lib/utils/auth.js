import { auth } from '../sdk/firebase'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const signUpService = async (email = '', pass) => {
    try {
        await createUserWithEmailAndPassword(auth, email, pass)

    } catch (error) {
        let errorCode = ''
        errorCode = error.code
        console.log('error in 2nd layer of auth services', errorCode)
    }
}

const signInService = async (email = '', pass) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass)

    } catch (error) {
        let errorCode = ''
        errorCode = error.code
        console.log('error in 2nd layer of auth services', errorCode)
    }
}


const authTokenResolver = (userCallback, claimsCallback, errHandlerCallback) => {
    return onAuthStateChanged(
        auth,
        async (user) => {
            if (user) {
                userCallback(user.email)
                try {
                    const token = await user.getIdTokenResult(true)
                    const claims = { ...token.claims }
                    if (token.claims.role === 'premium-user') {
                        claimsCallback(claims.role)
                    }
                    claimsCallback(null)

                } catch (e) {
                    console.log(`FB UserClaims: ${e.name}`)
                    if (errHandlerCallback) errHandlerCallback(`FB UserClaims: ${e.name}`)
                }
            }
            claimsCallback(null)

        },
        (err) => {
            userCallback(null)
            if (errHandlerCallback) errHandlerCallback(`FB User: ${err.name}`)

        }
    )
}



export { signUpService, signInService, authTokenResolver }