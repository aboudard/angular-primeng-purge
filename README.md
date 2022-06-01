# TestApp

Projet de test de purge CSS sur une application Angular PrimeNg.

## Purge CSS

Une librairie Javascript qui analyse le code statique produit après le build Angular. L'analyse porte aussi bien sur les relations HTML / sélecteurs CSS que sur le Javascript qui manipule les dits-sélecteurs.

### Lancement de la purge

Un script .js est lancé après le build Angular, via le fichier package.json :

`"postbuild": "node postbuild.js"`

On doit remplacer le ou les fichiers produits par le build avant de commit le code. Il faudra donc modifier le dossier de sortie de la purge (purgecss.config.js) :

`output: 'purge/'`

### Périmètre

Les librairies suivantes sont concernées :
- PrimeNg / theme : la librairie de composants principale.
- PrimeFlex : libraire de classes CSS utilitaires.
- PrimeIcons : librairie de fonte web.

### Tests de la purge

Le script actuel ne remplace pas le fichier CSS dans le dossier /dist, il crée une version dans le dossier /purge. On doit tester son application avant/après le passage de la purge. Pour ce faire, on peut juste remplacer le bundle par celui généré dans /purge. On lance ensuite l'application en mode static depuis le dossier /dist.

`"start:static": "cd dist/purge-app && http-server . -p 4400"`


## Exceptions notables PrimeNg

Ces composants présentent de la concaténation dans la génération des styles, avec [ngClass] par exemple :
- directive pButton
- composant Message
