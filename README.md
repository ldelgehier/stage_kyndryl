# 🎭 Application Profils & Organigramme - Site Node.js

Site Node.js avec deux fonctionnalités principales :
1. **Cartes Profil** : Affichage de cartes profil avec avatars générés dynamiquement
2. **Organigramme** : Visualisation de la hiérarchie organisationnelle

## 📋 Fonctionnalités

### Cartes Profil
- ✅ Affichage de cartes profil depuis un fichier JSON
- ✅ Avatars générés dynamiquement via DiceBear API (selon le genre)
- ✅ Design responsive mobile-first (1 colonne mobile, 2-3 colonnes desktop)
- ✅ Affichage des informations : nom, prénom, poste, études, tâches, IA utilisée
- ✅ Section avantages/inconvénients avec mise en forme visuelle

### Organigramme
- ✅ Affichage hiérarchique de l'organisation
- ✅ Niveaux colorés avec dégradés personnalisables
- ✅ Connecteurs visuels entre les niveaux
- ✅ Support des équipes multi-couleurs
- ✅ Navigation fluide entre les deux vues

## 🚀 Installation

### Prérequis

- **Node.js** (v14+) : https://nodejs.org
- **Git** (optionnel) : https://git-scm.com

### Étapes

1. **Ouvrir le terminal** dans le dossier du projet

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur** :
   ```bash
   npm start
   ```
   Ou en mode développement (avec rechargement auto) :
   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur** et aller à :
   - Cartes profil : `http://localhost:3000`
   - Organigramme : `http://localhost:3000/organigramme`

## 📁 Structure du projet

```
stage_kyndryl/
├── data/
│   ├── profiles.json          # Données des profils
│   └── organigramme.json      # Structure hiérarchique
├── public/
│   ├── style.css              # Styles pour les cartes profil
│   └── organigramme.css       # Styles pour l'organigramme
├── views/
│   ├── index.ejs              # Template des cartes profil
│   └── organigramme.ejs       # Template de l'organigramme
├── server.js                  # Serveur Express
├── package.json               # Dépendances Node.js
├── Dockerfile                 # Configuration Docker
├── docker-compose.yml         # Orchestration Docker
├── .gitignore                 # Fichiers à ignorer par git
└── README.md                  # Ce fichier
```

## 📝 Format des données (profiles.json)

```json
[
  {
    "id": 1,
    "nom": "Descamps",
    "prénom": "Jérémy",
    "poste": "Ingénieur cloud",
    "études": "Bac+2, école DTS",
    "tâches": "aide les entreprises qui n'ont pas le temps de projet AIT",
    "utiliseIA": "ChatGPT (à quotidien et des confirmation)",
    "avantages": ["Autonomie", "Responsabilité", "Bon revenu"],
    "inconvénients": ["Ne savoir pas savoir s'arrêter (d'un besoin)"],
    "genre": "homme"
  }
]
```

### Champs obligatoires

- `id` : Identifiant unique (numérique)
- `nom` : Nom de famille
- `prénom` : Prénom
- `poste` : Titre du poste
- `études` : Formation/études
- `tâches` : Descriptions des tâches principales
- `utiliseIA` : Outils/modèles IA utilisés
- `avantages` : Liste d'avantages (array)
- `inconvénients` : Liste d'inconvénients (array)
- `genre` : "homme" ou "femme" (pour l'avatar)

## 📝 Format des données (organigramme.json)

```json
{
  "titre": "Organigramme Kyndryl France",
  "niveaux": [
    {
      "niveau": 1,
      "titre": "DIRIGEANTS",
      "couleur": "#8B0000",
      "membres": [
        {
          "id": 1,
          "nom": "Jérôme C.",
          "poste": "Président France"
        }
      ]
    }
  ]
}
```

### Champs obligatoires

- `titre` : Titre de l'organigramme
- `niveaux` : Tableau des niveaux hiérarchiques
  - `niveau` : Numéro du niveau (1 = sommet)
  - `titre` : Titre du niveau (optionnel)
  - `couleur` : Code couleur hexadécimal (ex: "#8B0000") ou "mixed" pour équipes multi-couleurs
  - `membres` : Tableau des personnes
    - `id` : Identifiant unique
    - `nom` : Nom de la personne
    - `poste` : Titre du poste
    - `couleur` : Couleur individuelle (seulement si couleur parent = "mixed")

## 🎨 Personnalisation

### Modifier les couleurs

Éditer `public/style.css` et chercher les variables de couleur dans `.card-header` :
```css
.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Ajouter/modifier des profils

Éditer `data/profiles.json` en respectant le format ci-dessus.

### Changer le style d'avatar

Dans `server.js`, modifier la fonction `getAvatarUrl()` :
```javascript
// Femmes : avataaars avec skinColor
// Hommes : micah (plus réaliste)
// Options disponibles : avataaars, micah, pixel-art, initials, etc.
```

### Modifier l'organigramme

**Ajouter un niveau** : Éditer `data/organigramme.json` et ajouter un objet dans le tableau `niveaux`.

**Changer les couleurs** : Modifier le champ `couleur` de chaque niveau avec un code hexadécimal.

**Ajuster le style** : Éditer `public/organigramme.css` pour modifier l'apparence des cases et connecteurs.

## 🌐 DiceBear API

Les avatars sont générés via l'API gratuite **DiceBear** :
- URL : `https://api.dicebear.com/7.x/avataaars/svg?seed=...`
- Styles disponibles : avataaars, pixel-art, initials, et bien d'autres
- Aucune clé API requise

## 📦 Dépendances

- **express** : Serveur web Node.js
- **ejs** : Templating engine HTML
- **nodemon** (dev) : Rechargement auto en développement

## 🐛 Dépannage

### Le serveur ne démarre pas

```
Error: listen EADDRINUSE :::3000
```
Le port 3000 est déjà utilisé. Modifier le port dans `server.js` ligne :
```javascript
const PORT = 3000; // Changer à 3001, 3002, etc.
```

### Les avatars ne s'affichent pas

Vérifier votre connexion internet (l'API DiceBear doit être accessible). Les avatars sont générés en ligne.

### Erreur "module not found"

Installer les dépendances :
```bash
npm install
```

## 📄 Licence

ISC
