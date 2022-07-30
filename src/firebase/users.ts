import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from './index'

export type User = {
  id: string
  name: string
}

export async function getUsers(): Promise<User[]> {
  const users = new Array<User>()
  const usersSnapshot = await getDocs(collection(db, '/users'))

  usersSnapshot.forEach((doc) => {
    const book = doc.data() as User
    users.push({ ...book, id: doc.id })
  })

  return users
}

export async function getUser(id: string): Promise<User | undefined> {
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const documentId = docSnap.id
    const documentData = docSnap.data()
    const user: User = {
      id: documentId,
      name: documentData['name'],
    }

    return user
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')

    return undefined
  }
}
