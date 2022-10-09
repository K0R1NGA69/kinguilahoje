import React, { useEffect, useState } from 'react';
import { db } from "../../firebase-config"
import { getDoc, doc } from "firebase/firestore"
import Post from '../Post';
import Loader from '../Loader';



export default function ListPosts() {
    const [exchanges, setExchanges] = useState([])
    const kinguilaCollectionRef = doc(db, "kinguilaDb", "divises")
    useEffect(() => {
        const getMoneyExchanges = async () => {
            const docSnap = await getDoc(kinguilaCollectionRef)
            const data = docSnap.data()
            if (docSnap.exists()) {
                setExchanges([...data.exchanges])

            } else {
                console.log("No such document!");
            }
        }
        getMoneyExchanges()
    }, [kinguilaCollectionRef])
    return (
        <>
            {exchanges[0] ? exchanges.sort((a, b) => a.when - b.when).map(({ euro, dolar, when }) => <Post key={when.toDate()} euro={euro} dolar={dolar} when={when} />):<Loader/>}
        </>

    );
}


