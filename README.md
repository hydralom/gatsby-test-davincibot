<p align="center">
    <img src="http://davincibot.org/wp-content/themes/dvbtheme/img/logo_dvb.png"  alt="logo_dvb"/>
</p>
<h1 align="center">
  DaVinciBot Website
</h1>

## Important files and folders
* `components/` : ici se trouve les composants utilisés dans les pages
* `images/` : dossier des images configuré dans `gatsby-config.js`
* `pages/` : contient l'ensemble des pages/url accessibles sur le site (`index.js` correspond au `/`)
* `pages/articles/` : ici se trouve les articles en markdown
* `style/` : custom css, sass...
* `templates/` : template utilisé à plusieurs endroits
* `util/authors.js` : fichier qui sert de "base de données" pour les auteurs
* `util/utilityFuncions` : fichier qui contient des fonctions "générales"
    * `slugify` : fonction rend une `string` "url friendly"

## Comment créer un article 
Copier coller un article déjà existant dans `pages/articles/` et changer les champs suivants :
* `title` : Le titre de l'article
* `date` : La date de création avec ce format : `yyyy-mm-dd h:MM` (voir les formats date JS)
* `author` : Référencer le nom (attribut `name`) d'un autheur existant dans `util/authors.js` (voir "Comment ajouter un auteur")
* `image` : Lien par rapport ou se trouve le fichier de l'article (de base `../../images/{nom_de_l'image}`)
* `tags` : Au moins un tag par article. Pour en mettre plusieur il faut revenir à la ligne et mettre un tiret en début de ligne
* le corps de l'article : L'article prend en compte le format [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Comment ajouter un auteur :
* Ouvrir le fichier `util/authors.js` 
* Copier coller un objet json
* Champs obligatoires : `name`, `imageUrl`, `bio` 
* Champs facultatifs (à laisser vide) :  `facebook`, `twitter`, `instagram`, `linkedin`