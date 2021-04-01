import React from 'react';
import applogo from './../images/applogo.svg';

function Login() {
	const googleSignIn = (e) => {
		alert('you must login now');
	};

	return (
		<section className='hero is-primary is-fullheight'>
			<div className='hero-body'>
				<div className='container'>
					<div className='columns is-centered'>
						<div className='column is-4-desktop is-4-widescreen'>
							<div className='card py-6 my-6'>
								<p className='is-size-3 my-6 is-capitalized has-text-weight-semibold has-text-centered'>Welcome To BizWiz</p>
								<figure className='image is-4by3'>
									<img src={applogo} className='' alt='' width='125' height='125' alt='Sign-In To BizWiz' />
								</figure>
								<footer className='card-content has-text-centered'>
									<button className='button is-success' onClick={googleSignIn}>
										Sign-In With Google
									</button>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
