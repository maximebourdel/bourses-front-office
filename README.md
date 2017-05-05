Bourses Front Office
===================

----------

Installation
-------------

### Arborescence

L'arborescence doit être la suivante :

/var/www/html/bourses
:   - <b>api</b> (repository <b>bourses-api</b>)
:   - <b>front-office</b> (repository <b>bourses-front-office</b>)
:   - <b>google-api</b> (pas encore de repository)

### Clonage 

Lancer la commande suivante :
```
$ git clone https://github.com/maximebourdel/bourses-front-office.git
```

### Installation de npm, node et ng
Cette commande permet d'installer npm puis ng
```
$ apt-get install npm
$ apt-get install ng-common
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ apt-get install -y nodejs
$ npm install -g @angular/cli

```

### Installation des composants
```
$ npm isntall
```

Vérification :
```
$ npm -v
$ node -v
$ ng -v
```
La commande pour ng -v doit ressembler à ceci :
```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.0.0-rc.1
node: 6.10.0
os: linux x64
@angular/common: 2.4.9
@angular/compiler: 2.4.9
@angular/core: 2.4.9
@angular/forms: 2.4.9
@angular/http: 2.4.9
@angular/platform-browser: 2.4.9
@angular/platform-browser-dynamic: 2.4.9
@angular/router: 3.4.9
@angular/cli: 1.0.0-rc.1
@angular/compiler-cli: 2.4.9

```

### Modification de l'API Industry
Accéder au répertoire suivant <b>src/app/yahoo/finance/industry</b> dans le fichier suivant <b>industry.service.ts</b> et modifier la variable suivante :
```ts
baseUrl = 'http://localhost:80/bourses/api/web/app_dev.php/';
```
En suivant :
```ts
baseUrl = 'http://bourses-online.com/api/app_dev.php/';
```

### Compiler le résultat
Afin de compiler le projet, lancer la commande suivante :
```
$ ng build --prod
```
Qui va créer un répertoire dist qui contiendra tout le code du projet compilé.

### Configurer apache2

Dans le répertoire <b>/etc/apache2</b> dans le fichier <b>apache2.conf</b> , et ajouter à la fin du fichier :
```
<VirtualHost *:80>

    ServerName bourses-online.com
    ServerAlias www.bourses-online.com

    Alias /api /var/www/html/bourses/api/web

    DocumentRoot /var/www/html/bourses/front-office/dist

    <Directory /var/www/html/bourses/front-office/dist>
        AllowOverride None
        Order Allow,Deny
        Allow from All

        RewriteEngine on

        # Don't rewrite files or directories
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]

        # Rewrite everything else to index.html
        # to allow html5 state links
        RewriteRule ^ index.html [L]


    </Directory>

</VirtualHost>
```
Redémarrer ensuite apache et son composant a2enmod :
```
$ sudo a2enmod rewrite
$ sudo service apache2 restart
```


### Installation de Google API Analytics

Après avoir importé le projet google-api lancer la commande suivante :
```
$ nohup node /var/www/html/bourses/google-api/server.js &
```
