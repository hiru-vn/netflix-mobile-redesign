import {Platform} from 'react-native';

export default APPBAR_HEIGHT = Platform.select({
    ios: 20,
    android: 56,
    default: 64,
  });