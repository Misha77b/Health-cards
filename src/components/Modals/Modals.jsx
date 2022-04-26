import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import LogIn from './LogIn/LogIn';
import PropTypes from 'prop-types';
import CreateVisit from './CreateVisit/CreateVisit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: '1px solid #c9c9c9',
  borderRadius: '10px',
  p: 4,
  overflowX: 'hidden',
};

const Modals = ({open, handleClose}) => {

  const auth = useSelector(state => state.authReducer.auth);
  const isAuth = localStorage.getItem('token');

  useEffect(() => {
    if(auth){
      handleClose();
    };
  }, [auth]);
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"        
        
      >
        <DialogContent scroll='body' sx={style}>
          <Button 
            onClick={handleClose}
            disableRipple={true}
            sx={{
                position: 'absolute',
                color: 'black',
                right: '-10px',
                top: '10px',
                padding: '0'
            }}
          >
            <CloseIcon />
          </Button>
          <div>
            {!isAuth ? <LogIn 
              handleClose={handleClose}
              /> : 
              <CreateVisit
                handleClose={handleClose}
              />
            }
          </div>
        </DialogContent>
      </Modal>
    </div>
  );
}

export default Modals

Modals.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}