import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';


const SubRedditItem = ({state, reddit}) => {
  return (
   
    <React.Fragment>    
    {state.map((item, index) => (
      <Card key={index} title={reddit}>
      <CardImg top alt={reddit} src={item.data.thumbnail} />
      <CardBody>
        <CardTitle>{item.data.title}</CardTitle>
        <CardText> {item.data.author}</CardText>
      </CardBody>
    </Card>
      ))}
    </React.Fragment>

  )
};

export default SubRedditItem;
