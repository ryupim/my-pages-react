import Box from '@mui/material/Box';

import bgImage from '../img/sky_00128.jpg';

const HomeTitle = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Lora, serif',
          color: '#444',
        }}
      >
        <img className="headerImg" src={bgImage} alt="" />
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            fontSize: 40,
          }}
        >
          Portfolio
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            fontSize: 100,
          }}
        >
          Ryupim
        </Box>
      </Box>
    </>
  );
};

export default HomeTitle;
