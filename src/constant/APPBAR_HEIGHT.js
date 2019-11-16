import {Platform} from 'react-native';

export default APPBAR_HEIGHT = Platform.select({
    ios: 22,
    android: 58,
    default: 64,
  });