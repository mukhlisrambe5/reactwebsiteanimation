import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4  from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'
import bgCircles from '../img/circleBg.svg'
function MessagingSection() {
  return (
    <MessageStyle>
        <InnerLayout>
            <div className='message-con'>
                <div className='left-items'>
                    <h2 className='secondary-heading'>
                        We support you in 5 different languages
                    </h2>
                    <p className='m-paragraph'>Proident tempor ad dolore Lorem. Reprehenderit in duis eu exercitation reprehenderit aliquip tempor proident exercitation id reprehenderit. Excepteur exercitation duis enim ullamco enim enim ea consequat sint qui Lorem quis eiusmod. Eiusmod cupidatat incididunt nulla ullamco mollit tempor ad mollit velit non culpa ut. Labore aute non velit proident. Minim tempor nisi elit aute aliquip ullamco mollit reprehenderit exercitation.</p>
                    <div className='images-con'>
                        <img src={avatar1} className='image-1' alt='' />
                        <img src={avatar2} className='image-2' alt='' />
                        <img src={avatar3} className='image-3' alt='' />
                        <img src={avatar4} className='image-4' alt='' />
                        <img src={avatar5} className='image-5' alt='' />                       
                        <p>&nbsp; +25</p>
                        <img src={bgCircles} alt="" className='bgCircle' />

                    </div>
                </div>
                <div className='right-items'>
                    <img src={messaging} alt="" /> 
                    <img src={bgCircles} alt="" className='bgCircle' />
                </div>
            </div>
        </InnerLayout>
    </MessageStyle>
  )
}

const MessageStyle = styled.section`
.message-con{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width:1347px){
        grid-template-columns: repeat(1, 1fr);
    }
}
.left-items{
    position:relative;
    padding-right: 2rem;
    .m-paragraph{
        padding: 1rem 0;
    }
    .images-con{
        display:flex;
        align-items: center;
        .image-2, .image-3, .image-4, .image-5{
            margin-left: -22px;
        }
    }
    .bgCircle{
        position: absolute;
        top: -10%;
        left: -10%;
        z-index:-1;
    }
}
.right-items{
    position: relative;
    img{
        padding-left:2rem;
    }
    .bgCircle{
        position: absolute;
        bottom: -7%;
        right: 0;
        z-index:-1;
    }
}
`

export default MessagingSection