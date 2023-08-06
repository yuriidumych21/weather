import { useState } from 'react';
import { Input, Button } from '@mui/material';
import Results from './Modal';
import { cities } from '../constants';
import { getCurrentWeather, convertTemperature } from '../utils';

const Form = ({ changeScreen }) => {
  const [answers, setAnswers] = useState([]);
  const [activeCityIndex, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const handleNext = async () => {
    if (activeCityIndex < cities.length) {
      const { temp } = await getCurrentWeather(
        cities[activeCityIndex].coordinates
      );

      const newAnswers = [
        ...answers,
        {
          name: cities[activeCityIndex].name,
          temperature: inputValue,
          real: convertTemperature(temp).toFixed(2),
        },
      ];

      setAnswers(newAnswers);
    }
    setIndex(activeCityIndex + 1);

    if (activeCityIndex < cities.length - 1) {
      setInputValue('');
    } else {
      setModalOpened(true);
    }
  };

  const correctAnswers = answers.filter(({ temperature, real }) => {
    return (
      Number(real) > Number(temperature) - 5 && real < Number(temperature) + 5
    );
  });

  return (
    <div>
      {cities[activeCityIndex] && (
        <>
          <h4>{cities[activeCityIndex].name}</h4>
          <Input
            type='number'
            required
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
          <Button onClick={handleNext} disabled={inputValue === ''}>
            Next
          </Button>
        </>
      )}

      <div className='answers'>
        {answers.map(({ name, temperature, real }, index) => (
          <div key={index}>
            <span>{name}</span>: <span>your's - {temperature} C</span>,{' '}
            <span>real - {real} C</span>
          </div>
        ))}
      </div>

      <Results
        open={modalOpened}
        onClose={() => {
          setModalOpened(false);
          changeScreen();
        }}
        correctAnswers={correctAnswers.length}
      />
    </div>
  );
};

export default Form;
