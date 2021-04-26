
import React,{ useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import ShowProgress from "./ShowProgress"
const useStylesforAppbar = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white"
  },
  input: {
    display: "none"
  },
  button: {
    color: blue[900],
    margin: 10
  }
}));

function ImageUpload() {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const classes = useStylesforAppbar();

  const handleUploadClick = (e) => {
    let selected = e.target.files[0];
    if(selected) {
      setFile(selected);
      setError(null);
    }
    else {
      setError("Please upload an image file. ");
      setFile(null); 
    }
  }


    return (
        <React.Fragment>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        <div className="message">
          {file?(file.name):error}
          {file && <ShowProgress file={file} setFile={setFile} />}
        </div>
        </CardContent>
      </React.Fragment>
    )
}
export default ImageUpload;