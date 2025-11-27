const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuration d'Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Charger les données des profils
const profilesPath = path.join(__dirname, 'data', 'profiles.json');
const profiles = JSON.parse(fs.readFileSync(profilesPath, 'utf-8'));

// Fonction pour générer l'URL de l'avatar avec DiceBear API
function getAvatarUrl(profile) {
  const seed = `${profile.prénom}-${profile.nom}`;
  const style = 'notionists'; // Style notionists - plus professionnel
  // DiceBear API avec style notionists
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}&scale=80`;
}

// Route principale
app.get('/', (req, res) => {
  // Ajouter l'URL de l'avatar à chaque profil
  const profilesWithAvatars = profiles.map(profile => ({
    ...profile,
    avatarUrl: getAvatarUrl(profile)
  }));
  
  res.render('index', { profiles: profilesWithAvatars });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
  console.log(`📊 ${profiles.length} profil(s) chargé(s)`);
});
