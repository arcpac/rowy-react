import { getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./db.mjs"

const collection_name = "todo"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(todo => {
        res.push({
            id: todo.id, 
            ...todo.data()
        })
    })

    return res
}