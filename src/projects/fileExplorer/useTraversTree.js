const useTraverseTree = () => {
    function insertNode(tree, folderId, nodes, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.nodes.unshift({
                id: new Date().getDate(),
                name: nodes,
                isFolder,
                nodes: []
            })
            return tree
        }

        if (tree.nodes) {
            const updatedNodes = tree.nodes.map((childNode) =>
                insertNode(childNode, folderId, nodes, isFolder) || childNode
            );
            return {
                ...tree,
                nodes: updatedNodes
            };
        }
        
        return null;

    };

    return { insertNode }
}

export default useTraverseTree;