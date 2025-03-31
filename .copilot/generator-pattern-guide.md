# Guide pour l'implémentation de nouveaux Générateurs

## Structure à suivre

1. **Définir les Types**

```typescript
// Dans types/[NewFeature]Options.ts
interface NewFeatureOptions {
  name: string;
  // autres options spécifiques
}
```

2. **Créer le Template**

```typescript
// Dans templates/[newFeature]Template.ts
export const createNewFeatureTemplate = (name: string, ...options) => `
  // Template de code
`;
```

3. **Implémenter la Stratégie**

```typescript
// Dans strategies/NewFeatureGenerator.ts
export class NewFeatureGenerator implements GeneratorStrategy {
  async generate(name: string, ...options): Promise<void> {
    // Logique de génération
  }
}
```

4. **Mettre à jour les types principaux**

```typescript
// Dans index.ts
type GeneratorType = "existing" | "newFeature";

const generators: Record<GeneratorType, GeneratorStrategy> = {
  existing: new ExistingGenerator(),
  newFeature: new NewFeatureGenerator(),
};
```

## Bonnes Pratiques

1. Utiliser des types stricts (éviter les optionnels si possible)
2. Séparer les options requises et optionnelles
3. Utiliser Partial pour les options optionnelles
4. Documenter les templates avec des commentaires
5. Gérer les erreurs de façon consistante

## Structure des Fichiers

```
generator/
├── strategies/
│   ├── GeneratorStrategy.ts
│   └── NewFeatureGenerator.ts
├── templates/
│   └── newFeatureTemplate.ts
├── types/
│   └── NewFeatureOptions.ts
└── index.ts
```

## Points à Vérifier

- [ ] Types correctement définis
- [ ] Template créé et testé
- [ ] Stratégie implémentée
- [ ] Tests ajoutés
- [ ] Documentation mise à jour
- [ ] CLI help mis à jour
