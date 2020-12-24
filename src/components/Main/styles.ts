import ThemeProps from '../../@types/theme';
import styled from 'styled-components';

const Wrapper = styled.div<ThemeProps>`
	max-width: 1440px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	background: ${(ThemeProps) => ThemeProps.Theme.color.primary};
`;

export { Wrapper };
