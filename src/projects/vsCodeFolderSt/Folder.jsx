import React, { useState } from 'react'

const Folder = ({ files }) => {
    const [expand, setExpand] = useState(false)
    return (
        <div className='vs-container'>
            <div>
                {
                    files.isFolder &&
                    <button className={expand ? 'expand' : ''} onClick={() => setExpand(!expand)}>{">"}</button>
                }
                {files.name}
            </div>
            {
                files.isFolder && expand &&
                files.children?.map((exp,i) => (
                    <div key={i}>
                        <Folder files={exp} />
                    </div>
                ))
            }
        </div >
    )
}

export default Folder