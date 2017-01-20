#!/usr/bin/env bash

if [ -z "$DEPLOY_TARGET_DB_PASSWORD" ]; then
	if [ -z "$1" ]; then
		read -s -p "Enter DEPLOY_TARGET_DB_PASSWORD: " DEPLOY_TARGET_DB_PASSWORD
		echo "";
	else
		DEPLOY_TARGET_DB_PASSWORD=$1
	fi
fi

if [ -z "$PRODUCTION_DB_PASSWORD" ]; then
	if [ -z "$2" ]; then
		read -s -p "Enter PRODUCTION_DB_PASSWORD: " PRODUCTION_DB_PASSWORD
		echo "";
	else
		PRODUCTION_DB_PASSWORD=$1
	fi
fi

if [[ $(ssh -A -p"$DEPLOY_TARGET_PORT" "$DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST" "ssh -p20022 mh@tau.bgm-hosting.com \"echo 'SELECT MAX(tstamp) FROM sys_log WHERE type IN (1,2)' | mysql -h127.0.0.1 -P3306 -umtug -p$PRODUCTION_DB_PASSWORD www1_mtug_production\"") == $(ssh -A -p"$DEPLOY_TARGET_PORT" "$DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST" "echo 'SELECT MAX(tstamp) FROM sys_log WHERE type IN (1,2)' | mysql -h\"$DEPLOY_TARGET_DB_HOST\" -P\"$DEPLOY_TARGET_DB_PORT\" -u\"$DEPLOY_TARGET_DB_USER\" -p\"$DEPLOY_TARGET_DB_PASSWORD\" \"$DEPLOY_TARGET_DB_NAME\"") ]]; then
	echo "Data is already deployed."

	if [ "$CI_BUILD_MANUAL" == "true" ]; then
		echo "But deployment was triggered manually, so we deploy the data again"
	else
		exit 0
	fi
fi

echo "Get production database" \
	&& ssh -A -p"$DEPLOY_TARGET_PORT" "$DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST" "ssh -p20022 mh@tau.bgm-hosting.com \"mysqldump -h127.0.0.1 -P3306 -umtug -p$PRODUCTION_DB_PASSWORD --default-character-set=utf8 --opt --skip-lock-tables --skip-add-locks --lock-tables=false --single-transaction --quick www1_mtug_production | gzip -3 -c\" > \"mh@tau.bgm-hosting.com.sql.gz\" && gunzip -f \"mh@tau.bgm-hosting.com.sql.gz\" && mysql -h\"$DEPLOY_TARGET_DB_HOST\" -P\"$DEPLOY_TARGET_DB_PORT\" -u\"$DEPLOY_TARGET_DB_USER\" -p\"$DEPLOY_TARGET_DB_PASSWORD\" \"$DEPLOY_TARGET_DB_NAME\" < \"mh@tau.bgm-hosting.com.sql\" && rm \"mh@tau.bgm-hosting.com.sql\"" \
	&& echo "Get production files" \
	&& ssh -A -p"$DEPLOY_TARGET_PORT" "$DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST" "rsync --progress --stats --human-readable --delete-after -avz --no-owner --no-group -e \"ssh -p20022\" mh@tau.bgm-hosting.com:/var/www/www1/vhosts/mtug/production/shared/files/ \"$DEPLOY_TARGET_FILES_PATH\""
