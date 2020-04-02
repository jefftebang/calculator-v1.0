import React from 'react';

const OpButton = props => {
    return(
        <>
            <button
                className='btn text-white rounded-pill ml-2 border-secondary'
                style={{
                    height: '90px',
                    width: '55px',
                    marginTop:'15px',
                    backgroundColor: props.color 
                }}
                onClick = { ()=>{ props.onClick(props.text) } }
            >
                <span 
                    style={{
                        fontSize:'25px',
                    }}>
                    { props.text }
                </span>
            </button>
        </>
    )
}

export default OpButton;