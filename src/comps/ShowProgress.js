import useStorage from '../hooks/useStorage';
import React,{ useEffect } from 'react';
import {firestore} from '../Firebase/config';

const ProgressBar = ({file,setFile}) => {
    const {progress,result,error} = useStorage(file);
    console.log(progress,result,error);
    useEffect(() => {
        if(result) {
            setFile(null);
            firestore.collection("pics").add({
                url: result,
                createdAt: new Date()
            })
        }
    },[result, setFile])

    return (
        <h2 className="progressBar" style={{width: progress + "%"}}>Uploading...</h2>
    )
}

export default ProgressBar;