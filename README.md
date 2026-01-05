# TP – Application d'activités (React Native / Expo)

## Description

Cette application mobile permet de consulter une liste d'activités (sport, loisirs, culture) et d'afficher le détail de chaque activité.  
Elle a été réalisée en React Native avec Expo et TypeScript, à partir d'une maquette mobile reproduite le plus fidèlement possible.

## Maquette

- Titre maquette : Mobile Activity App Screens
- Source : lien vers la maquette (Dribbble / Figma / etc.)

## Écrans reproduits

- Écran liste d'activités : recherche, affichage des cartes d'activités avec titre, catégorie, niveau, date et heure.
- Écran détails d'une activité : informations (date, heure, lieu, places restantes) + description.

## Fonctionnalités natives utilisées

- Stockage local (AsyncStorage) : sauvegarde des activités favorites en local pour les retrouver au prochain lancement.
- Géolocalisation (expo-location) : récupération de la ville de l'utilisateur pour afficher un texte du type « Près de [ville] » sur l'écran de liste.

Chaque fonctionnalité gère :
- La demande de permission.
- Le refus de permission avec affichage d'un message adapté.
- Une utilisation concrète dans le contexte de l'application.

## Structure du projet

```txt
.
├── App.tsx
├── data/
│   └── activities.ts
├── screens/
│   ├── ActivitiesListScreen.tsx
│   └── ActivityDetailsScreen.tsx
├── components/
├── services/
│   ├── favoritesStorage.ts
│   └── useLocation.ts
├── types/
│   ├── index.ts
│   └── navigation.ts
└── README.md
