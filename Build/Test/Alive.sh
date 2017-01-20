#!/bin/bash

function parseUrl {
	# extract the protocol
	proto="$(echo $1 | grep :// | sed -e's,^\(.*://\).*,\1,g')"
	# remove the protocol
	url=$(echo $1 | sed -e s,$proto,,g)
	# extract the user (if any)
	user="$(echo $url | grep @ | cut -d@ -f1)"
	# extract the host
	host=$(echo $url | sed -e s,$user@,,g | cut -d/ -f1)
	# by request - try to extract the port
	port="$(echo $host | sed -e 's,^.*:,:,g' -e 's,.*:\([0-9]*\).*,\1,g' -e 's,[^0-9],,g')"
	# extract the path (if any)
	path="$(echo $url | grep / | cut -d/ -f2-)"

	urlParts=($proto $user $host $port $path);
}

urlParts=();
parseUrl $TEST_URL
if curl "$TEST_URL" $(if [ -n ${urlParts[1]} ]; then echo "-u ${urlParts[1]}"; fi) -sS -k -f -L -o /dev/null; then
	echo "$TEST_URL is OK"
else
	echo "$TEST_URL is NOT OK"
	exit 1
fi

if [ -n "$TEST_BACKEND_URL" ]; then
	urlParts=();
	parseUrl $TEST_BACKEND_URL
	if curl "$TEST_BACKEND_URL" $(if [ -n ${urlParts[1]} ]; then echo "-u ${urlParts[1]}"; fi) -sS -k -f -L -o /dev/null; then
		echo "$TEST_BACKEND_URL is OK"
	else
		echo "$TEST_BACKEND_URL is NOT OK"
		exit 1
	fi
fi

exit 0
