import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import DehazeIcon from '@material-ui/icons/Dehaze';

import { SideBarData } from './SideBarData';

const Nav = styled.div`
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	${'' /* background-color: #2f4050; */}
	background-color: #1f2325;
	z-index: 10;
	margin: 0;
`;

const SidebarNav = styled.nav`
	background: #1f2325;
	width: 250px;
	height: 100vh;
	position: fixed;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const SideBar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Nav>
				<DehazeIcon
					style={{
						fill: '#f8c548',
						color: 'white'
					}}
					className="menu"
					onClick={showSidebar}
				/>
				<h2>Class App</h2>
			</Nav>
			<SidebarNav sidebar={sidebar}>
				<SidebarWrap>
					{/* <div className="Sidebar"> */}

					<ul className="SidebarList">
						{SideBarData.map((val, key) => {
							return (
								<li
									className="row"
									id={window.location.pathname === val.path ? 'active' : ''}
									key={key}
									onClick={() => {
										window.location.pathname = val.path;
									}}
								>
									{''}
									<div id="icon">{val.icon} </div>
									{''}
									<div id="title">{val.title}</div>
								</li>
							);
						})}
					</ul>
					{/* </div> */}
				</SidebarWrap>
			</SidebarNav>
		</>
	);
};

export default SideBar;
