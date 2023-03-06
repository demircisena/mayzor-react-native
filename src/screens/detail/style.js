import {StyleSheet} from 'react-native';
import colorPalette from '../../themes/color';
import {w, h, W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
    safeArea:{
    //  width:W(100),
     flex:1,
    },
    imageTop_container:{
        height:H(27),
        position:"relative",
       
        flex:1,
        

    },
    image_product: {
        resizeMode: 'contain',
        width:W(100),
        // position: 'absolute',
        height:"100%",
       flex:1,
    },
    image_heart:{
        position:"absolute",
        right:"13%",
        top:"90%",
        zIndex:1,

    },
elips:{
width:W(12),
height:W(12),
borderRadius:50,
position:"absolute",
    left:W(10),
    top:H(4),

backgroundColor:"white",

},
image_left: {
    position:"absolute",
    left:W(15),
    top:H(6),

},
image_elips_2: {
    position:"absolute",
    left:"10%",
    top:"30%",

},
image_elips_3: {
    position:"absolute",
    right:W(10),
    top:H(10),


},
image_share: {
    position:"absolute",
    right:W(13),
    top:H(12),
    zIndex:1,

},
image_carousel:{
    position:"absolute",
    width:W(25),
    height:W(5),
    top:H(47),
    right:W(35),
    

},
detail_container:{
marginHorizontal:W(10),
// marginVertical:H(6),
flex:1,
// height:H(20),
backgroundColor:"white",

},
price_text_container:{
    marginVertical:H(2),
    paddingHorizontal:H(4),
    borderBottomWidth:1,
    borderBottomColor:colorPalette.lightGray,
},
price_text:{
    marginBottom:H(4),
    fontSize:15,
    fontWeight:"400",
    color:colorPalette.black,
},
time_container: {
    flexDirection:"row",
    
    backgroundColor:colorPalette.orange,
    paddingHorizontal: W(1),
    marginBottom: W(1),
    borderRadius:5,
    paddingVertical:H(1),
  },
  time_text_container_1:{
     width:W(10),
     height:H(6)

  },
  time_text_container: {
      padding:W(1),
     
    //   width:W(10),
    //   height:H(6),
     flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  time_text: {
      width:W(10),
      height:H(5),
    //   flex:1,
      fontSize:12,
      backgroundColor:colorPalette.darkOrange,
      color: "white", 
      borderRadius:5,
      textAlign:"center",

  },
  time_text_1: {
      width:W(22),
    //   height:H(6),
      flex:1,
      fontSize:14,
      color: "white", 
      textAlign:"center",
      marginVertical:"10%",
      marginRight:"3%",
  },
  clock:{
   position:"absolute",
   top:W(2),
   left:W(2),
    
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
  stars_container:{
    flexDirection:"row",
    // alignItems:"center",
   
  },
  stars_image_container:{
    // flex:1,

    marginRight:W(4)
    
  },
  stars_image:{
    resizeMode:"cover",
    
    

  },
  skor_container:{
    // flex:1
    marginLeft:W(4),

  },
  skor_text:{
    

  }



});

export default styles;
