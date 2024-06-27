import { Dimensions, Platform } from 'react-native';
import {
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    X_PHONE_DEVICE_HEIGHT,
    LONG_DEVICE_HEIGHT,
} from '../constants';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / DEVICE_HEIGHT;
const ScaleWidth = SCREEN_WIDTH / DEVICE_WIDTH;

export const normalizeFont = size => Math.round(size * ScaleWidth);

export const scaleHeight = height => Math.round(height * ScaleHeight);

export const scaleWidth = width => Math.round(width * ScaleWidth);

export const isIphoneX = () => {
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (SCREEN_HEIGHT === X_PHONE_DEVICE_HEIGHT ||
            SCREEN_HEIGHT === LONG_DEVICE_HEIGHT)
    );
};

export const isLongDevice = () =>
    SCREEN_HEIGHT >= X_PHONE_DEVICE_HEIGHT || SCREEN_HEIGHT >= LONG_DEVICE_HEIGHT;
