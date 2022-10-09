import React, { useEffect, useState } from 'react';
import { arrayUnion, Timestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config"
import { getAuth, signOut } from 'firebase/auth';
import Header from '../Header';

function Register() {
    const [euroBuy, setEuroBuy] = useState()
    const [euroSell, setEuroSell] = useState()
    const [dolarBuy, setDolarBuy] = useState()
    const [dolarSell, setDolarSell] = useState()

    const auth = getAuth()
    const exchange = {
        dolar: { buy: dolarBuy, sell: dolarSell },
        euro: { buy: euroBuy, sell: euroSell },
        when: Timestamp.now()
    }

    useEffect(() => {

        return () => {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
        }
    }, [])

    const handleChange = {
        euroBuy: (e) => { setEuroBuy(e.target.value); },
        euroSell: (e) => { setEuroSell(e.target.value); },
        dolarBuy: (e) => { setDolarBuy(e.target.value); },
        dolarSell: (e) => { setDolarSell(e.target.value); },
    }
    async function addExchange() {
        const divisesRef = doc(db, "kinguilaDb", "divises")
        await updateDoc(divisesRef, {
            exchanges: arrayUnion(exchange)


        }).then(() => alert("Cadastrado com sucesso"))
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="container ">
            <Header/>
            <div className="row text-white justify-content-center mt-md-5 ">
                <div className="col-12 col-md-6 px-5 mt-md-5" style={{ maxWidth: 330 }}>
                    <div className=" mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Compra do Euro</label>
                        <input type="number" className="form-control" onChange={handleChange.euroBuy} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Venda do Euro</label>
                        <input type="number" className="form-control" onChange={handleChange.euroSell} />
                    </div>
                </div>
                <div className="col-12 col-md-6 px-5 mt-md-5" style={{ maxWidth: 330 }}>
                    <div className="mb-3">
                        <label className="form-label">Compra do Dolar</label>
                        <input type="number" className="form-control" onChange={handleChange.dolarBuy} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Venda do Dolar</label>
                        <input type="number" className="form-control" onChange={handleChange.dolarSell} />
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-8 col-md-2">
                        <button type="button" onClick={addExchange} className="btn w-100 btn-info ">Cadastrar</button>
                    </div>

                </div>



            </div>

        </div>
    );
}

export default Register;