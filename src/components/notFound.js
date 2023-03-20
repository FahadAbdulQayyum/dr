import React from 'react'

const notFound = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'
        }}>
            <h1 style={{ color: '#f26722' }}> This Page Does<span style={{ color: '#20a4dc' }}> Not Exist.</span></h1>
        </div>
    )
}

export default notFound