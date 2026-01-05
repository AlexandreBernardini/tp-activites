import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Cours de yoga',
    category: 'Sport',
    level: 'Débutant',
    date: 'Samedi 11 janvier',
    time: '15:00',
    place: 'Studio Zen, 12 rue de la Paix, Paris',
    remainingSpots: 8,
    description: 'Séance de yoga doux pour débutants.',
  },
  {
    id: '2',
    title: 'Sortie randonnée',
    category: 'Loisirs',
    level: 'Intermédiaire',
    date: 'Dimanche 12 janvier',
    time: '09:00',
    place: 'Point de rendez-vous : Gare centrale',
    remainingSpots: 12,
    description: 'Randonnée d’une demi-journée.',
  },
    {
    id: '3',
    title: 'Atelier de cuisine italienne',
    category: 'Cuisine',
    level: 'Avancé',
    date: 'Samedi 18 janvier',
    time: '14:00',
    place: 'Culinary Studio, 45 avenue des Champs, Lyon',
    remainingSpots: 5,
    description: 'Préparation de plats italiens traditionnels.',
    },
    {
    id: '4',
    title: 'Initiation à la photographie',
    category: 'Art',
    level: 'Débutant',
    date: 'Dimanche 19 janvier',
    time: '10:00',
    place: 'Atelier Photo, 23 rue des Arts, Marseille',
    remainingSpots: 10,
    description: 'Apprendre les bases de la photographie.',
    }
];
