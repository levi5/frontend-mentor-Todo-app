import ThemeProps from '../../@types/theme';
import styled from 'styled-components';

const Header = styled.header<ThemeProps>`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	background: ${(ThemeProps) => ThemeProps.Theme.color.primary};

	#content-header {
		width: 100%;
		height: 301px;
		max-height: 301px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-image: url(${(ThemeProps) => ThemeProps.Theme.bg});
	}

	#content-header .header-group-01 {
		max-width: 50rem;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	#content-header .header-group-01 h1 {
		font-family: 'Josefin Sans';
		font-size: 3.2rem;
		letter-spacing: 1rem;
		margin-bottom: 4.5rem;
		text-transform: uppercase;
		color: hsl(0, 0%, 98%);
	}

	#content-header .header-group-02 {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	#content-header .header-group-02 span {
		width: 2rem;
		height: 2rem;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(${(ThemeProps) => ThemeProps.Theme.iconTheme});
		cursor: pointer;
	}

	#content-header .header-content-inputs {
		position: relative;
	}

	#content-header .header-content-inputs input[name='todo-text'] {
		font-size: 1.8rem;
		font-weight: 400;
		background: ${(ThemeProps) => ThemeProps.Theme.color.secondary};
		color: ${(ThemeProps) => ThemeProps.Theme.color.inputText};
		padding-left: 5.5rem;
		padding-top: 1.8rem;
		padding-bottom: 1.2rem;
	}

	#content-header .header-content-inputs .content-checkbox {
		position: absolute;
		top: 0.1rem;
		left: 1.5rem;
	}

	@media (max-width: 375px) {
		#content-header {
			height: 201px;
			background-image: url(${(ThemeProps) => ThemeProps.Theme.bgMobile});
		}
	}
`;

export default { Header };
