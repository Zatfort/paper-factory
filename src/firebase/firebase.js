import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBzsGZ7FEgLAV-ajxCWs5VP5SIWSHt_LQ8",
  authDomain: "paper-factory-sale.firebaseapp.com",
  projectId: "paper-factory-sale",
  storageBucket: "paper-factory-sale.appspot.com",
  messagingSenderId: "120851342817",
  appId: "1:120851342817:web:fd62c496d27fcf62581ea0"
};


const app = initializeApp(firebaseConfig); 

export const database = getFirestore(app)