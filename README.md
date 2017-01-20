# Klickibunti-Deployment für TYPO3 CMS

Ein Beispiel für das Deployment von TYPO3 Installationen (nicht composer basiert) auf Basis von GitLab Continous 
Integration mit einem Docker Container als Build Umgebung und Surf als Deployment Tool.

![teaser image](Material/MTUG_2017_Januar-v2.png)

Um den Vortrag auf der MTUG vom 10.1.2017 nachzuvollziehen schaut euch am besten an, was sich von Commit zu Commit
 geändert hat.

## Nostalgie pur

Deployment mit FTP

```
filezilla
```

oder rsync

```
rsync -r --delete -e "ssh -p20022" /data/projects/bgm/Development/webroot-mtug-dev/ mh@tau.bgm-hosting.com:/var/www/www1/vhosts/mtug/production
```

oder git

```
ssh -p20022 mh@tau.bgm-hosting.com "cd /var/www/www1/vhosts/mtug/production && git pull"
```

## Vorbereitet

Deployment mit TYPO3 Surf

```
cd /data/projects/bgm/Development/webroot-mtug-dev/Build
SURF_WORKSPACE=".surfworkspace" \
/usr/bin/php705/php Surf/surf.phar --configurationPath="Surf" -vvv deploy ProductionDeployment
```

## Bedingungen

Deployment mit TYPO3 Surf in einem Docker Container.

```
cd /data/projects/bgm/Development/webroot-mtug-dev/Build
docker run --rm --name my-buildcontainer -v "$PWD/../":/build -e "SSH_PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----
		INSERT YOUR PRIVATE KEY WHICH ALLOWS ACCESS TO THE TARGET SERVER BY SSH KEY AUTHORIZATION
-----END RSA PRIVATE KEY-----" registry.gitlab.com/mhuber84/klickibunti-deployment /build/Build/Docker/productiondeployment.sh
```

## Klickibunti

Deployment mit TYPO3 Surf in einem Docker Container gestartet durch GitbLab.

![start deployment](Material/Klickibunti.png)

## Letzte Chance

Automatisches Staging-Deployment für letzte Tests. 

## Zwischenstand

Review-Apps pro Branch.

## CMS Vorbereitungen

Verzeichnisstruktur Besonderheiten:

* typo3_src => SymLink zum Core
* files => SymLink zu User-Uploads (fileadmin, uploads)

## Kernig

Shell-Skript zum Deployen des TYPO3 CMS Cores (inkl. Patch einspielen).

## Big Data

Shell-Skript um die Datenbank und User-Uploads auf ein Dev-System zu holen.

## Finale

Surf-Deployment fürs TYPO3 CMS.

Production-Vhost 

    ServerName production.mtug.bgm-hosting.com
    DocumentRoot /PATH/TO/PRODUCTION/releases/current

    /PATH/TO/PRODUCTION/
    /PATH/TO/PRODUCTION/releases
    /PATH/TO/PRODUCTION/releases/20170117132554
    /PATH/TO/PRODUCTION/releases/20170117132554/favicon.ico
    /PATH/TO/PRODUCTION/releases/20170117132554/uploads -> files/uploads
    /PATH/TO/PRODUCTION/releases/20170117132554/fileadmin -> files/fileadmin
    /PATH/TO/PRODUCTION/releases/20170117132554/.htaccess
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3 -> typo3_src/typo3
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3cms
    /PATH/TO/PRODUCTION/releases/20170117132554/ReleaseIdentifier_20170117132554.php
    /PATH/TO/PRODUCTION/releases/20170117132554/robots.txt
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3conf
    /PATH/TO/PRODUCTION/releases/20170117132554/.gitlab-ci.yml
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3_src -> /PATH/TO/PRODUCTION/shared/typo3_src-7.6.15
    /PATH/TO/PRODUCTION/releases/20170117132554/index.php -> typo3_src/index.php
    /PATH/TO/PRODUCTION/releases/20170117132554/.gitignore
    /PATH/TO/PRODUCTION/releases/20170117132554/files -> /PATH/TO/PRODUCTION/shared/files
    /PATH/TO/PRODUCTION/releases/20170117132554/Material
    /PATH/TO/PRODUCTION/releases/20170117132554/ReleaseIdentifier_20170117122815.php
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3temp_local
    /PATH/TO/PRODUCTION/releases/20170117132554/README.md
    /PATH/TO/PRODUCTION/releases/20170117132554/typo3temp -> files/typo3temp
    /PATH/TO/PRODUCTION/releases/current -> ./20170117132554
    /PATH/TO/PRODUCTION/shared
    /PATH/TO/PRODUCTION/shared/typo3_src-7.6.15
    /PATH/TO/PRODUCTION/shared/files
    /PATH/TO/PRODUCTION/shared/files/uploads
    /PATH/TO/PRODUCTION/shared/files/fileadmin
    /PATH/TO/PRODUCTION/shared/files/typo3temp

Staging-Vhost 

    ServerName staging.mtug.bgm-hosting.com
    DocumentRoot /PATH/TO/STAGING/releases/current

    /PATH/TO/STAGING/
    /PATH/TO/STAGING/releases
    /PATH/TO/STAGING/releases/20170117132554
    /PATH/TO/STAGING/releases/20170117132554/favicon.ico
    /PATH/TO/STAGING/releases/20170117132554/uploads -> files/uploads
    /PATH/TO/STAGING/releases/20170117132554/fileadmin -> files/fileadmin
    /PATH/TO/STAGING/releases/20170117132554/.htaccess
    /PATH/TO/STAGING/releases/20170117132554/typo3 -> typo3_src/typo3
    /PATH/TO/STAGING/releases/20170117132554/typo3cms
    /PATH/TO/STAGING/releases/20170117132554/ReleaseIdentifier_20170117132554.php
    /PATH/TO/STAGING/releases/20170117132554/robots.txt
    /PATH/TO/STAGING/releases/20170117132554/typo3conf
    /PATH/TO/STAGING/releases/20170117132554/.gitlab-ci.yml
    /PATH/TO/STAGING/releases/20170117132554/typo3_src -> /PATH/TO/STAGING/shared/typo3_src-7.6.15
    /PATH/TO/STAGING/releases/20170117132554/index.php -> typo3_src/index.php
    /PATH/TO/STAGING/releases/20170117132554/.gitignore
    /PATH/TO/STAGING/releases/20170117132554/files -> /PATH/TO/STAGING/shared/files
    /PATH/TO/STAGING/releases/20170117132554/Material
    /PATH/TO/STAGING/releases/20170117132554/ReleaseIdentifier_20170117122815.php
    /PATH/TO/STAGING/releases/20170117132554/typo3temp_local
    /PATH/TO/STAGING/releases/20170117132554/README.md
    /PATH/TO/STAGING/releases/20170117132554/typo3temp -> files/typo3temp
    /PATH/TO/STAGING/releases/current -> ./20170117132554
    /PATH/TO/STAGING/shared
    /PATH/TO/STAGING/shared/typo3_src-7.6.15
    /PATH/TO/STAGING/shared/files
    /PATH/TO/STAGING/shared/files/uploads
    /PATH/TO/STAGING/shared/files/fileadmin
    /PATH/TO/STAGING/shared/files/typo3temp

Review-Vhost 

    ServerName review.mtug.bgm-hosting.com
    ServerAlias *.review.mtug.bgm-hosting.com
    VirtualDocumentRoot "/PATH/TO/REVIEW/%-5+/releases/current"

    /PATH/TO/REVIEW/
    /PATH/TO/REVIEW/.files
    /PATH/TO/REVIEW/.files/uploads
    /PATH/TO/REVIEW/.files/fileadmin
    /PATH/TO/REVIEW/.files/typo3temp
    /PATH/TO/REVIEW/.dummy
    /PATH/TO/REVIEW/.dummy/releases
    /PATH/TO/REVIEW/.dummy/releases/20170117132554
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/favicon.ico
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/uploads -> files/uploads
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/fileadmin -> files/fileadmin
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/.htaccess
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/Build
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/typo3 -> typo3_src/typo3
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/typo3cms
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/robots.txt
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/typo3conf
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/.gitlab-ci.yml
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/typo3_src -> /PATH/TO/REVIEW/.typo3source/typo3_src-7.6.15
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/index.php -> typo3_src/index.php
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/.gitignore
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/files -> /PATH/TO/REVIEW/.files
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/Material
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/README.md
    /PATH/TO/REVIEW/.dummy/releases/20170117132554/typo3temp -> files/typo3temp
    /PATH/TO/REVIEW/.dummy/releases/current -> ./20170117132554
    /PATH/TO/REVIEW/.typo3source
    /PATH/TO/REVIEW/.typo3source/typo3_src-7.6.15

## Do it yourself

Um das ganze selbst auszuprobieren müsst ihr folgendes tun:

1. Macht einen Fork dieses Repositories
2. Setzt die GitLab-Variables (siehe Material/GitLab-Variables.png)
3. Registriert einen GitLab-Runner (docker) mit dem Tag mtug-dind und mindestens einen GitLab-Runner (docker) mit dem Tag mtug (siehe Material/GitLab-Runners.png)
4. Ersetzt meine Domains und Pfade im Ordner Build und in der .gitlab-ci
5. Ersetzt typo3conf und .htaccess durch eure eigenen (und vergesst die Datenbanken für production, staging und review nicht!)

Die Zugänge und Runner in diesem Repository sind gesperrt.

<hr/>

**Author**

This repository was created by Marco Huber and the bgm websolutions development team. 

* <a href="https://twitter.com/mhuber84">@mhuber84</a>
* mail@marco-huber.de
* marco.huber@bgm-gmbh.de
* <a href="http://typo3.bgm-gmbh.de">bgm Websolutions GmbH & Co. KG</a>

Feel free to contribute and send in pull requests or create an issue.
