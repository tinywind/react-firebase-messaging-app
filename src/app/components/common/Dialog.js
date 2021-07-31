import React from 'react';

export default function Dialog(props) {
    return props.show && (
        <div className='modal is-active'>
            <div className='modal-background'/>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title is-unselectable'>BizWiz V1</p>
                    <div className='column is-size-7 has-text-grey-light has-text-right	 is-unselectable'>Created by Nhilesh Baua, India</div>
                    <button type='button' onClick={props.close} className='delete' aria-label='close'/>
                </header>
                <section className='modal-card-body'>
                    <div className='field has-text-dark '>
                        <div className='is-size-6 mt-5 is-unselectable'>{props.children}</div>
                    </div>
                </section>
                <footer className='modal-card-foot'>
                    <button type='button' onClick={props.close} className='button is-primary'>{props.buttonText || 'close'}</button>
                </footer>
            </div>
        </div>
    );
}
