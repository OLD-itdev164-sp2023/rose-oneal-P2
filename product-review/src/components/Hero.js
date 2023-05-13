import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Video from "../assests/videos/"

const Hero = () => {
    return (
        <HeroContanier>
            <HeroBg>
                <VideoBg src="gaming.mp4" type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Gaming Reimagined</HeroH1>
                    <HeroP>Out of this world</HeroP>
                    <Button>Buy Now</Button>
                </HeroItems>
            </HeroContent>
        </HeroContanier>
    )
}

export default Hero

const HeroContanier = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px; //whenever the background is transparent in the header this should be the same as the nav bar height but negative
    color: #fff;
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
`

const VideoBg = styled.video``

const HeroContent = styled.div``
const HeroItems = styled.div``
const HeroH1 = styled.h1``
const HeroP = styled.p``