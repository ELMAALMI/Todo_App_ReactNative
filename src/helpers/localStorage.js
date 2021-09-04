import { AsyncStorage } from 'react-native';
import { tmpData } from '../tmpData';
let data = [];

const getData = async () => {
    const list = await AsyncStorage.getItem('data');
    if (list.length > 0) {
        data = list;
    } else {
    }
};
