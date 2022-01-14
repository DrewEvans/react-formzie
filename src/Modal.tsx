import React from 'react'

interface Props {
    children: JSX.Element,
    onClick: any
}

const Modal = React.memo(({onClick, children}: Props) => {
    return (
        <div className='wrapper' onClick={onClick}>
            <div className='modal'>
                <div 
                className="modal-cross" 
                onClick={onClick} 
                aria-label="close contact form"
                >
                    x
                </div>
                <div className='modal-content'>{children}</div>
            </div>
        </div>
    )
})

export {Modal}
