import { useState } from 'react';
import { Dimensions } from 'react-native';

// custom Hooks
function useDimensions() {
  const [dimension, setDimension] = useState({
    scrWidth: Dimensions.get('window').width,
    scrHeight: Dimensions.get('window').height,
  });
  return dimension;
}

export default useDimensions;
