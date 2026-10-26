import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
        horizontal
      >

        <Card
          imagem='https://i.pinimg.com/originals/7d/98/ef/7d98efa35225c35e1015d55f8c2bd27f.jpg'
          nome='gemagays'
        />
        <Card
          imagem='https://th.bing.com/th/id/OIP.NKCUoDIUHI8Jgop18r9SywHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
          nome='jean xerox'
        />
        <Card
          imagem='https://i.pinimg.com/originals/7d/98/ef/7d98efa35225c35e1015d55f8c2bd27f.jpg'
          nome='gemagays'
        />
        <Card
          imagem='https://th.bing.com/th/id/OIP.NKCUoDIUHI8Jgop18r9SywHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
          nome='jean xerox'
        />

      </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#714add',
    padding: 10,
    gap: 20,
  },
  scroll:{
    gap: 20, 
  },
});
