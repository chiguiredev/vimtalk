const myAwesomeFuntion = ({x, y}) => {
  if ( x === 'something'){
    y.map(( elem, index ) => {
      console.log(`My fancy value ${elem.value}`);
    });
    return false;
  }
  return true;
}

myAwesomeFuntion(x, y);
