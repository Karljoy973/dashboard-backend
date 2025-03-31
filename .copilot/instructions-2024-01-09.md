# Refactorisation Pattern Strategy - Instructions

## Objectif

Refactoriser le code pour implémenter le Pattern Strategy et respecter le principe Open/Closed (OCP).

## Étapes de refactorisation

### 1. Structure des dossiers

```bash
mkdir -p generator/strategies
```

### 2. Création des fichiers

```bash
touch generator/strategies/GeneratorStrategy.ts
touch generator/strategies/ComponentGenerator.ts
touch generator/strategies/ApiGenerator.ts
```

### 3. Implémentation étape par étape

#### 3.1 Créer l'interface GeneratorStrategy

- Définir l'interface avec une méthode generate
- Placer dans `generator/strategies/GeneratorStrategy.ts`

#### 3.2 Implémenter les stratégies concrètes

- Créer ComponentGenerator dans `generator/strategies/ComponentGenerator.ts`
- Créer ApiGenerator dans `generator/strategies/ApiGenerator.ts`
- Implémenter l'interface GeneratorStrategy pour chaque classe

#### 3.3 Modifier le fichier principal

- Importer les nouvelles classes
- Créer un mapping des types vers les stratégies
- Remplacer le switch par l'utilisation du mapping

### 4. Vérification

- Vérifier que tous les imports sont corrects
- Tester la génération d'un composant
- Tester la génération d'une API

## Notes pour extensions futures

Pour ajouter un nouveau type de générateur :

1. Créer une nouvelle classe implémentant GeneratorStrategy
2. Ajouter le nouveau type dans GeneratorType
3. Ajouter l'instance dans le mapping generators

## Structure finale

```
generator/
├── .copilot/
│   └── instructions-2024-01-09.md
├── strategies/
│   ├── GeneratorStrategy.ts
│   ├── ComponentGenerator.ts
│   └── ApiGenerator.ts
└── index.ts
```
