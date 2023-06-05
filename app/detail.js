import {Text, View, StyleSheet, Image, Pressable}  from 'react-native' 
import {Entypo, Feather, MaterialCommunityIcons} from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const detailScreen = ()=> {
 const router = useRouter()  
const [open  , setOpen]= useState('') 
const [couter , setCounter] = useState(74)
    return (
        <View style={styles.container}>
           
            <Pressable style={styles.iconContainer} onPress={()=> router.back()}>

<Entypo name="chevron-left" size={30} color="white" />
 </Pressable>
          
         
<View>
    <Image source={require("../assets/images/climate.png")} style={styles.image} />
</View>
<View style={styles.bottomConainer}>
    <Text style={styles.text}>interior 74°F - Extrior 66°</Text>
    <View style={styles.SubContainer}>
        <Pressable onPress={()=>setOpen(!open)} style={styles.icons}>
        <Feather name="power" size={30} color="gray" />
       <Text style={styles.iconText}>{open  ? 'OFF': 'on'

        }
        </Text>
        </Pressable>
        <View style={styles.iconCenter}>
        <Entypo name="chevron-left" size={40} color="gray" onPress={()=> setCounter(couter => couter -1)} />
        <Text style={styles.iconText}>{couter}°F </Text>
        <Entypo name="chevron-right" size={40} color="gray"  onPress={()=> setCounter(couter=> couter + 1 )}/>
        </View>
        <Pressable onPress={()=> setOpen(!open)} style={styles.icons}>
        <MaterialCommunityIcons name="car-door" size={30} color="gray" />
        <Text style={styles.iconText}>{open ? "open": 'close'}</Text>
        </Pressable>
    </View>
</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingTop: 40
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#9c9c9c',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    image: {
     width: "100%",
     height: 600,
     resizeMode: "cover"
     
     
    },
    bottomConainer: {
        backgroundColor: 'black',
        
       
     
    },
    SubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontSize: 20, 
        fontWeight: '500',
        color: 'white',
        marginBottom: 5,
        textAlign: 'center'
    },
    iconCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        alignItems: 'center',
        marginBottom : 2
    },
    iconText: {
        fontSize: 17,
        color: 'white'
    }
})
export default detailScreen