import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
    height: 50px;
    background-color: yellow;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
`;

export const Nav = styled.div`
    display: flex;
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;

    li {
        margin: 0 10px;
    }
`;

export const StyledLink = styled(Link)`

`;

function Navigation() {
    return (
        <Wrapper>
        <Nav className="Nav"><h3>Navigation</h3>
            <NavLinks>
                <li><StyledLink to="/Test1">Test1</StyledLink></li>
                <li><StyledLink to="/Test2">Test2</StyledLink></li>
                <li><StyledLink to="/Test3">Test3</StyledLink></li>
            </NavLinks>
        </Nav>
        </Wrapper>
    );
}

export default Navigation;