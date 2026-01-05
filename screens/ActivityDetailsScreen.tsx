import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ActivityDetails'>;

export default function ActivityDetailsScreen({ route }: Props) {
  const { activity } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{activity.title}</Text>
      <View style={styles.row}>
        <Text style={styles.category}>{activity.category}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{activity.level}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informations</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date</Text>
          <Text style={styles.infoText}>
            {activity.date} · {activity.time}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Lieu</Text>
          <Text style={styles.infoText}>{activity.place}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Places</Text>
          <Text style={styles.infoText}>
            {activity.remainingSpots} places restantes
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Description</Text>
        <Text style={styles.infoText}>{activity.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F7F7FA' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 4 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  category: { color: '#6B7280', marginRight: 8 },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  badgeText: { fontSize: 12 },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  infoRow: { marginBottom: 8 },
  infoLabel: { fontWeight: '500', marginBottom: 2 },
  infoText: { color: '#4B5563' },
});
