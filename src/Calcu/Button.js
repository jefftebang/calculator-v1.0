import React from 'react';

const Button = props => {
    return(
        <>
            <button
                className='btn text-white'
                style={{
                    height: '70px',
                    width: '58px',
                    marginTop:'15px',
                    backgroundColor: props.color 
                }}
                onClick = { ()=>{ props.onClick(props.text) } }
            >
                <span 
                    style={{
                        fontSize:'25px'
                    }}>
                    { props.text }
                </span>
            </button>
        </>
    )
}

export default Button;