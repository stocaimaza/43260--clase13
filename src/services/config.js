import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//Vamos a importar estas dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 


//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la Key personal de acceso a la BD. 

const firebaseConfig = {
  apiKey: "AIzaSyDJOaW84u0vhqY-J1O3E-O0zNztIoInBuU",
  authDomain: "coderhouse-d25aa.firebaseapp.com",
  projectId: "coderhouse-d25aa",
  storageBucket: "coderhouse-d25aa.appspot.com",
  messagingSenderId: "996032839105",
  appId: "1:996032839105:web:35c9987c86c849ae7d0340"
};

//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 