import styled from 'styled-components'

export const AppContainer = styled.div`
    color: skyblue;
    font-size: 16px;   
`

export const HeaderWrapper = styled.nav.attrs({ id: 'myNav' })`
    height: 58px;
    border: 1px solid #f0f0f0;
    .width-limit {
        min-width: 768px;
        max-width: 1440px;
        margin: 0 auto;
        a.logo {
            float: left;
            height: 56px;
            padding: 0;
            img {
                height: 100%;
            }
        }
    }
`

export const HeroCon = styled.div`
    color: skyblue;
    font-size: 16px;
    p {
        color: gray
    }
`