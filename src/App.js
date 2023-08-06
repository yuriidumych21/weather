import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Main from './components/Main';
import Form from './components/Form';

function App() {
  const [value, setValue] = useState('1');

  return (
    <div className='App'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <TabPanel value='1'>
            <Main changeScreen={() => setValue('2')} />
          </TabPanel>
          <TabPanel value='2'>
            <Form changeScreen={() => setValue('1')} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;
