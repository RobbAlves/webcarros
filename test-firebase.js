import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from './src/services/firebaseConnection'

async function testFirebaseConnection() {
  try {
    console.log('Testing Firebase connection...')
    const carRef = collection(db, "cars")
    const queryRef = query(carRef, orderBy("created", "desc"))
    const snapshot = await getDocs(queryRef)

    console.log(`Found ${snapshot.size} cars in database`)
    snapshot.forEach(doc => {
      console.log('Car:', doc.id, doc.data())
    })
  } catch (error) {
    console.error('Firebase connection error:', error)
  }
}

testFirebaseConnection()