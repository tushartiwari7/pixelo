import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({selectedImage}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(selectedImage);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(handleClickOpen,[selectedImage]);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
      <Dialog  fullScreen open={open} onClose={handleClose} color="default" TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {selectedImage.name}
            </Typography>
          </Toolbar>
        </AppBar>
          <img className="modal" src={selectedImage.link} alt={selectedImage.name} />
      </Dialog>
    
  );
}
