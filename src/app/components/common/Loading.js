import React from 'react';

export default function Loading(props) {
    return props.loading &&
        <div className={`pageloader is-active`}>
            <span className='title'>Loading...</span>
        </div>;
}
