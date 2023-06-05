import { getDocs, collection, query, where } from "firebase/firestore";
import { getDb } from "./db.js";

const collection_name = "countries";

export const findAll = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  // FIND ALL
  doc_refs.forEach((country) => {
    res.push({
      id: country.id,
      ...country.data(),
    });
  });

  return res;
};

// FIND ONE
// export const findOne = async (id) => {
//   const d = await getDoc(doc(getDb(), collection_name, id));
//   return d.data();
// };

// FIND BY CONTINENT
export const findByContinent = async (continent) => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, where("continent", "==", continent));
  const doc_refs = await getDocs(q);
  const res = [];

  doc_refs.forEach((country) => {
    res.push({
      id: country.id,
      ...country.data(),
    });
  });

  return res
};
