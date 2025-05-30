import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants ',
  },
];
function OutlinedCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(600px, 100%), 1fr))',
        mt:15,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        gap:4,

        
      }}
    >
      {cards.map((card, index) => (
       <Card sx={{
          p: 3,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          boxShadow: 5,
          width: 350,
        //   gap:'5',
        //   mx: 'auto',
 
           
}}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '200px',
            }}
          >
            <CardContent sx={{ height: '100px',textAlign: 'center' }}>
              <Typography variant="h3" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default OutlinedCard;
