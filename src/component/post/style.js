import {StyleSheet} from 'react-native';
import colorPalette from '../../themes/color';
import {w, h, W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
    container:{
       flexDirection:"row",
       width: W(88),
    //    marginHorizontal: W(2),
       marginTop:W(5),
       height: H(22),
       backgroundColor:"white",
       borderRadius:5,
    },

    Image_container: {
        flex:1,
        // backgroundImage: source= require('../../assest/email-vektor.png'),
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
    },
    discount_container:{
        flex:1,
        backgroundColor:colorPalette.purple,
        width:W(10),
        height:W(6),
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        zIndex:1,
    },
    discount: {
        color:"white",
        fontSize:11,
        fontWeight:"400",
    },
    Image: {
      resizeMode:"contain",
      width:"100%",
      height:"100%",  
    },
    content_container: {
        flex:1,
        marginVertical: H(2),
        
    },
    content_container_top: {
   
     flexDirection:"row",
     alignItems:"center",
     marginLeft:W(1),
     marginBottom:W(1),
     
    },
    Image_super_vektor:{
        marginHorizontal:W(2),
       
    },
    super_vektor_text: {
        fontSize:11,
        color:colorPalette.purple,
        fontWeight:"500",
        // marginLeft:W(2),
    },
    text_Information:{
        marginHorizontal: W(4),
        height:H(4),
        fontSize:12,
        marginBottom: W(1),
        fontWeight:"400",
        lineHeight:14,
        color: colorPalette.black,
    },
     
    time_container: {
      flexDirection:"row",
      backgroundColor:colorPalette.orange,
      paddingHorizontal: W(2),
      marginBottom: W(1),
      
      
    },
    time_text_container: {
        padding:W(2),
        width:W(6),
        height:H(6),
        flex:1,
    },
    time_text: {
        paddingLeft:"1%",
        width:W(8),
        height:H(8),
        flex:1,
        fontSize:10,
        backgroundColor:colorPalette.darkOrange,
        color: "white", 
        textAlign:'center',
        borderRadius:5,

    },
    time_text_1: {
        paddingLeft:"1%",
        width:W(8),
        height:H(8),
        flex:1,
        fontSize:11,
        backgroundColor:colorPalette.orange,
        color: "white", 
    },
    price_container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
    },
    price_container_text_1: {
        flex:1,
        marginVertical:H(2),
        textAlign:"center",
        fontSize:10,
        textDecorationLine:"line-through",

        
    },
    price_container_text_2: {
        flex:1,
        marginVertical:H(2),
        textAlign:"center",
        fontSize:14,
        color:colorPalette.black,
        fontWeight:"700",
        
    }


});

export default styles;
