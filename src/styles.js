import { StyleSheet ,Dimensions} from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default styles = StyleSheet.create({
  baseScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#181818',
  },
  homeContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#181818',
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
    borderRadius: 3,
  },
  buttonMain: {
    width: winWidth/3,
    height: winWidth/3/2.5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonImage:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  whiteText: {
    color: '#fff',
    letterSpacing: 1.5,
    fontSize : 14,
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
    color: '#f0f1f1',
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