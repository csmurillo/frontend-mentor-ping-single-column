import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageSection = ()=>{
    return(
        <ImageSectionContainer className='center'>
            <ImageSectionWrapper>
                <Image src='/images/illustration-dashboard.png' width='1000px' height='1000px'></Image>
            </ImageSectionWrapper>
        </ImageSectionContainer>
    );
};
const ImageSectionContainer= styled.div``;
const ImageSectionWrapper =styled.h2`
    padding-top:20px;
    padding-bottom:20px;
    margin-bottom:100px;
    & img{
        width:350px !important;
        height: 220px !important;
    }
    @media (min-width: 768px){
        margin-bottom:50px;
        & img{
            width:550px !important;
            height: 360px !important;
        }
    }
`;

export default ImageSection;