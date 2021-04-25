import {firestore} from '../Firebase/config';
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useDb = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=> {
        firestore.collection('pics').orderBy('createdAt','desc').onSnapshot((item) => {
                    let documents = item.docs.map(doc => ({
                        link: doc.data().url,
                        creationTime: new Date((doc.data().createdAt.seconds)*1000),
                        id: doc.id,
                        name: doc.data().name,
                    })
                    );
                    setDetails(documents);
            }
        )
    }     
    ,[])
    return {details};
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "--secondary",
    },
    gridList: {
      width: "80vw",
      
    },
  }));
  
const Album = ({setSelectedImage}) => {
    const docs = useDb().details;
    const classes = useStyles();

    if(docs.length) {
        console.log(docs,typeof(docs));
        return (
            
            <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3} >

            {docs.map(instance => 
            <GridListTile key={instance.name} onClick={()=> setSelectedImage(instance)} cols={1}>
                <img src={instance.link} alt={instance.name} />
            </GridListTile>
            )}
            </GridList>
            </div>
        )
    }
    else {
        return (
            <h1>Loading Album... </h1>
        )
    }
}
export default Album;