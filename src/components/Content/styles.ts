import ThemeProps from '../../@types/theme';
import styled from 'styled-components';

const Wrapper = styled.div<ThemeProps>`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: -7.6rem;

	#todo-area {
		max-width: 46rem;
		width: 100%;
		height: auto;
		border-radius: 0.4rem;
		background: ${(ThemeProps) => ThemeProps.Theme.color.secondary};
		-webkit-box-shadow: -1px 25px 8px 10px rgba(0, 0, 0, 0.04);
		box-shadow: -1px 25px 8px 10px rgba(0, 0, 0, 0.04);
	}

	#todo-area .todo-content {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	#todo-area .todo-content .todo-li {
		width: 100%;
		height: auto;
		padding: 1.8rem;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid
			${(ThemeProps) => ThemeProps.Theme.color.todoBorder};
	}

	#todo-area .todo-content .todo-li .todo-content-checkbox {
		position: absolute;
		top: 0rem;
		left: 1.6rem;
	}

	#todo-area .todo-content .todo-li h3 {
		font-size: 1.6rem;
		font-weight: 400;
		margin-left: 4rem;
		color: ${(ThemeProps) => ThemeProps.Theme.color.todoText};
	}

	#todo-area .todo-content .todo-li .remove-todo {
		width: 1.4rem;
		height: 1.4rem;
		transition: all 0.8s;
	}
	#todo-area .todo-content .todo-li .remove-todo:hover {
		transform: rotate(360deg);
	}

	#todo-area .todo-content .todo-li .complete {
		text-decoration: line-through;
		color: ${(ThemeProps) => ThemeProps.Theme.color.todoTextLineThrough};
	}

	#todo-area .todo-footer {
		width: 100%;
		height: 5rem;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#todo-area .todo-footer h5 {
		font-size: 1.2rem;
		font-weight: 400;
		color: ${(ThemeProps) => ThemeProps.Theme.color.optionsText};
	}

	#todo-area .todo-footer span {
		color: ${(ThemeProps) => ThemeProps.Theme.color.optionsText} !important;
		font-size: 1.2rem;
		font-weight: 400 !important;
		cursor: pointer;
	}

	#todo-area .todo-footer span:hover {
		color: ${(ThemeProps) =>
			ThemeProps.Theme.color.optionsTextHover} !important;
	}

	#menu-options-desktop {
		width: auto;
		height: auto;
		display: flex;
		background: ${(ThemeProps) => ThemeProps.Theme.color.secondary};
	}
	#menu-options-mobile {
		width: 100%;
		height: auto;
		margin-top: 1rem;
		padding: 2rem;
		display: none;
		border-radius: 0.4rem;
		background: ${(ThemeProps) => ThemeProps.Theme.color.secondary};
		-webkit-box-shadow: -1px 10px 8px 10px rgba(0, 0, 0, 0.04);
		box-shadow: -1px 10px 8px 10px rgba(0, 0, 0, 0.04);
	}

	#menu-options-mobile .active {
		color: hsl(220, 98%, 61%);
	}
	@media (max-width: 520px) {
		padding: 0 3rem;
		#todo-area {
			max-width: 100%;
		}

		#menu-options-desktop {
			display: none;
		}

		#menu-options-mobile {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
	@media (max-width: 375px) {
		top: -2.6rem;
	}
`;

export default { Wrapper };
