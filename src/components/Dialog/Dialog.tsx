import { useState, forwardRef, Fragment  } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { CharacterData } from '../../utils/models';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({character}:{character:CharacterData}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        See more
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='text-lg font-bold'>{character.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" className='flex gap-2'>
            <div className='w-[50%] flex flex-col items-center justify-center'>
                <img src={character.image} alt="Character image" />
            </div>
            <div className='w-[50%] mx-l-2'>
                <h2 className='text-lg font-bold text-center'>Character info</h2>
                <div>
                    <span className="opacity-[.7]">Status:</span>
                    <h3>{character.status}</h3>
                </div>
                <div>
                    <span className="opacity-[.7]">Species:</span>
                    <h3>{character.species}</h3>
                </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}