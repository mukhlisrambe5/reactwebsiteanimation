import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ChartStats from './ChartStats'
import chart from '../img/chart.svg'
import AnimatedButton from './AnimatedButton'
function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className='chart-con'>
                    <div className='chart-left'>
                        <div className='stats'>
                            <div className='stats-money'>
                            <ChartStats name={'Balance'} amount={'$250'} />
                            <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                            </div>
                            <img src={chart} alt=''/>
                        </div>
                    </div>
                    <div className='chart-right'>
                        <h2 className='secondary-heading'>
                            Manage your finance like a pro in no time
                        </h2>
                        <p>
                            Ad tempor deserunt cupidatat dolore. Irure laboris esse velit id amet nisi irure dolore enim cupidatat anim. Tempor labore nulla nisi occaecat aliqua mollit exercitation. Esse officia exercitation aliqua reprehenderit officia anim labore cillum occaecat velit pariatur. Eu sunt tempor id aliquip velit aute. Enim qui laboris non elit veniam reprehenderit esse consectetur excepteur.
                        </p>
                        <AnimatedButton name={'Learn More'} />
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
.chart-con{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .chart-left{
        width: 80%;
        .stats{
            .img{
                box-shadow: 0px 25px 50px rgba{22,25,79,0.05};
                border-radius: 62px;
                width: 100%;
            }
            .stats-money{
                display:flex;
                padding-bottom:1.3rem;
            }
        }
    }
    .chart-right{
        padding-left: 2rem;
        p{
            padding: 1.3rem 0 ;
        }
    }
}
`

export default ChartSection