import styled from 'styled-components';

const Checkbox = styled.div`
	.container {
		display: block;
		position: relative;
		padding-left: 3.5rem;
		margin-bottom: 1.2rem;
		cursor: pointer;
		font-size: 2.2rem;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.container .checkmark {
		position: absolute;
		top: 2px;
		left: 0;
		height: 2.2rem;
		width: 2.2rem;
		background-color: transparent;
		border: 0.5px solid #aaa;
		border-radius: 50%;
	}

	.container:hover .checkmark {
		border: solid 0.5px transparent;
		background-image: linear-gradient(
			hsl(192, 100%, 67%),
			hsl(280, 87%, 65%)
		);
		background-origin: border-box;
		background-clip: content-box, border-box;
	}

	.container input:checked ~ .checkmark {
		border: 0;
		background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
	}

	.container .checkmark:after {
		content: '';
		position: absolute;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/assets/icon-check.svg');
		display: none;
	}

	.container input:checked ~ .checkmark:after {
		display: block;
	}
	.container .checkmark:after {
		width: 1.1rem;
		height: 1.1rem;
		top: 0.6rem;
		left: 0.6rem;
	}
`;

export default { Checkbox };
