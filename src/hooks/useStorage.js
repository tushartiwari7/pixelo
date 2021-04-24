import {useState, useEffect} from 'react';
import { backend } from '../Firebase/config';

const useStorage = (picture) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [result,setResult] = useState(null);
    // the code under the useEffect executes everytime the value of file changes
    useEffect(() => {
        const storageRef = backend.ref(picture.name);

        storageRef.put(picture).on('state_changed',
        (snap) => {setProgress((snap.bytesTransferred/snap.totalBytes)*100)},
        (err) => setError(err),
        async () => {
            const link = await storageRef.getDownloadURL();
            setResult(link);
        }
        )

    },[picture])

    return { progress,error,result}
}
export default useStorage;