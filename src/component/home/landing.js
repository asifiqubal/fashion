import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Menue from '../../assets/icon/svg/menu';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import Cart from '../../assets/icon/svg/cart';
import {UpdateCart} from '../../rdx/action/cart';

const Landing = props => {
  const {categories, items} = useSelector(state => state._data);
  const {totalItem} = useSelector(state => state._cart);

  function filterFeatured(data) {
    return data.filter(data => data.tags.includes('fetured'));
  }
  function filterBestSell(data) {
    return data.filter(data => data.tags.includes('best_sell'));
  }
  function filterWomen(data) {
    return data.filter(data => data.catId === '01');
  }
  function filterMen(data) {
    return data.filter(data => data.catId === '02');
  }
  function filterBaby(data) {
    return data.filter(data => data.catId === '03');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => console.log('Show Menu')}>
          <Menue />
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.backButton, marginRight: 16}}
          onPress={() => props.navigation.navigate('Cart')}>
          <Cart width={36} />
          <Text
            style={{
              color: '#fff',
              position: 'absolute',
              top: 8,
              right: 6,
              fontSize: 10,
              backgroundColor: '#667EEA',
              borderRadius: 8,
              width: 16,
              height: 16,
              textAlign: 'center',
              paddingBottom: 4,
            }}>
            {totalItem}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 16, flex: 1}}>
        <View>
          <Text style={styles.title}>Category</Text>
          <FlatList
            data={categories ? categories : []}
            horizontal={true}
            keyExtractor={data => data.catId}
            renderItem={({item}) => <Category item={item} />}
          />
        </View>
        <ScrollView style={{marginTop: 8, flex: 1}}>
          <Text style={styles.title}>Featured</Text>
          <FlatList
            data={filterFeatured(items ? items : [])}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={data => data.catId + data.id}
            renderItem={({item}) => <Item item={item} />}
          />
          <Text style={styles.title}>Best Sell</Text>
          <FlatList
            data={filterBestSell(items ? items : [])}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={data => data.catId + data.id}
            renderItem={({item}) => <Item item={item} />}
          />
          <Text style={styles.title}>Women</Text>
          <FlatList
            data={filterWomen(items ? items : [])}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={data => data.catId + data.id}
            renderItem={({item}) => <Item item={item} />}
          />
          <Text style={styles.title}>Men</Text>
          <FlatList
            data={filterMen(items ? items : [])}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={data => data.catId + data.id}
            renderItem={({item}) => <Item item={item} />}
          />
          <Text style={styles.title}>Baby</Text>
          <FlatList
            data={filterBaby(items ? items : [])}
            horizontal={true}
            initialNumToRender={3}
            keyExtractor={data => data.catId + data.id}
            renderItem={({item}) => <Item item={item} />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 50,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  title: {
    color: '#434343',
    fontSize: 22,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: '#000',
    elevation: 8,
  },
  catButton: {
    margin: 8,
    width: 114,
    height: 65,
  },
});

function Category(props) {
  const {item} = props;
  // console.log(item);

  return (
    <TouchableOpacity style={[styles.catButton, styles.shadow]}>
      <ImageBackground
        source={item.catImg}
        resizeMode="cover"
        style={{
          width: 114,
          height: 65,
          overflow: 'hidden',
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 0.1,
        }}>
        <LinearGradient
          colors={item.gColors}
          style={{
            flex: 1,
            width: '100%',
            borderRadius: 6,
            ...styles.center,
          }}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <Text style={{fontSize: 14}}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

function Item(props) {
  const {item} = props;
  const dispatch = useDispatch();
  async function cartHandeler() {
    // console.log(item);
    dispatch(UpdateCart({item, type: 'add'}));
  }
  return (
    <TouchableOpacity style={{margin: 6}} onPress={cartHandeler}>
      <Image
        source={item.img}
        style={{
          height: 180,
          width: 150,
          overflow: 'hidden',
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 0.1,
        }}
        resizeMode="cover"
      />
      <Text style={{color: '#434343', fontSize: 14, fontWeight: '500'}}>
        $ {item.price.toFixed(2)}
      </Text>
      <Text style={{color: '#434343', fontSize: 14, fontWeight: '400'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
