import React from 'react'

const Paragraph = ({paragraph}) => {
    return(
        <div>
        {paragraph.map((paragraph)=>(
            <h1>{paragraph[0]}</h1>
        ))}
        </div>
    )
};

export default Paragraph