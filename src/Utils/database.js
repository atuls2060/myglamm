import { db } from "./firebase"
import { doc, getDoc, collection, query, where, addDoc, getDocs, startAt, endAt, limit, orderBy } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const firstLetterCapital = (s) => {
    return s[0].toUpperCase() + s.substring(1);
}
export const getSingleProduct = async (id) => {
    const productRef = doc(db, "products", id)

    const docSnap = await getDoc(productRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { ...docSnap.data() }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return {}
    }
}
export const getProductsbyCategory = async (category = "Makeup",order) => {
    const productsRef = collection(db, "products")
    const orderB = order === undefined ? "name" : "actualPrice"
    const o = order === undefined? "desc": order
    const q = query(productsRef,where("category", "==", firstLetterCapital(category)),orderBy(orderB,o));
    

    // if(start){
    //     q.startAt(start)
    // }

    const data = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });
        // start = querySnapshot.docs[querySnapshot.docs.length - 1].data().name;
        return data
    } catch (error) {
        console.log(error)
    }
   
}

export const getProductsbyKeyword = async (keyword = "") => {
    keyword = firstLetterCapital(keyword)
    const productsRef = collection(db, "products")
    const q = query(productsRef, where('name', '>=', keyword), where("name", "<=", keyword + '\uf8ff'));

    // .where('name', '>=', queryText)
    // .where('name', '<=', queryText+ '\uf8ff')

    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
    });

    return data
}
export const getProducts = async () => {
    const productsRef = collection(db, "products")

    const data = [];
    const querySnapshot = await getDocs(productsRef);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
    });

    return data
}
const addProduct = async (product) => {
    try {
        const docRef = await addDoc(collection(db, "products"), product);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// const updateProfile = async (uid,profile) => {
//     try {
//         const productRef = doc(db, "users", id)

//         const docSnap = await getDoc(productRef); 
//         console.log("Document updated with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error updating document: ", e);
//     }
// }



export const loginUserApi = async ({ email, password }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(getAuth(), email, password)
        const user = userCredential.user;
        return { uid: user.uid,name:user.displayName,errorMessage:"" }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {errorMessage}
    }

}

export const createAccountApi = async ({ name, email, password }) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password)
        const user = userCredential.user;
        await updateProfile(user, { displayName: name })
        return { uid: user.uid,name,errorMessage:""  }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {errorMessage}
    }
}




