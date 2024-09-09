# Quelques explications

Je pose ici quelques explications de mon code afin de m'y repérer plus facilement mais aussi de retenir ce que je fais.

## Accès au CV

Pour l'accès au CV un bouton prévu à cet effet à été crée. Au clique sur le bouton nous ouvrons une nouvelle page (sur desktop) avec le cv en question (pour que le tout fonctionne il doit être dans le dossier public). Le bouton télécharge le CV directement sur le format mobile.

## Duplication de span pour un carousel:

Le premier élément `<span>` parcourt skillsTab, liant chaque élément du tableau à la variable skills. L'attribut :key est défini sur skills, ce qui est essentiel pour que Vue.js puisse suivre et mettre à jour efficacement les éléments du DOM lorsque le tableau change. A l'interieur de ce `<span>`, la valeur de skills est affichée suivie d'un point et d'un espace.

Le deuxième élément `<span>` parcourt luis aussi le même tableau skillsTab. Cependant, il ajoute la chaîne `'-duplicate'` à l'attribut :key pour chaque élément. Cela garantit que les clés sont unique dans les deux éléments ``<span>`` évitant ainsi les conflits de clés. Comme le premier ``<span>``, il affiche chaque compétence.

Niveau Css, on viens faire une petite animation de ''scroll'' de droite à gauche pour ainsi faire un effet "carousel" et on oublie pas biensur de mettre l'attribut css `overflow:hidden` sur le composant correspondant afin de cacher le texte sur la gauche et éviter un défilement inutile.

## Création du 'DarkMode'

