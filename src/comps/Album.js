import {firestore} from '../Firebase/config';
import React,{useState,useEffect} from 'react';
const [links,setLinks] = useState(null);
useEffect(() => {
    getImages();   
}, [])

const getImages = () => {

    firestore.collection('images').onSnapshot((pics) => {
        setLinks(
            pics.docs.map((pic) => ({
                id: pic.id,
                link: pic.images().link,
            }))
        )
    }


    )



}
const Album = () => {


    return (
        <h1>Album</h1>
        links
    )
}
export default Album;