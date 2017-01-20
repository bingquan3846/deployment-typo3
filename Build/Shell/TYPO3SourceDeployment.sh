#!/usr/bin/env bash

if [[ -f ".typo3source/typo3_src-$TYPO3_VERSION.tar.gz" && $(echo "$TYPO3_TAR_SHA1 .typo3source/typo3_src-$TYPO3_VERSION.tar.gz" | sha1sum --status -c -) -eq 0 ]]; then
	echo ".typo3source/typo3_src-$TYPO3_VERSION.tar.gz exists and has the sha1 $TYPO3_TAR_SHA1."

	patch --dry-run -p1 -R -s -f -d .typo3source/typo3_src-"$TYPO3_VERSION" < Shell/0001-BUGFIX-Fix-RTE-validation.patch
	if [ $? -ne 0 ]; then
		echo "But not all patches are applied. So deploy again."
	elif [ "$CI_BUILD_MANUAL" == "true" ]; then
		echo "But deployment was triggered manually. So deploy again."
	else
		echo "And all patches are applied."
		echo "And deployment wasn't triggered manually."
		echo "Skip deployment."
		exit 0
	fi
fi

echo "Deploy TYPO3 $TYPO3_VERSION to $DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST:$DEPLOY_TARGET_PORT $DEPLOY_TARGET_PATH" \
	&& mkdir -p .typo3source \
	&& curl -L -o .typo3source/typo3_src-"$TYPO3_VERSION".tar.gz get.typo3.org/"$TYPO3_VERSION" \
	&& tar -xzf .typo3source/typo3_src-"$TYPO3_VERSION".tar.gz -C .typo3source \
	&& patch -p1 -d .typo3source/typo3_src-"$TYPO3_VERSION" < Shell/0001-BUGFIX-Fix-RTE-validation.patch \
	&& rsync --progress --stats --human-readable -avz --delete --delete-after -e "ssh -p $DEPLOY_TARGET_PORT" .typo3source/typo3_src-"$TYPO3_VERSION" "$DEPLOY_TARGET_USER@$DEPLOY_TARGET_HOST:$DEPLOY_TARGET_PATH"
