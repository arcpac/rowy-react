
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyAuu52YpRBihz_T9VlyzUkrVSWQ9ML5E8g",
            authDomain: "react-database-b36a3.firebaseapp.com",
            projectId: "react-database-b36a3",
            storageBucket: "react-database-b36a3.appspot.com",
            messagingSenderId: "457468358224",
            appId: "1:457468358224:web:7e19df3ccf94a0a60d6b55",
            measurementId: "G-TKCM8Q8WB4"
          };
        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}