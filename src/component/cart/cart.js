import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LeftArrow from '../../assets/icon/svg/left_arrow';
import Close from '../../assets/icon/svg/close';
import {PrimaryButton} from '../common/ui_component';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {RdxOrderSccess, UpdateCart} from '../../rdx/action/cart';
import Progress from './progress';
let {width, height} = Dimensions.get('window');

const Cart = props => {
  const dispatch = useDispatch();
  const {items, subtotal} = useSelector(state => state._cart);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(5);
  const [timer, SetTimer] = useState(20);

  function MilliSecond2Time(secs) {
    if (secs === undefined || secs < 0 || typeof secs === 'string')
      return {err: 'Set Valid Second'};
    const seconds = Math.floor((secs / 1000) % 60);
    const minutes = Math.floor((secs / (1000 * 60)) % 60);
    const hours = Math.floor((secs / (1000 * 60 * 60)) % 24);

    return {
      hh: hours,
      mm: minutes,
      ss: seconds,
    };
  }

  function countdown(startTime) {
    const diff = Date.now() - startTime;
    console.log(diff);
    const time = MilliSecond2Time(diff);
    console.log(time);
    SetTimer(20 - time.ss);
  }

  useEffect(() => {
    if (timer <= 0) {
      props.navigation.goBack();
    }
  }, [timer]);
  useEffect(() => {
    const st = Date.now();
    console.log(st);
    const timeInterval = setInterval(() => {
      countdown(st);
    }, 2000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 3);
    }, 1000);

    if (index >= 20 * 100) {
      setIndex(0);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  useEffect(() => {
    if (subtotal > 0) {
      const d = ((subtotal * 5) / 100).toFixed(2);
      setTotal((subtotal - d + 100).toFixed(2));
      setDiscount(d);
    } else if (subtotal <= 0) {
      setTotal(0);
      setDiscount(0);
    }
  }, [subtotal]);

  function showAlert() {
    Alert.alert('Success', 'Your order placed', [
      {
        text: 'OK',
        onPress: () => {
          dispatch(RdxOrderSccess());
          props.navigation.goBack();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <Text style={styles.title}>{timer}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Checkout</Text>
        <View style={{flex: 1}}>
          <FlatList
            data={items}
            renderItem={({item}) => <CartItem data={item} />}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            color: '#000',
            paddingHorizontal: 16,
            margin: 4,
            textAlign: 'justify',
          }}>
          Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
        </Text>
        <View style={{paddingVertical: 16}}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: 'rgba(151, 151, 151, 0.13)',
              height: 1,
            }}
          />
          <View style={{paddingHorizontal: 12, margin: 4}}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                marginVertical: 4,
              }}>
              <Text style={{width: '80%', color: '#919191', fontSize: 16}}>
                Subtotal
              </Text>
              <Text
                style={{
                  color: '#434343',
                  textAlign: 'right',
                  width: '20%',
                  fontSize: 16,
                }}>
                $ {subtotal.toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                marginVertical: 4,
              }}>
              <Text style={{width: '80%', color: '#919191', fontSize: 16}}>
                Discount (5%)
              </Text>
              <Text
                style={{
                  color: '#434343',
                  textAlign: 'right',
                  width: '20%',
                  fontSize: 16,
                }}>
                {discount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                marginVertical: 4,
              }}>
              <Text style={{width: '80%', color: '#919191', fontSize: 16}}>
                Shipping
              </Text>
              <Text
                style={{
                  color: '#434343',
                  textAlign: 'right',
                  width: '20%',
                  fontSize: 16,
                }}>
                $ 100.00
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                backgroundColor: 'rgba(151, 151, 151, 0.13)',
                height: 1,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                marginVertical: 4,
              }}>
              <Text style={{width: '80%', color: '#434343', fontSize: 16}}>
                Total
              </Text>
              <Text
                style={{
                  color: '#434343',
                  textAlign: 'right',
                  width: '20%',
                  fontSize: 16,
                }}>
                $ {total}
              </Text>
            </View>
          </View>
          <View style={{width, paddingHorizontal: 32}}>
            <Progress height={10} step={index} steps={20 * 100} />
          </View>
          <PrimaryButton
            style={{width: width * 0.9}}
            text="Confirm Order"
            onPress={() => showAlert()}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;

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
    color: '#000',
    fontSize: 30,
    paddingHorizontal: 4,
    paddingVertical: 4,
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
});

function CartItem({data}) {
  const {amount, count, item} = data;
  const dispatch = useDispatch();
  async function cartHandeler(type) {
    await dispatch(UpdateCart({item, type: type}));
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden',
        margin: 8,
        ...styles.shadow,
      }}>
      <Image
        source={item.img}
        style={{
          height: 115,
          width: 110,
        }}
        resizeMode="cover"
      />
      <View style={{flex: 1, paddingHorizontal: 8}}>
        <Text style={{color: '#000', fontSize: 16, flex: 1}}>{item.name}</Text>
        <Text style={{color: '#919191', fontSize: 12, flex: 1}}>
          {item.brand}
        </Text>
        <Text style={{color: '#374ABE', fontSize: 16, flex: 1}}>
          $ {amount}
        </Text>
        <View
          style={{
            backgroundColor: '#F6F6F6',
            width: 144,
            height: 44,
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1.5,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            onPress={() => cartHandeler('subtract')}>
            <Text
              style={{
                color: '#565656',
                fontSize: 20,
                fontWeight: '600',
                alignItems: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{flex: 1, color: '#565656', textAlign: 'center'}}>
            {count}
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            onPress={() => cartHandeler('add')}>
            <Text
              style={{
                color: '#565656',
                fontSize: 20,
                fontWeight: '600',
                alignItems: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 44,
          width: 44,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => cartHandeler('remove')}>
        <Close />
      </TouchableOpacity>
    </View>
  );
}
