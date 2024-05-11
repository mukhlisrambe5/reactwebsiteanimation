import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import card from '../img/creditcard.svg'
function CardSection() {
  return (
    <CardSectionStyled>
        <InnerLayout>
            <div className='card-container'>
            <div className='card-left'>
                <h2 className='secondary-heading'>
                    One card for all your payment
                </h2>
                <p>
                    Ipsum ipsum sint dolore eu adipisicing occaecat aliquip culpa id. Proident labore Lorem nisi ut cupidatat. Quis reprehenderit nisi ad voluptate laboris enim reprehenderit adipisicing. Laborum nisi culpa deserunt ad culpa in anim minim velit reprehenderit culpa ea. Occaecat magna reprehenderit nulla anim laboris excepteur id pariatur nostrud. Commodo eiusmod cupidatat ut sint sunt ut quis.
                </p>
            </div>
            <div className='card-right'>
                <img src={card} alt='' />
            </div>
            </div>
        </InnerLayout>
    </CardSectionStyled>
  )
}
const CardSectionStyled = styled.section`
    .card-container{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .card-right{
        display:flex;
        justify-content: flex-end;
    }
    .card-left{
        p{
            padding: 1rem 0 ;
        }
    }
`

export default CardSection