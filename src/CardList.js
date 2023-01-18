import React from 'react';
import Card from './Card';

const CarList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => {
    return (
    <Card
      key={index}
      id={user.id}
      name={user.name}
      email={user.email}
      />
    )
  })
  return (
    <div>
      { cardComponent }
    </div>
  );
}

export default CarList;
