import { Box,Text,Button,Image } from "grommet";
import AmulButterImage from '../../assets/amul_butter-img.jpg'

const HomePage = () => {
  return (
    <Box height='100%'>
      <Box style={{ height: "60%", background: "#e1f6ff" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            height:'100%',
          }}
        >
          <Box margin='20px' direction="row">
          <Text style={{ fontSize: "25vw" }}>100.00</Text>
          <Text style={{ fontSize: "5vw" }}>gms</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="row" style={{ height: "40%", background: "#91e0ff" }}>
        <Box width='20%' justify="center" align="center" >
           <Image height="80%" width='80%' fit="contain" margin='20px' src={AmulButterImage}/>
        </Box>
        <Box width='50%'>
          <Box height='100%' direction="row">
            <Box width='50%' justify="around">
              <Text>Batch No : 345258</Text>
              <Text>Target Limit : 100</Text>
              <Text>Low Limit : 99</Text>
              <Text>High Limit : 101</Text>
            </Box>
            <Box width='50%' justify="around">
              <Text>Total Count : 100 </Text>
              <Text>Ok : 80</Text>
              <Text>Over : 12</Text>
              <Text>Under : 8</Text>
              </Box>
          </Box>
        </Box>
        <Box width='30%'>
        <Box height='60%' justify="around">
          <Text>Total Batch Weight : 45</Text>
          <Text>m/min : 30.0</Text>
              <Text>pcs/min : 12</Text>
          </Box>
        <Box width='80%' height='40%' justify="center">
          <Button primary style={{height:'70%'}} label="Re-Zero"/>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
