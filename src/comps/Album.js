import {firestore} from '../Firebase/config';
import React,{useState,useEffect} from 'react';

const useDb = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=> {
        firestore.collection('pics').orderBy('createdAt','desc').onSnapshot((item) => {
                    let documents = item.docs.map(doc => ({
                        link: doc.data().url,
                        creationTime: new Date((doc.data().createdAt.seconds)*1000),
                        id: doc.id
                    })
                    );
                    setDetails(documents);
            }
        )
    }     
    ,[])
    return {details};
}

const Album = () => {
    const docs = useDb().details;
    // const [returnedValue,setReturnedValue] = useState(null);
    if(docs.length) {
        console.log(docs,typeof(docs));
        return (docs.map((instance)=> {

            return (
                <img src={instance.link} alt=""></img>
            )
        }))
    }
    else {
        return (
            <h1>Empty Album </h1>
        )
    }
}
export default Album;