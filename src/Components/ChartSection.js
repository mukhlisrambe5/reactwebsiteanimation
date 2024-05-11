import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ChartStats from './ChartStats'
import chart from '../img/chart.svg'
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
        .stats{
            .img{
                box-shadow: 0px 25px 50px rgba{22,25,79,0.05};
                border-radius: 50px;
                width: 100%;
            }
            .stats-money{
                display:flex;
                padding-bottom:1.3rem;
            }
        }
    }
}
`

export default ChartSection