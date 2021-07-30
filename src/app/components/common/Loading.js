import React from 'react';

export default function Loading(props) {
    return (
        <div className={`pageloader ${props.loading === true ? 'is-active' : ''}`}>
            <span className='title'>Loading...</span>
        </div>
    );
}
