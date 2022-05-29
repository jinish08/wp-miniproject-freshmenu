import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import { useAuth, useFormInput, useMounted } from '../hooks';
import MuiAlert from '@mui/material/Alert';
import { auth } from '../utils/init-firebase';
import { updateProfile } from 'firebase/auth';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
	const firstName = useFormInput('');
	const lastName = useFormInput('');
	const mobNumber = useFormInput();
	const email = useFormInput('');
	const password = useFormInput('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [openSnack, setOpenSnack] = useState(false);
	const [snackBarOpt, setSnackBarOpt] = useState({
		severity: 'success',
		msg: 'Hii',
	});

	const history = useHistory();
	const location = useLocation();

	const mounted = useMounted();

	const { register, logInWithGoogle, logInWithFacebook, currentUser } =
		useAuth();

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSnack(false);
	};

	if (currentUser) {
		return <Redirect to="/" />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		try {
			const res = await register(email.value, password.value);
			const fullName = firstName.value + ' ' + lastName.value;
			const mobileNo = '+91' + mobNumber.value;
			await updateProfile(auth.currentUser, {
				displayName: fullName,
				phoneNumber: mobileNo,
			});
			console.log(res);
			setSnackBarOpt({
				severity: 'success',
				msg: `Hi ${fullName}, you are registerd!`,
			});
			setOpenSnack(true);
			setTimeout(function () {
				history.push(location.state?.from ?? '/');
			}, 1000);
		} catch (error) {
			setSnackBarOpt({
				severity: 'error',
				msg: error.message,
			});
			setOpenSnack(true);
		}

		mounted && setIsSubmitting(false);
	};

	const handleGoogleSignIn = async () => {
		try {
			const { user } = await logInWithGoogle();

			console.log(user);

			history.push(location.state?.from ?? '/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleFacebookLogin = async () => {
		try {
			const res = await logInWithFacebook();
			console.log(res);
			history.push(location.state?.from ?? '/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center bg-light"
			style={{ minHeight: '100vh', backgroundColor: '#b3b3b3' }}
		>
			<Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity={snackBarOpt.severity}
					sx={{ width: '100%' }}
				>
					{snackBarOpt.msg}
				</Alert>
			</Snackbar>
			<div
				className="w-100 p-4 shadow bg-white rounded"
				style={{ maxWidth: 350 }}
			>
				<form onSubmit={handleSubmit}>
					<div className="row mb-3">
						<div className="col-md-6 d-flex justify-content-center">
							<button
								type="submit"
								className="btn btn-block w-100 mb-2"
								style={{ backgroundColor: '#4267B2', borderRadius: 3 }}
								onClick={handleFacebookLogin}
							>
								<i className="fab fa-facebook-f" style={{ color: 'white' }}></i>
							</button>
						</div>
						<div className="col-md-6 d-flex justify-content-center ">
							<button
								type="submit"
								className="btn btn-block w-100 mb-2"
								style={{ backgroundColor: '#4285F4', borderRadius: 3 }}
								onClick={handleGoogleSignIn}
							>
								<i className="fab fa-google" style={{ color: 'white' }}></i>
							</button>
						</div>
					</div>
					<div className="strike mb-3">
						<span> OR USE EMAIL </span>
					</div>

					<div className="form-outline mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
							required
							{...firstName}
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
							required
							{...lastName}
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="number"
							className="form-control"
							placeholder="10 digit Mobile Number"
							required
							{...mobNumber}
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							required
							{...email}
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							required
							{...password}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-block mb-3 w-100 login-button"
					>
						{isSubmitting && (
							<span
								class="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							></span>
						)}
						{isSubmitting ? 'Registersing...' : 'Register'}
					</button>
					<hr />
					<div className="text-center">
						<p>
							Already have an account?{' '}
							<Link to="/login" style={{ color: '#e85826' }}>
								Login
							</Link>
						</p>
					</div>
					<div className="text-center">
						<p>
							Back to{' '}
							<Link to="/" style={{ color: '#e85826' }}>
								Home
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
