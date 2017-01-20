<?php
$deploymentName = 'ProductionDeployment';
$applicationName = 'MTUG.Internet';
// Url to the project git repository
$repositoryUrl = 'git@gitlab.com:mhuber84/klickibunti-deployment.git';
// Path to the TYPO3 source on the server
$typo3srcPath = getenv('TYPO3_SOURCE');
// Path to the shared/editorial files on the server
$filesPath = getenv('USER_FILES');
// The deployment path is not the document root!
// The document root has to be: '[deploymentPath]/releases/current'.
$deploymentPath = '/var/www/www1/vhosts/mtug/production';
// Git branch to deploy
$branch = 'master';
// A speaking name to identify this host
$host = 'production';
// Hostname, used to connect via ssh
$hostname = 'tau.bgm-hosting.com';
// Port, used to connect via ssh
$port = '20022';
// SSH username. Authentication via private/public key
$username = 'mh';
