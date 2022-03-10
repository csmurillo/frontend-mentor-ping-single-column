import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';

const IntroSection = ()=>{

    const [email,setEmail]=useState();
    const [error,setError]=useState();

    const emailForm = (e)=>{
        e.preventDefault();
        const isValidEmail=EmailValidator.validate(email);
        if(!isValidEmail){
            console.log('error');
            setError(true);
        }
    };
    const emailOnChange = (e) =>{
        const {name,value}=e.target;
        setEmail(value);
        setError(false);
      }
    const emailOnBlur = (e)=>{
        setError(false);
    };
    return(
        <IntroSectionContainer>
            <IntroSectionWrapper>
                <IntroSectionLogoContainer className='center'>
                    <IntroSectionLogo>
                        <Image src='/images/logo.svg' width="86" height="26"></Image>
                    </IntroSectionLogo>
                </IntroSectionLogoContainer>
                <IntroSectionLaunchSoonMessageContainer className='center'>
                    <IntroSectionLaunchSoonMessage>
                        We are launching <span>soon!</span>
                    </IntroSectionLaunchSoonMessage>
                </IntroSectionLaunchSoonMessageContainer>
                <IntroSectionSubscribeMessageContainer className='center'>
                    <IntroSectionSubscribeMessage>
                        Subscribe and get notified
                    </IntroSectionSubscribeMessage>
                </IntroSectionSubscribeMessageContainer>
                <IntroSectionFormGroupContainer className='center'>
                    <FormGroup onSubmit={emailForm} noValidate>
                        <InputContainer>
                            <InputBox error={error} name='email' onBlur={emailOnBlur} onChange={emailOnChange} placeholder='Your email address...'></InputBox>
                            {error&& <InputBoxError>Please provide a valid email address</InputBoxError>}
                        </InputContainer>
                        <ButtonContainer>
                            <Button type='submit'>Notify Me</Button>
                        </ButtonContainer>
                    </FormGroup>
                </IntroSectionFormGroupContainer>
            </IntroSectionWrapper>
        </IntroSectionContainer>
    );
};

const IntroSectionContainer = styled.section`
    width:100%;
    padding-top:15px;
    font-family: 'Libre Franklin', sans-serif;
`;
const IntroSectionWrapper = styled.div`
    padding:20px;
`;

const IntroSectionLogoContainer = styled.div`
    width:100%;
`;
const IntroSectionLogo = styled.h1`
    padding:40px 0px 40px 0px;
    margin:0;
`;
const IntroSectionLaunchSoonMessageContainer = styled.div``;
const IntroSectionLaunchSoonMessage = styled.h2`
    font-size:1.6em;
    padding:0px;
    margin:0px;
    margin-bottom:10px;
    font-weight:300;
    color:hsl(0, 0%, 59%);
    & span{
        color:black;
        font-weight:700;
    }
    @media (min-width: 768px){
        font-size:2.5em;
    }
`;
const IntroSectionSubscribeMessageContainer = styled.div``;
const IntroSectionSubscribeMessage = styled.h3`
    font-weight:400;
    font-size:1.1em;
    color:hsl(0, 0%, 59%);
`;
const IntroSectionFormGroupContainer=styled.div`
    width:100%;
    padding-top:20px;
    padding-bottom:20px;
`;
const FormGroup= styled.form`
    width:390px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
    "InputBox"
    "InputButton";
    @media (min-width: 768px){
        width: 615px;
        grid-template-columns: 70% 2% 28%;
        grid-template-areas:"InputBox . InputButton";
    }
`;
const InputContainer=styled.div`
    grid-area:InputBox;
`;
const InputBox=styled.input`
    font-size:.8em;
    border: ${props=>props.error?'1px solid red':'1px solid hsl(223, 100%, 88%)'};
    width:80%;
    padding:0px 10% 0px 10%;
    height:50px;
    border-radius: 15%/100%;
    margin-bottom:5%;
    &::placeholder{
        color: hsl(223, 100%, 88%);
        font-weight:300;
    }
    &:focus{
        outline:none;
    }
    @media (min-width: 768px){
        border-radius: 10%/90%;
        height:45px;
    }
`;
const InputBoxError =styled.div`
    font-size:.6em;
    color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:-10px;
    padding-bottom:40px;
    @media (min-width: 768px){
        justify-content:unset;
        align-items:unset;
        padding:0;
        margin-top:-10px;
        margin-left:15px;
    }
`;
const ButtonContainer=styled.div`
    grid-area:InputButton;
`;
const Button=styled.button`
    box-shadow: 0 10px 10px hsl(223, 100%, 88%);
    font-size:.7em;
    width:100%;
    padding: 20px 30px;
    border-radius: 15%/100%;
    border: none;
    background-color:hsl(223, 87%, 63%);
    color:white;
    @media (min-width: 768px){
        border-radius: 20%/90%;
        padding:15px 25px;
    }
    &:hover{
        cursor:pointer;
    }
`;


export default IntroSection;