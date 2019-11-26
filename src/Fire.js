import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqCVyOVNR9-gk3_KnpzuM0sVfNZnHEtS4",
    authDomain: "bay12games-react-83fd0.firebaseapp.com",
    databaseURL: "https://bay12games-react-83fd0.firebaseio.com",
    projectId: "bay12games-react-83fd0",
    storageBucket: "bay12games-react-83fd0.appspot.com",
    messagingSenderId: "766598211600",
    appId: "1:766598211600:web:31126d04f0d02bd3c0c295",
    measurementId: "G-BNRPEWPFGB"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
