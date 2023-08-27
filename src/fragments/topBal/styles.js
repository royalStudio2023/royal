import styled from "styled-components";


export const StyledStyles = styled.div`
  .language-button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }

  .active-language {
   
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    
    img{
      width: 24px;
      height: 24px;
    }
   
    
    p{
    
      margin: 0 8px;
    }
  }

  .language-more {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }

  .MuiPopover-paper {
    background: red !important;
  }

  .select-language {
    width: 143px;
    display: flex;
    align-items: center;
    padding: 12px 15px;

    //background: #FF453A;
    div {
      width: 143px;
      display: flex;
      align-items: center;
      padding: 12px 15px;

      p {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #2A374E;
        margin-left: 8px;
      }

      img {
        margin-right: 8px;
      }
    }
  }


`;