import {StyleSheet} from 'react-native';
import colorPalette from '../../themes/color';
import {w, h, W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorPalette.purple,
    height: W(24),
    justifyContent: 'center',
    flexDirection:"row",
    width:W(100),
  },
  header_text: {
    flex:1,
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    alignSelf:"center",
  },
  profile_container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colorPalette.purple,
  },
  shopping_container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colorPalette.purple,
  },
  image: {
    resizeMode: 'contain',
    position: 'absolute',
    justifyContent:"center",
    alignItems:"center",
    
  },
  image_container: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colorPalette.darkPurple,
    width:W(18),
    height:W(10),
    borderRadius:5,
  },
  image_container_orange: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colorPalette.orange,
    width:W(18),
    height:W(10),
    borderRadius:5,
    flexDirection:"row",
    padding:W(1),
  },
  image_orange: {
    resizeMode: 'contain',
    // position: 'absolute',
    // justifyContent:"center",
    // alignItems:"center",
    flex:1,
    
  },
  orange_shopping_text: {
    flex:1,
    color:"white",
  },
  home_container:{
    flexDirection:"row",
    backgroundColor:"white",
    height:H(8),
    borderRadius: 5,

  },
  image_home_container: {
    width:W(14),
    height:W(12),
    justifyContent:"center",
    alignItems:"center",


  },
  image_home: {
    resizeMode: 'contain',
    position:"absolute",
    top:"50%",
     
  },
  discount_container:{
    flexDirection:"row",
    marginVertical:W(6),
    borderTopWidth:1,
    borderTopColor:colorPalette.lightGray,
    paddingTop:W(5),
    

  },
  discount_text_container1:{
    // flex:1,
    width:W(36),
    backgroundColor:colorPalette.lightBlue,
    // justifyContent:"center",
    // alignItems:"center",
    borderRadius:5,
    marginRight:W(1),
    flex:1,

  },
  discount_text_container2 : {
    width:W(36),
    backgroundColor:colorPalette.purple,
    // justifyContent:"center",
    // alignItems:"center",
    borderRadius:5,
    marginLeft:W(1),
    flex:1,

  },
  discount_text_container1_1:{
    // marginTop:W(2),
    // width:W(28),
    height:H(5),
    textAlign:"center",
    paddingTop:H(2),
    fontSize:12,
    fontWeight:"400",
    color:colorPalette.gray,
  },
  discount_text_container1_2:{
    // width:W(26),
    height:H(5),
    textAlign:"center",
    paddingBottom:H(1),
    fontSize:18,
    fontWeight:"400",
    color:colorPalette.gray,
    textDecorationLine:"line-through",

    
  },
  discount_text_container2_1:{
    height:H(5),
    textAlign:"center",
    paddingTop:H(2),
    fontSize:12,
    fontWeight:"400",
    color:"white",

  },
  discount_text_container2_2:{
    height:H(5),
    textAlign:"center",
    paddingBottom:H(1),
    fontSize:18,
    fontWeight:"700",
    color:"white",
    

  },
  image_home_1: {
    resizeMode: 'contain',
    position:"absolute",
    top:"58%",
  },
  image_home_2: {
    resizeMode: 'contain',
    position:"absolute",
    top:"28%",
  },
  home_text_container: {
  flex:1,
  paddingVertical:W(2)
  
  },
  back:{
    paddingHorizontal:W(6),
    paddingTop:W(4),
    backgroundColor:colorPalette.lightBlue,
  },
  home_text_1: {
    backgroundColor:"white",
    flex:1,
    fontSize:13,
    fontWeight:"500",
    color:colorPalette.black,
  },
  home_text_2: {
    flex:1,
    backgroundColor:"white",
    fontSize:12,
    fontWeight:"400",
  },
  skip_container : {
    width:W(88),
    height:H(6),
    flexDirection:"row",
    marginVertical:H(2),
    alignItems:"center",
  },
  skip_text: {
    width:W(70),
    marginLeft:W(2),
    color:colorPalette.black,
    
  },
  elips_container:{
    width:W(8),
    height:W(8),
    justifyContent:"center",
    alignItems:"center",

  },
  image_elips:{
    resizeMode: 'contain',
    position:"absolute",
    top:"20%",
    right:"30%",
  },
  image_elips_1:{
    resizeMode: 'contain',
    position:"absolute",
    top:"40%",
    right:"50%",
  },
  image_elips_2:{
    resizeMode: 'contain',
    position:"absolute",
    top:"20%",
    left:"80%",

  },
  image_elips_2_1:{
    resizeMode: 'contain',
    position:"absolute",
    top:"40%",
    left:"100%",

  },








});

export default styles;
