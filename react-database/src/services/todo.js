import { getDocs, collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import { getDb } from "./db.js";

const collection_name = "todo";

// GET DATA
export const findAll = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  doc_refs.forEach((todo) => {
    res.push({
      id: todo.id,
      ...todo.data(),
    });
  });

  return res;
};

// CREATE
export const create = (args) =>
  addDoc(collection(getDb(), collection_name), args);

// DELETE
export const del = id => deleteDoc(doc(getDb(), collection_name, id));

// UPDATE
export const update = (args) => {
    const {id, ...params} = args
    return setDoc(doc(getDb(), collection_name, id), params);
}