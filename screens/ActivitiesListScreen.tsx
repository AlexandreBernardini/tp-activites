import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { activities } from '../data/activities';
import { Activity } from '../types';
import { getFavoriteIds, saveFavoriteIds } from '../services/favoritesStorage';
import { useUserCity } from '../services/useLocation';

type Props = NativeStackScreenProps<RootStackParamList, 'ActivitiesList'>;

export default function ActivitiesListScreen({ navigation }: Props) {
  const [search, setSearch] = React.useState('');
  const [favoriteIds, setFavoriteIds] = React.useState<string[]>([]);
  const { city, error: locationError } = useUserCity();

  React.useEffect(() => {
    (async () => {
      const ids = await getFavoriteIds();
      setFavoriteIds(ids);
    })();
  }, []);

  const toggleFavorite = async (id: string) => {
    let newIds: string[];
    if (favoriteIds.includes(id)) {
      newIds = favoriteIds.filter((favId) => favId !== id);
    } else {
      newIds = [...favoriteIds, id];
    }
    setFavoriteIds(newIds);
    await saveFavoriteIds(newIds);
  };

  const filteredActivities = activities.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: Activity }) => {
    const isFavorite = favoriteIds.includes(item.id);

    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('ActivityDetails', { activity: item })}
      >
        <View style={styles.avatar} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.title}>{item.title}</Text>
            <Pressable onPress={() => toggleFavorite(item.id)}>
              <Text
                style={[
                  styles.favIcon,
                  isFavorite && styles.favIconActive,
                ]}
              >
                ★
              </Text>
            </Pressable>
          </View>

          <Text style={styles.category}>{item.category}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.level}</Text>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.meta}>{item.date}</Text>
            <Text style={styles.meta}>{item.time}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Activités</Text>
      {city && <Text style={styles.locationText}>Près de {city}</Text>}
      {locationError && (
        <Text style={styles.locationError}>{locationError}</Text>
      )}

      <TextInput
        style={styles.search}
        placeholder="Rechercher une activité"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F7F7FA' },
  screenTitle: { fontSize: 28, fontWeight: '700', marginBottom: 4 },
  locationText: {
    color: '#4B5563',
    marginBottom: 4,
  },
  locationError: {
    color: '#DC2626',
    marginBottom: 4,
    fontSize: 12,
  },
  search: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  listContent: { paddingBottom: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginRight: 16,
  },
  cardContent: { flex: 1 },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: { fontSize: 18, fontWeight: '600' },
  favIcon: {
    fontSize: 20,
    color: '#D1D5DB',
  },
  favIconActive: {
    color: '#F59E0B',
  },
  category: { color: '#6B7280', marginBottom: 6 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom: 8,
  },
  badgeText: { fontSize: 12 },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: { color: '#4B5563', fontSize: 12 },
});
