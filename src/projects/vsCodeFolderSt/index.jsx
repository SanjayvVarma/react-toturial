
import { data } from './data'
import Folder from './Folder'
import './vscode.css'

const VsCodeFolder = () => {
    return (
        <>
            <div><h1>VS CODE FOLDER</h1></div>
            <Folder files={data} />
        </>
    )
}

export default VsCodeFolder