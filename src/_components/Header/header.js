import {Link} from "react-router-dom"
import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
display:flex;
justify-Content: space-around;
color: blue;
background: lightgray;
a {
    font-size:20px;
}
`

function Header() {
    return (
        <HeaderSection>
            <Link to='/' > HomePage</Link>
            <Link to='/listofcards' > SupportedCards</Link>
            <Link to="/login">Logout</Link>
        </HeaderSection>
    )
}
export default Header