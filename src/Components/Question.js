import React, {useState} from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'
function Question({title, description}) {
    const [toggle, setToggle] = useState(false)
    const btnToggler= ()=>{
        setToggle(!toggle)
    }
    return (
    <QuestionStyled>
        <div className="q-con">
            <div className="toggle-title">
            <h4>{title}</h4>
            <button onClick={btnToggler}>
                {toggle ? <img src={minus} alt=''/> : <img src={plus} alt=''/>}
            </button>
            </div>
            {toggle && <p>{description}</p>}
        </div>
    </QuestionStyled>
  )
}

const QuestionStyled= styled.div`
    background-color: #fff;
    padding: 1rem 1rem;
    margin:1rem 0;
    border-radius: 24px;
    transition: all .4s ease-in-out;
    box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
    h4{
        transition: all .4s ease-in-out;
        color:#16194F;
        font-size: 1.3rem;
    }
    .toggle-title{ 
        display:flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        button{
            background:transparent;
            outline: none;
            border: none;
        }
    }
`

export default Question