export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Activity {
  id: string;
  title: string;
  category: string;
  level: Level;
  date: string;
  time: string;
  place: string;
  remainingSpots: number;
  description: string;
}
