import useStorage from '../hooks/useStorage';
import React,{ useEffect } from 'react';
import {firestore} from '../Firebase/config';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});
const ProgressBar = ({file,setFile}) => {
    const classes = useStyles();
    const fileName=file.name;
    const {progress,result} = useStorage(file);
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
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default ProgressBar;