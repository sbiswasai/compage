package core

import (
	coreedge "github.com/intelops/compage/core/internal/core/edge"
	corenode "github.com/intelops/compage/core/internal/core/node"
	"time"
)

// ModificationDetails has creation and modification details.
type ModificationDetails struct {
	CreatedBy string    `json:"createdBy"`
	UpdatedBy string    `json:"updatedBy"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// Project is top level struct depicting the monorepo and resembling to github repository.
// It has a single compage.json and can have multiple nodes and edges (projects and connections) internally.
type Project struct {
	Name           string                 `json:"name"`
	RepositoryName string                 `json:"repositoryName"`
	UserName       string                 `json:"userName"`
	CompageJSON    *CompageJSON           `json:"compageJSON"`
	Metadata       map[string]interface{} `json:"metadata"`
	ModificationDetails
}

// CompageJSON has all edges and nodes
type CompageJSON struct {
	// Linkages (connection details) between Nodes
	Edges []*coreedge.Edge `json:"edges"`
	// Nodes represent components and has details of the component.
	Nodes []*corenode.Node `json:"nodes"`
}

// Rest Protocol
const Rest = "REST"

// Grpc Protocol
const Grpc = "GRPC"

// Ws Protocol
const Ws = "WS"
