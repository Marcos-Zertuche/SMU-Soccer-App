import { useState } from 'react';
import { Card } from 'react-bootstrap';


export default function NextGame() {
  
return (
 
<Card 
style={{ width: '25rem' }}
border = 'primary'
bg = 'Dark'
>
      <Card.Header as="h5">Next Game</Card.Header>
      <Card.Body>
        <Card.Title> SMU (10-3-2) vs. Memphis (6-7-2)</Card.Title>

        <Card.Text>
            Wednesday, October 19th, 2022 
        </Card.Text>

        <Card.Text>
            Dallas, Tx | Washburne Soccer and Track Stadium
        </Card.Text>

        <Card.Text>
            American Conference
        </Card.Text>
       
      </Card.Body>
    </Card>
    
  );
  ;
}



//Things to consider

//If home or away
//Conference non-conference
//