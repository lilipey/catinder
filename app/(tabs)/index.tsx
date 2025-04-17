import React, { useCallback, useRef } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  type ImageSourcePropType,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import theme from '@/themes';


const IMAGES = [
  'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  'https://cdn2.thecatapi.com/images/ebv.jpg',
  'https://cdn2.thecatapi.com/images/ebv.jpg',
  'https://cdn2.thecatapi.com/images/ebv.jpg',
  'https://cdn2.thecatapi.com/images/ebv.jpg',
];

export default function HomeScreen() {
  const ref = useRef<SwiperCardRefType>();

  const renderCard = useCallback(
    (image: string) => {
      return (
        <View style={styles.renderCardContainer}>
          <Image
            source={{uri: image}}
            style={styles.renderCardImage}
            resizeMode="cover"
          />
        </View>
      );
    },
    []
  );
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: theme.secondary,
          },
        ]}
      ><FontAwesome6 name="heart" size={100} color="white" solid={true} /></View>
    );
  }, []);
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: theme.primary,
          },
        ]}
      ><FontAwesome6 name="trash" size={100} color="white" solid={true} /></View>
    );
  }, []);
  const OverlayLabelTop = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: theme.tertiary,
          },
        ]}
      ><FontAwesome6 name="bolt" size={100} color="white" solid={true} /></View>
    );
  }, []);

  return (
    <>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          cardStyle={styles.cardStyle}
          data={IMAGES}
          renderCard={renderCard}
          onIndexChange={(index) => {
            console.log('Current Active index', index);
          }}
          onSwipeRight={(cardIndex) => {
            console.log('cardIndex', cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          onSwipeLeft={(cardIndex) => {
            console.log('onSwipeLeft', cardIndex);
          }}
          onSwipeTop={(cardIndex) => {
            console.log('onSwipeTop', cardIndex);
          }}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          OverlayLabelTop={OverlayLabelTop}
          // onSwipeActive={() => {
          //   console.log('onSwipeActive');
          // }}
          onSwipeStart={() => {
            console.log('onSwipeStart');
          }}
        // onSwipeEnd={() => {
        //   console.log('onSwipeEnd');
        // }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={[styles.button, {backgroundColor: theme.primary}]}
          onPress={() => {
            ref.current?.swipeLeft();
          }}
        >
          <FontAwesome6 name="trash" size={32} color="white" solid={true} />
        </Pressable>
        <Pressable
          style={[styles.button, { height: 60, marginHorizontal: 10, backgroundColor: theme.quaternary }]}
          onPress={() => {
            ref.current?.swipeBack();
          }}
        >
          <FontAwesome6 name="backward" size={24} color="white" solid={true} />
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: theme.tertiary}]}
          onPress={() => {
            ref.current?.swipeTop();
          }}
        >
          <FontAwesome6 name="bolt" size={32} color="white" solid={true} />
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: theme.secondary}]}
          onPress={() => {
            ref.current?.swipeRight();
          }}
        >
          <FontAwesome6 name="heart" size={32} color="white" solid={true} />
        </Pressable>
      </View>

    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 80,
    backgroundColor: theme.appBackground,
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    aspectRatio: 1,
    backgroundColor: '#3A3D45',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '95%',
    height: '75%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
