# Malohe – catalogue Chogan

Site vitrine statique de Malohe (vendeuse indépendante Chogan) : parfums Olfazeta, soins Aurodhea, maquillage et maison.
Une seule page (`index.html`) et ses photos (`img/`). Aucun serveur, aucune base de données : le site peut être hébergé tel quel
(hébergé sur GitHub Pages, domaine malohe-collection.fr chez OVH).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | La page complète : mise en page, catalogue (données dans la balise `<script id="data">`), panier et commande par WhatsApp, e-mail ou Instagram |
| `img/` | Photos des produits et visuels du site (WebP) |
| `robots.txt`, `sitemap.xml` | Référencement (le site est actuellement en `noindex`) |
| `CNAME` | Relie le site au nom de domaine malohe-collection.fr (OVH) — ne pas supprimer |

## Mettre à jour le catalogue

Le site n'est pas modifié à la main : il est régénéré à partir de la base produits (dossier de travail Malohe, hors de ce dépôt) :

1. mettre à jour `data/produits.json` (outils `import_nouveaux.py`, `fiches_techniques.py`…) ;
2. lancer `python3 outils/construire_site.py` → dossier `build/` ;
3. copier le contenu de `build/` à la racine de ce dépôt, puis valider et pousser (commit + push).

## Règles

- Les prix affichés sont ceux de Malohe ; les données officielles (composition, précautions) viennent des fiches techniques Chogan et ne sont jamais réécrites.
- Les marques et visuels des produits appartiennent à leurs propriétaires ; Malohe n'est pas affiliée à la société Chogan.
