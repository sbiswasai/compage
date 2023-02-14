import {getModifiedState, setModifiedState} from "../../utils/localstorage-client";
import {CompageJson} from "../../components/diagram-maker/models";

export const getNodeConsumerData = (node: any) => {
    delete node.id;
    delete node.typeId;
    delete node.diagramMakerData;
    return node;
};

export const getEdgeConsumerData = (edge: any) => {
    delete edge.id;
    delete edge.dest;
    delete edge.diagramMakerData;
    delete edge.src;
    return edge;
};


export const updateModifiedState = (json: CompageJson) => {
    const modifiedState = getModifiedState();
    if (!modifiedState
        || modifiedState === "{}"
        || Object.keys(JSON.parse(modifiedState)?.nodes).length === 0
        || Object.keys(JSON.parse(modifiedState)?.edges).length === 0) {
        const resultState = {
            nodes: {},
            edges: {}
        };
        const parsedState = json;
        // state has nodes
        if (Object.keys(parsedState?.nodes).length !== 0) {
            // iterate over nodes and check if they have any consumerData attached to them.
            for (let key in parsedState.nodes) {
                const consumerData = parsedState.nodes[key]?.consumerData;
                if (Object.keys(consumerData).length > 1) {
                    // add this node to modifiedState
                    resultState.nodes[key] = getNodeConsumerData(parsedState.nodes[key]);
                }
            }
        }
        if (Object.keys(parsedState?.edges).length !== 0) {
            // iterate over edges and check if they have any consumerData attached to them.
            for (let key in parsedState.edges) {
                const consumerData = parsedState.edges[key]?.consumerData;
                if (consumerData && Object.keys(consumerData).length > 0) {
                    // add this edge to modifiedState
                    resultState.edges[key] = getEdgeConsumerData(parsedState.edges[key]);
                }
            }
        }
        if (Object.keys(resultState?.nodes).length !== 0
            || Object.keys(resultState?.edges).length !== 0) {
            setModifiedState(JSON.stringify(resultState));
        }
    }
};
