import firebase from '@firebase/app';
import '@firebase/storage';

const config = {
  apiKey: 'AIzaSyBvppmNQNomqrpo4US7iOMga-Sa2FAS6ds',
  authDomain: 'cdn-audio.firebaseapp.com',
  projectId: 'cdn-audio',
  storageBucket: 'cdn-audio.appspot.com',
  messagingSenderId: '532833103281',
  appId: '1:532833103281:web:4b9e7c47b538694627e190',
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
