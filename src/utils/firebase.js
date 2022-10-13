import {
  collection,
  doc,
  getDoc,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

export const createMember = async (user) => {
  const docRef = doc(db, `members/${user.uid}`)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    console.log('Adding Data')
    const { uid, displayName, email, photoURL } = user
    const newDocRef = doc(db, `members/${uid}`)
    await setDoc(newDocRef, {
      displayName,
      email,
      photoURL,
      createdAt: serverTimestamp(),
    })
  }
}

export const getMemberData = async (uid) => {
  const docRef = doc(db, `members/${uid}`)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  }
}
