import React from 'react';
import { Link } from 'react-router-dom';

function OtherPage() {
  return (
    <div>
      <p>This is another page in the application</p>
      <Link to='/'>Go to home</Link>
    </div>
  );
}

export default OtherPage;
