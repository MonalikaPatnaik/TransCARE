import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: linear-gradient(114.9deg, rgb(14 16 39) 8.3%, rgb(16 122 175) 41.6%, rgb(4 70 102) 93.4%);
    white-space: nowrap;
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 2px solid #52B2CF;
    box-shadow: 0 3px 0 black, 0px 3px 6px #fff;
    // Issue #1: Type in cursor spelling was there earlier
    // Issue #1 Fixed: Corrected the spelling of cursor.
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);transition: 0.7s;

    &:hover {
        background: #52B2CF;
        border: 2px solid #d4afb9 , 0px 4px 6px #fff; 
      
        box-shadow: 0 0  #d4afb9 ;
    }
`
