import Button from '@mui/material/Button';

const Main = ({ changeScreen }) => {
  return (
    <div class='main-wrapper'>
      <h1>Weather Game</h1>
      <h4>
        You will be presented with 5 cities around the globe and you will need
        to guess the temperature (in Celsius), deviation of up to 5 degrees will
        be considered as a right answer.
      </h4>

      <Button variant='contained' onClick={changeScreen}>
        Let's go
      </Button>
    </div>
  );
};

export default Main;
