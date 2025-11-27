# 🎭 Cartes Profil - Site Node.js

Site Node.js pour afficher des cartes profil avec avatars aléatoires générés dynamiquement.

## 📋 Fonctionnalités

- ✅ Affichage de cartes profil depuis un fichier JSON
- ✅ Avatars générés dynamiquement via DiceBear API (selon le genre)
- ✅ Design responsive mobile-first (1 colonne mobile, 2-3 colonnes desktop)
- ✅ Affichage des informations : nom, prénom, poste, études, tâches, IA utilisée
- ✅ Section avantages/inconvénients avec mise en forme visuelle

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
   ```
   http://localhost:3000
   ```

## 📁 Structure du projet

```
stage_kyndryl/
├── data/
│   └── profiles.json          # Données des profils
├── public/
│   └── style.css              # Styles CSS
├── views/
│   └── index.ejs              # Template HTML (EJS)
├── server.js                  # Serveur Express
├── package.json               # Dépendances Node.js
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

Dans `server.js`, ligne avec `const style`, changer la valeur :
```javascript
const style = 'avataaars'; // Options: avataaars, pixel-art, etc.
```

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
