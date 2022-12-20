import { db } from "./firebase"
import { doc, getDoc, collection, query, where, addDoc, getDocs } from "firebase/firestore";
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
export const getProductsbyCategory = async (category = "Makeup") => {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", firstLetterCapital(category)));

    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
    });

    return data
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
    console.log("adding")
    try {
        const docRef = await addDoc(collection(db, "products"), product);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

