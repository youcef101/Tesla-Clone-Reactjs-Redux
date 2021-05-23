import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model x"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/solar-panel.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Solar for New Roofs"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/solar-roof.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Accessories"
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/accessories.jpg"
                leftBtnText="custom order"

            />


        </Container>
    )
}

export default Home
const Container = styled.div`
height:100vh;
overflow-x:hidden;


`

