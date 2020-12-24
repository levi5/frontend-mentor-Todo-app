import ThemeProps from '../../@types/theme';
import styled from 'styled-components';

const Footer = styled.footer<ThemeProps>`
	width: 100%;
	height: auto;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(ThemeProps) => ThemeProps.Theme.color.primary};
	h3 {
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 2.4rem;
		color: ${(ThemeProps) => ThemeProps.Theme.color.footerText};
	}
`;

export default { Footer };
