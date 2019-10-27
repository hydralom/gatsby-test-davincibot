import PropTypes from "prop-types"
import React, {useState} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = ({siteTitle}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar fixed="top" dark expand="sm">
            <div className="container">
                <NavbarBrand href="/">{/*<img src={require("../images/logo_dvb.png")} className="image-header"  alt="Logo DVB"/>*/}{siteTitle}</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/articles/">Articles</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/association/">Association</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cdr/">CDR</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/inmoov">InMoov</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/partenaires">Partenaires</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/photos">Photos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
