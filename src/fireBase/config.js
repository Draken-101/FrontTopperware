import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEKbRlYnUfArZkIm8aN-Vbu4Ee45X-Am4",
  authDomain: "bdimages-35380.firebaseapp.com",
  projectId: "bdimages-35380",
  storageBucket: "bdimages-35380.appspot.com",
  messagingSenderId: "128702080430",
  appId: "1:128702080430:web:b7bdc6c2682746da87143f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const storage = getStorage(app);
export async function uploadImg(file, numeroCliente){
    const storageRef = ref(storage, `ImgEntrepreneurs/${numeroCliente}`);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef);
    return url;
}