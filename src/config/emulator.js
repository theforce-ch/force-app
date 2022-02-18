import {connectAuthEmulator} from "firebase/auth";

export const Emulator = (auth) => {
    if (process.env.NODE_ENV === 'development') {
        console.info("STAGE: DEVELOPMENT")
        connectAuthEmulator(auth, "http://localhost:9099")
    }
    if (process.env.NODE_ENV === 'production') {
        console.info("STAGE: PROD")
    }
}
