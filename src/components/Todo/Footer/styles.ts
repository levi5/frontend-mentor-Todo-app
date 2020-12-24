import ThemeProps from '../../../@types/theme';
import styled from 'styled-components';

const Wrapper = styled.div<ThemeProps>`
	display: flex;
	flex-direction: row;
	background: transparent;

	nav ul {
		width: auto;
		display: flex;
	}

	nav ul .active {
		color: hsl(220, 98%, 61%);
	}

	nav ul li {
		margin-right: 1rem;
		font-size: 1.2rem;
		font-weight: 700;
		color: ${(ThemeProps) => ThemeProps.Theme.color.optionsText};
	}

	nav ul li:hover {
		color: ${(ThemeProps) => ThemeProps.Theme.color.optionsTextHover};
	}
`;

export { Wrapper };
