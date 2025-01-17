#######################################################################
# create and push docker images                                       #
#######################################################################
TAG_NAME="v2"
CORE_IMAGE="ghcr.io/intelops/compage/core:$TAG_NAME"
APP_IMAGE="ghcr.io/intelops/compage/app:$TAG_NAME"
UI_IMAGE="ghcr.io/intelops/compage/ui:$TAG_NAME"

# create docker images for core, app and ui
docker build -t $CORE_IMAGE  --network host ../core/
docker build -t $APP_IMAGE  --network host ../app/
docker build -t $UI_IMAGE  --network host ../ui/
