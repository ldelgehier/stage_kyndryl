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

// Generate avatar URL using DiceBear API based on gender
function getAvatarUrl(profile) {
  const seed = `${profile.prénom}-${profile.nom}`;
  // Use avataaars-neutral style for everyone (neutral and professional)
  return `https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${encodeURIComponent(seed)}`;
}

// Darken a hex color by a given percentage for gradient effects
function darkenColor(hex, percent) {
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.max(0, Math.floor((num >> 16) * (1 - percent)));
  const g = Math.max(0, Math.floor(((num >> 8) & 0x00FF) * (1 - percent)));
  const b = Math.max(0, Math.floor((num & 0x0000FF) * (1 - percent)));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
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

// Route organigramme
app.get('/organigramme', (req, res) => {
  const organigrammePath = path.join(__dirname, 'data', 'organigramme.json');
  const organigramme = JSON.parse(fs.readFileSync(organigrammePath, 'utf-8'));

  // Pass the darkenColor helper function to the template
  res.render('organigramme', { organigramme, darkenColor });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
  console.log(`📊 ${profiles.length} profil(s) chargé(s)`);
});
