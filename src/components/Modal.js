import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ResultsModal = ({ open, onClose, correctAnswers }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {correctAnswers >= 3 ? (
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Congratulations, you win. You have {correctAnswers} right guesses.
          </Typography>
        ) : (
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Unfortunately you was not close enough. Please try again.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ResultsModal;
