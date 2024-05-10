import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg'
function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className='left-content'>
                <div className='left-text-container'>
                    <h1>Smart banking for freelancer</h1>
                    <p className='white'>
                        Do adipisicing et adipisicing et proident mollit culpa. Ea laborum aliquip sint elit laboris velit elit veniam. Consequat Lorem consequat veniam pariatur laborum consequat occaecat non et voluptate voluptate.
                    </p>
                    <SecondaryButton name={'Register Now'} />
                </div>
            </div>
            <div className='right-content'>
                <img src={phone} alt="" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top:3rem;
    .left-content{
        display: flex;
        align-items: center;
        padding-right:3rem;
        h1{
            font-size: 4rem;
            font-weight: 600;
        }
        .white{
            padding:1.4rem 0;
            line-height: 1.8rem
        }
    }
    .right-content{
        position:relative;
    }
`;

export default HeaderContent