import { StyleSheet, Text, View, Image ,FlatList, Pressable} from "react-native";
import {Link} from 'expo-router'
import {
  FontAwesome,
Entypo,
Ionicons,
MaterialCommunityIcons,
FontAwesome5,
MaterialIcons
} from '@expo/vector-icons'
import carImage from '../assets/images/car2.png'
import iconsOptions from '../assets/data/OptionsData'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View>
        <Text style={styles.textModel}>My Model S</Text>
        <View style={styles.subhader}>
          <FontAwesome name="battery" size={24} color="gray" />
          <Text  style={styles.text}>200 mi</Text>
        </View>
        <Text style={styles.modelName}>Parada 2021</Text>
      </View>
      <FontAwesome name="user-circle-o" size={34} color="gray" />
      </View>
      {/* center  */}

      <View>
<Image source={carImage} style={styles.carImage} />
<View style={styles.Controler}>
  <Entypo name="lock" size={24} color="gray" />
  <FontAwesome5 name="fan" size={24} color="gray" />
  <MaterialCommunityIcons name="lightning-bolt" size={24} color="gray" />
  <Ionicons name="ios-car-sport-sharp" size={24} color="gray" />
</View>
      </View>
      {/* bottom styles */}

  <FlatList  
  data={iconsOptions}
  renderItem={({item})=> (
    <View style={styles.ContainerBotttom}>
      <Link href="/detail" asChild >
    <Pressable style={styles.subContainerBottom} onPress={()=> console.warn('cliked')}>

      <MaterialCommunityIcons name={item.iconName} size={24} color="gray" />
      <Text style={styles.textname}>{item.name}</Text>
    </Pressable>
    </Link>
    <Entypo name="chevron-right" size={24} color="gray" />
  </View>
  )}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'center'
  },

  textModel: {
    fontSize: 30,
    color: 'white',
    fontWeight: '500'
  },

  subhader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 17,
    color: 'white',
    marginLeft: 10
  },
modelName: {
  fontSize: 19,
  color: 'white',
  fontWeight: '500'
},

// car styls 

carImage: {
  width: '100%',
  height: 300,
  resizeMode: 'contain'
},
Controler: {
  flexDirection: 'row',
  justifyContent: 'space-around'
},
// styles bottom

ContainerBotttom: {
  flexDirection: 'row',
  marginVertical: 10,
  justifyContent: 'space-between',
  padding: 10
},
textname: {
  color: 'white',
  fontSize :19,
fontWeight: '500',
marginLeft: 15

},
subContainerBottom: {
  flexDirection: 'row',
  alignItems: 'center'
}

 
});
