import React from 'react';
import './Header.css';
import {Search} from '../Search/Search';
import logo from '../../img/logo.svg';

const Header = (props) => (
		<header className={`header ${props.widthClass}`}>
			<div className="wrapper">
				<img className="logo" src={logo} />
				<Search data={props.data} onSearch={(data) => props.onSearch(data)}/>
			</div>
		</header>
)

export {Header};