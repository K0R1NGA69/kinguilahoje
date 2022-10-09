import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import Post from "../../Components/Post";
import { db } from "../../firebase-config"
import { getDoc, doc } from "firebase/firestore"
import ListPosts from "../../Components/ListPost";
import Header from "../../Components/Header";

export function Home() {

  return (
    <div className="bg-dark">
      <div className='container text-white bg-dark py-3'>
      <Header/>
      <ListPosts />

      <Footer />

    </div>
    </div>
    

  );
}