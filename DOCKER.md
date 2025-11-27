# 🐳 Utiliser l'application avec Docker

## Installation rapide avec Docker

### Prérequis

- Docker Desktop : https://www.docker.com/products/docker-desktop
- Docker Compose (inclus avec Docker Desktop)

### Lancer l'application

1. **Ouvrir le terminal** dans le dossier du projet

2. **Construire l'image Docker** :
   ```bash
   docker-compose build
   ```

3. **Lancer l'application** :
   ```bash
   docker-compose up -d
   ```
   Le `-d` lance le conteneur en arrière-plan.

4. **Accéder à l'application** :
   - Ouvrir votre navigateur à : http://localhost:3000

### Commandes utiles

**Voir les logs du conteneur** :
```bash
docker-compose logs -f
```

**Arrêter l'application** :
```bash
docker-compose down
```

**Redémarrer l'application** :
```bash
docker-compose restart
```

**Reconstruire après changements** :
```bash
docker-compose up -d --build
```

## Structure Docker

### Dockerfile
- Image de base : `node:18-alpine` (léger et performant)
- Port : 3000 (exposé)
- Commande : `npm start` (ou `npm run dev` en développement)

### docker-compose.yml
- Service `app` : l'application Node.js
- Volume monté pour le rechargement automatique du code
- Port 3000 mappé sur votre machine
- Variable d'environnement `NODE_ENV=development`

## Avantages de Docker

✅ Pas de Node.js à installer localement  
✅ Environnement isolé et reproductible  
✅ Facile à partager avec d'autres développeurs  
✅ Rechargement automatique du code (mode dev)  
✅ Port 3000 automatiquement accessible  

## Dépannage

### Le conteneur ne démarre pas

```bash
docker-compose logs
```

### Port 3000 déjà utilisé

Modifier le port dans `docker-compose.yml` :
```yaml
ports:
  - "3001:3000"  # Utilisez 3001 au lieu de 3000
```

### Reconstruire complètement

```bash
docker-compose down
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```
