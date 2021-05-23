import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/Cars/carsSlice';

function Header() {
    const cars = useSelector(selectCars);
    console.log(cars);
    const [open, setOpen] = useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="/images/logo.svg" />
                </a>
            </Logo>
            <NavMenu>
                {cars &&
                    cars.map(car =>
                        <a href="#">{car.title}</a>
                    )}



            </NavMenu>
            <RightMenu>
                <a href="#">shop</a>
                <a href="#">tesla  account</a>
                <SideMenu onClick={handleDrawerOpen} />
            </RightMenu>

            {open === true ?
                <BurgerNav>
                    <WrapperClose>
                        <CloseButton onClick={handleDrawerClose} />
                    </WrapperClose>
                    {cars &&
                        cars.map(car =>
                            <li><a href="#">{car.title}</a></li>
                        )}

                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">trade-in</a></li>
                    <li> <a href="#">cyber track</a></li>

                </BurgerNav> : null
            }
        </Container>
    )
}

export default Header
const Container = styled.nav`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
z-index:1;
justify-content:space-between;
top:0;
right:0;
left:0;
`
const Logo = styled.div`
display:flex;
align-items:center;
padding:0 16px;

a{
    img{
     width:100px;
     height:13px;
     
    }
}
`
const NavMenu = styled.div`
dispaly:flex;
align-items:center;
@media(max-width:878px){
    display:none;
}




a{  padding:0 10px;
    text-transform:uppercase;
    text-decoration:none;
    font-size:13px;
    font-weight:600;
}

`
const RightMenu = styled.div`
display:flex;
align-items:center;
padding-right:17px;
//margin-right:2vh;


a{  font-weight:600;
    padding:0 5px;
    text-transform:uppercase;
    text-decoration:none;
    font-size:13px;
}

`
const SideMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
display:flex;
flex-direction:column;
width:300px;
background:white;
padding:20px 0;

li{
    list-style-type:none;
    padding:15px 10px;
    cursor:pointer;
    text-transform:uppercase;
    border-bottom:1px solid rgba(0, 0, 0, .2);
    a{ 
        text-decoration:none;
        font-weight:600;
     }
}

`
const CloseButton = styled(CloseIcon)`
cursor:pointer;
margin-right:10px;

`
const WrapperClose = styled.div`
display:flex;
justify-content:flex-end;
`
