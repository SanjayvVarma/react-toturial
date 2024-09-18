import React, { useState } from 'react'
import Folder from './Folder'
import { fileExplorerData } from './data'
import useTraverseTree from './useTraversTree';

const FileExplorer = () => {
  const [data, setData] = useState(fileExplorerData);

  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId, nodes, isFolder) => {
    const finalTree = insertNode(data, folderId, nodes, isFolder)

    setData(finalTree)
  }

  return (
    <div className='w-full h-screen bg-gray-900 text-white'>
      <div className='pl-5'>
        <h1>File Explorer</h1>
        <Folder data={data} handleInsertNode={handleInsertNode} />
      </div>
    </div>
  )
}

export default FileExplorer