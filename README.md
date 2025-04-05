# 🚀 Next.js REST API with Neon DB

Une API REST performante construite avec **Next.js** (App Router) et connectée à une base **Neon PostgreSQL**, pensée pour être **scalable**, **maintenable** et **prête pour la production**.

---

## 🧠 Objectif

Créer une API moderne capable de :

- Récupérer des données depuis une base **Neon DB**
- Exposer ces données via des **endpoints RESTful**
- Être **facilement déployable** 
- Servir de **base solide** pour tout projet backend en Next.js

---

## ⚙️ Stack technique

- **Next.js (App Router)** — Framework React/Full-stack
- **Neon** — PostgreSQL serverless
- **TypeScript** — Sécurité & clarté
- **REST API** — Architecture simple & efficace

---

## 📁 Structure du projet

```
my-project/
├── app/
│   └── (api)/
│       └── analytics/route.ts
|       └── authors/route.ts
|       └── comments/route.ts
|    └── api-docs/route.ts # documentation swagger
|   └── route.ts
├── lib/
│   └── db.ts                    # Configuration de la connexion à Neon DB
├── public/
├── styles/
├── .env                        # Variables d'environnement (ex: DATABASE_URL)
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 🚀 Lancer le projet

1. **Cloner le repo**
   ```bash
   git clone https://github.com/ton-pseudo/ton-projet.git
   cd ton-projet
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   ```

3. **Configurer la base de données**
   - Crée un fichier `.env` à la racine du projet :
     ```env
     DATABASE_URL="postgresql://user:password@neon-host/dbname"
     ```

4. **Lancer le serveur**
   ```bash
   pnpm run dev
   ```

---

## 📬 Exemple d'endpoints

| Méthode | Route            | Description               |
|--------:|------------------|---------------------------|
| GET     | `/api/analytics`     | Récupère toutes les données analytics   |
| GET     | `/api/authors` | Récupère les données des autheurs          |
| GET    | `/api/comments`     | Récupère la liste des commentaires      |

---

## 🛡️ Production-ready

- ✅ Connexion sécurisée à Neon via Vercel
- ✅ API REST simple et claire
- ✅ Typage complet via TypeScript

---

## 📄 Licence

MIT — libre d’utilisation, de modification et de partage.

---

> Développé avec Next.js & ❤️ par [Karl JOYEUX](www.linkedin.com/in/karl-joyeux)

