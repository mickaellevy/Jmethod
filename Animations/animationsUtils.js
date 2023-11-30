import {Animated, Easing} from 'react-native';

export function runInvalidAnimation(centerPosition, movementSize) {
    return Animated.sequence([
    Animated.timing(
      centerPosition,
      {
        toValue: movementSize,
        duration: 50, // Le temps est en milliseconds ici (3000ms = 3sec)
        easing: Easing.linear,
        useNativeDriver: false,
      }
    ),
    Animated.timing(
        centerPosition,
        {
          toValue: -1*movementSize,
          duration: 100, // Le temps est en milliseconds ici (3000ms = 3sec)
          easing: Easing.linear,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        centerPosition,
        {
          toValue: movementSize,
          duration: 100, // Le temps est en milliseconds ici (3000ms = 3sec)
          easing: Easing.linear,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        centerPosition,
        {
          toValue: 0,
          duration: 50, // Le temps est en milliseconds ici (3000ms = 3sec)
          easing: Easing.linear,
          useNativeDriver: false,
        }
      )
    ]).start(); // N'oubliez pas de lancer votre animation avec la fonction start()
};