import useStorage from '../hooks/useStorage';
import React,{ useEffect } from 'react';
import {firestore} from '../Firebase/config';

const ProgressBar = ({file,setFile}) => {
    const fileName=file.name;
    const {progress,result} = useStorage(file);
    // console.log(progress,result,error,file);
    useEffect(() => {
        if(result) {
            setFile(null);
            firestore.collection("pics").add({
                url: result,
                createdAt: new Date(),
                name: fileName,
            })
        }
    },[result, setFile,fileName])

    return (
        <h2 className="progressBar" style={{width: progress + "%"}}>Uploading...</h2>
    )
}

export default ProgressBar;