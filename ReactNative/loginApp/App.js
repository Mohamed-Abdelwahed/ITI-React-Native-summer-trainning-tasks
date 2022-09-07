import { TextInput, View , Image,StyleSheet,Text, TouchableOpacity,Alert} from "react-native";




export default function App(){
  return (
    <View style={styles.container}>

      <Image source = {require('./assets/React_Logo.png')} style={styles.myImage}/>

      <TextInput placeholder="Type Your Name" placeholderTextColor={"#000"} style={styles.myInput}/>

      <TextInput placeholder="Type Your Password" secureTextEntry placeholderTextColor={"#000"} style={styles.myInput}/>

      <TextInput placeholder="Type Your Age" keyboardType = 'numeric' placeholderTextColor={"#000"} style={styles.myInput}/>

      <TouchableOpacity style={styles.myBtnContainer} onPress={()=>{
              console.log("You Clicked Register >>>");
              Alert.alert("You clicked Register...","good Job ")
            }}>

        <Text style={styles.myBtn}>Register</Text>

      </TouchableOpacity>

      
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
         alignItems:"center",
         justifyContent:"center",
         flex:1,
        //  backgroundColor:"red"
  },
  myInput:{
    padding:20,
    alignSelf:"stretch",
    borderBottomColor:"#61dafb",
    borderBottomWidth:1,
    marginHorizontal:20,
    // marginBottom:10,
    // lineHeight:20
    // backgroundColor:"red",
  },
  myImage:{
    // borderColor:"red",
    borderWidth:2,
    width:200,
    height:200,
    resizeMode:"contain"

  }
  ,
  myBtnContainer:{
    backgroundColor:"#61dafb",
    alignSelf:"stretch",
    padding:10,
    // textAlign:"center",
    alignItems:"center",
    marginHorizontal:20,
    marginTop:90,
    borderRadius:20,
    // color:"white",
    cursor:"pointer"
  },
  myBtn:{
    color:"#fff",
    fontSize:18,
  
  }

})