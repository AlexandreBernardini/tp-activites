import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'favorite_activities';

export const getFavoriteIds = async (): Promise<string[]> => {
  try {
    const json = await AsyncStorage.getItem(KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    return [];
  }
};

export const saveFavoriteIds = async (ids: string[]) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Error saving favorite IDs', e);
  }
};
