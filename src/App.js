import './app.css';
import { signInWithGoogle } from './firebase';

export const App = () => {
	return (
		<div>
			<h1>App</h1>
			<button onClick={signInWithGoogle}>SIGN IN</button>
		</div>
	);
};
