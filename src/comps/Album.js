import {firestore} from '../Firebase/config';
import React,{useState,useEffect} from 'react';

const useDb = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=> {
        firestore.collection('pics').onSnapshot((item) => {
                    let documents = item.docs.map(doc => ({
                        link: doc.data().url,
                        creationTime: new Date((doc.data().createdAt.seconds)*1000),
                        id: doc.id
                    })
                    );
                    setDetails(documents);
                    console.log({documents});
            }
        )
    }     
    ,[])
    console.log(details);
    return {details};
}

const Album = () => {
    const docs = useDb();
    console.log({docs});
    return (
        <h1>Album images</h1>
    )
}
export default Album;