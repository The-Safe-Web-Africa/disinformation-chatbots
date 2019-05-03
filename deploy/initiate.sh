#!/bin/bash
set -e

### Configuration ###

SERVER=cloud@desinfo.quaidorsay.fr
APP_DIR=/home/cloud/desinfo-mattermost-integrations
REMOTE_SCRIPT_PATH=/tmp/deploy-desinfo-mattermost-integrations.sh


### Library ###

function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###

run scp $KEYARG deploy/work.sh $SERVER:$REMOTE_SCRIPT_PATH
echo
echo "---- Running deployment script on remote server ----"
run ssh $SERVER bash $REMOTE_SCRIPT_PATH