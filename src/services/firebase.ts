import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC-puxz7xyyQ255W25HAAMb6RnSrAaUpF8',
  authDomain: 'reactchat-17b10.firebaseapp.com',
  projectId: "reactchat-17b10",
  storageBucket: "reactchat-17b10.appspot.com",
  messagingSenderId: "312214166851",
  appId: "1:312214166851:web:03775778184f17d0ff23f6"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatListById = (id: string) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId: string) =>
  ref(db, `messages/${chatId}`);

export const getMessagesListRefId = (chatId: string, msgId: string) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);