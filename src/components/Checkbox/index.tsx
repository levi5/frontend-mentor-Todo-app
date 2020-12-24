import { InputHTMLAttributes } from 'react';
import styles from './styles';

const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<styles.Checkbox>
			<label className="container">
				<input {...props} type="checkbox" />
				<span className="checkmark"></span>
			</label>
		</styles.Checkbox>
	);
};

export default Checkbox;
