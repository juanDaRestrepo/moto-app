import { db } from "../firebase/firebaseConfig"

export const loadHours = async (uid) => {
    const hoursSnap = await db.collection(`${uid}/resources/hours`).get();
    const takenHours =[]
    hoursSnap.forEach( snapHijo => {
        takenHours.push(snapHijo.data())
    })

    return takenHours;
}