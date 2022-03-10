import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ()=>{
    return(
        <FooterContainer className='center'>
            <FooterLinkSectionContainer>
                <FooterLinkList className='center'>
                    <FooterLinkListItem>
                        <FooterLinks className='center'>
                            <FaFacebookF></FaFacebookF>
                        </FooterLinks>
                    </FooterLinkListItem>
                    <FooterLinkListItem>
                        <FooterLinks className='center'>
                            <FaTwitter></FaTwitter>
                        </FooterLinks>
                    </FooterLinkListItem>
                    <FooterLinkListItem>
                        <FooterLinks className='center'>
                            <FaInstagram></FaInstagram>
                        </FooterLinks>
                    </FooterLinkListItem>
                </FooterLinkList>
            </FooterLinkSectionContainer>
            <FooterCopyRightSectionContainer>
                <FooterCopyRight>
                &copy; Copyright Ping. All rights reserved.
                </FooterCopyRight>
            </FooterCopyRightSectionContainer>
        </FooterContainer>
    );
};
const FooterContainer = styled.footer`
    display:flex;
    flex-direction:column;
`;
const FooterLinkSectionContainer= styled.section``;
const FooterLinkList =styled.ul`
    margin:0;
    padding:0;
    list-style-type: none;
    display:flex;
`;
const FooterLinkListItem = styled.li`
    font-size:.75em;
    margin:0px 10px 0px 10px;
    padding:10px;
    color:hsl(223, 87%, 63%);
    border: 1px solid hsl(223, 100%, 88%);
    border-radius:25px;
    &:hover{
        background-color:hsl(223, 87%, 63%);
        color:white;
        cursor:pointer;
    }
`;
const FooterLinks=styled.a``;
const FooterCopyRightSectionContainer= styled.section``;
const FooterCopyRight=styled.h3`
    font-size:.6em;
    font-family: 'Libre Franklin', sans-serif;
    color: hsl(0, 0%, 59%);
    font-weight:300;
`;

export default Footer;