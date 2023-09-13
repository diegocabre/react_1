import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Tags({texto, background}) {
  return (
    <>
      <Badge bg={background}>{texto}</Badge>
    </>
  );
}

export default Tags;