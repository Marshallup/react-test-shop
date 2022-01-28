import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import useWindowScrollY from 'hooks/windowScrollY';

export default function Header() {
	const [ open, setOpen ] = useState(false);
	const [ posY, setPosY ] = useState(window.scrollY);
	const indexPage = useMatch('/');

	function scrollY(curPos) {
		setPosY(curPos);
	}

	function showDropDown() {
		setOpen(true);
	}

	function hideDropDown() {
		setOpen(false);
	}

	useWindowScrollY(scrollY);

	return (
		<div>
			<Navbar className={`navbar navbar-custom ${posY > 0 ||  !indexPage ? '' : 'navbar-transparent'}`} fixed={'top'}>
				<Container>
					<Navbar.Brand as={Link} to="/">Titan</Navbar.Brand>
					<Navbar.Collapse className="justify-content-end">
						<Nav className="nav navbar-right">
							<Nav.Link as={Link} to={'singleProduct'}>SingleProduct</Nav.Link>
							<NavDropdown
								title="Dropdown"
								id="basic-nav-dropdown"
								show={open}
								onMouseEnter={showDropDown}
								onMouseLeave={hideDropDown}
							>
								<NavDropdown.Item as={Link} to="singleProduct">Action</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}