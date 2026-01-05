import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export const useUserCity = () => {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission localisation refusée');
          return;
        }

        const position = await Location.getCurrentPositionAsync({});
        const reverse = await Location.reverseGeocodeAsync({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        if (reverse.length > 0) {
          const info = reverse[0];
          setCity(info.city ?? info.region ?? null);
        }
      } catch (e) {
        setError('Erreur localisation');
      }
    })();
  }, []);

  return { city, error };
};
