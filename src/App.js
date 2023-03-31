import {useState,useEffect} from 'react';
import { Grommet,Text,Box } from 'grommet';
import SideBar from './components/Sidebar';
import MainRouting from './MainRouting';


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box background='#91e0ff' height='100%' direction='row' justify='between' align='center' style={{paddingRight:'10px',paddingLeft:'10px'}}>
    <Box><Text color='#000' weight='bold'>ABC ELECTRONICS</Text></Box>
    <Box>{props.currentDateTime}</Box>
    <Box>Operator</Box>
  </Box>
);



function App() {

const [currentDateTime, setCurrentDateTime] = useState('');
const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(1, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const monthsArr = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

  const dateTime = `${day}-${monthsArr[month-1]}-${year}   ${hours}:${minutes}:${seconds}`;
  setCurrentDateTime(dateTime);
};

useEffect(() => {
  const intervalId = setInterval(() => {
    getCurrentDateTime();
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);

  return (
    <Grommet theme={theme} full>
      <Box height='100%' direction='row'>
         <Box width='10%' background='brand' >
         <SideBar/>
         </Box>
         <Box width='90%' >
         <Box height='10%'>
         <AppBar currentDateTime={currentDateTime}/>
         </Box>
         <Box height='90%' >
          <MainRouting/>
         </Box>
         </Box>
      </Box> 
    </Grommet>
  );
}

export default App;
