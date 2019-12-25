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

export const NavItem = styled.div`
    line-height: 58px;
    color: #333;
    padding: 0 15px;
    cursor: pointer;
    &.left {
        float: left;
        &:hover {
            background-color: #f5f5f5;
        }
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
        &:hover {
            background-color: #fff;
        }
    }
`
export const Input = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    margin-left: 20px;
    box-sizing: border-box;
    padding: 0 40px 0 20px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    margin-top: 10px;
    transition: width 0.2s;
    transition-delay: 0.1s;
    color: #777;
    &.slider-enter {
        transition: all 0.2s;
        transition-delay: 0.1s;
    }
    &.slider-enter-active {
        width: 280px;
    }
    &.slider-exit {
        transition: all 0.2s;
        transition-delay: 0.1s;
    }
    &.slider-exit-active {
        width: 240px;
    }
    &.focused {
        width: 280px;
    }
    &::placeholder {
        color: #999
    }
    &+.iconfont {
        position: relative;
        left: -27px;
        &.focused {
            background: #999;
            color: #fff;
            padding: 5px;
            border-radius: 50%;
            left: -33px;
        }
    }
`

export const BtnItem = styled.button`
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    user-select: none;
    &.sign-up {
        float: right;
        width: 80px;
        height: 38px;
        line-height: 24px;
        margin: 9px 5px 0 15px;
        border: 1px solid rgba(236,97,73,.7);
        border-radius: 20px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
        &.item-enter {
            opacity: 0;
        }
        &.item-enter-active {
            opacity: 1;
            transition: opacity 500ms;
        }
        &.item-exit {
            opacity: 1;
        }
        &.item-exit-active {
            opacity: 0;
            transition: opacity 500ms;
        }
        &:hover {
            color: #ec6149;
            border-color: #ec6149;
            background-color: rgba(236,97,73,.05);
}
    }
    &.write-btn {
        float: right;
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
        &:hover {
            color: #fff;
            background-color: #ec6149;
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