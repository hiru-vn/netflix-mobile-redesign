import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  baseScreen: {
    width: '100%',
    height: '100%',
  },
  homeContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  recommedList: {
    height: 200,
    width: '100%',
  },
  ThumbnailBackgroundView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
  },
  CurrentImage:{
    top: 25,
    width: 300,
    height: 170,
    borderRadius: 20,
  },
  buttonMain: {
    width: 150,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonImage:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  whiteText: {
    color: '#fff',
    letterSpacing: 1.8,
    fontSize : 15,
    fontWeight : "700",
  },
});

export const customStyles = StyleSheet.create({
  white:{
    color: '#fff',
  },
  gray:{
    color: 'rgb(141,141,141)',
  },
  fullWidth: {
    width: '100%',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
  black: {
    color: '#000',
  },
  spaceAround: {
    alignContent: 'space-around',
    justifyContent:'space-around',
  },
  row :{
    flexDirection: 'row',
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 16,
  },
  bigText: {
    fontSize: 20,
  },
  bold: {
    fontWeight: '700',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent:'center',
  },
  ml10: {
    marginLeft: 10,
  },
  mr10:{
    marginRight:10,
  },
  ml20: {
    marginLeft: 20,
  },
  mr20:{
    marginRight:20,
  },
})