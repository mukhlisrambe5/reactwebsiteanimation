import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import lines from '../img/lines.svg'
import questions from '../questions'
import Question from './Question'
function FAQSection() {
  return (
    <FaqStyled>
        <InnerLayout>
            <h3 className='small-heading'>Frequently <span>asked questions</span></h3>
            <p className='c-para'>
                Occaecat eiusmod ullamco adipisicing reprehenderit quis enim enim elit fugiat non incididunt labore exercitation sunt. Proident reprehenderit consectetur qui cillum exercitation aute officia pariatur anim laborum irure pariatur cupidatat. Mollit reprehenderit culpa voluptate in dolor cillum ex adipisicing Lorem consectetur laborum enim pariatur laborum. Id elit anim veniam dolore laborum cillum proident. Adipisicing duis nostrud pariatur mollit occaecat excepteur veniam. Consectetur id qui ea excepteur aute adipisicing cupidatat aliquip ipsum ea. Non exercitation sunt proident officia aute in excepteur id proident nostrud cupidatat.
            </p>
            <div className="lines">
                <img src={lines} alt=''/>
            </div>
            <div className="questions-con">
                {
                    questions.map((q)=>{
                        return <Question key={q.id} {...q} />
                    })
                }
            </div>
        </InnerLayout>
    </FaqStyled>
  )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .question-con{
        padding-top:4rem;
    }
    .lines{
        position:absolute;
        left: 0;
        top:300%;
        width:100%;
        z-index:-1;
        img{
            width:100%;
        }
    }
`

export default FAQSection