// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }
    li {
        list-style: none;
    }

    body {
        background-color: #0d0d0d;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
    }
    header{
        background-color: #252cf5;
    }

    /* Geral */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        background-color: #fff;
    }
    .card-body-200 {
        width: 300px;
    }

    /* Header */
    .head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
    .menu ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .menu ul li {
        padding: 10px;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #fff;
    }

    /* Listagem */
    .search {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        margin:0 auto;
        padding: 20px 0 20px 0;
        background-color: #ffffff;
        /*Sombra somente bottom*/
    }
    .search input {
        width: 300px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
    }
    .search button {
        width: 100px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
    }
    
    .list-cards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: auto;
        margin:0 auto;
        padding: 20px 0 20px 0;
        background-color: #f2f2f2;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 380px;
        align-items: center;
        margin:0 10px 30px 0;
        padding: 20px 0 30px 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.25); 
    }
    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        width: 80%;
        height: 30px;
        padding: 20px 0 20px 0;
        background-color: #fff;
        border-radius: 4px;
    }

    .card-header p button{
        font-size: 25px;
        font-weight: 400;
        text-align: left;
        color: #333;
        cursor: pointer;
        background-color: #fff;
        border: 0px;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        margin: 0 30px 0 30px;
        padding: 0px 0 20px 0;
        background-color: #fff;
        border-radius: 4px;
    }
    .card-body img {
        width: 80px;
        height: auto;
        border-radius: 4px;
    }
    .card-body h3 {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
        margin: 20px 0 0 0;
    }
    .card-body h5 {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
    }

    /* Cadastrar */
    .form-cadastrar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        margin:0 auto;
        padding: 20px 0 20px 0;
    }
    
    .list-cards h1 {
        color: #333;
        text-align: center;
        margin: 0 auto 0 auto;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin:0 auto;
        border-radius: 4px;

    }
    .form-group label {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left !important;
        color: #333;
        margin: 20px 0 0 0;
    }
    .form-group input {
        width: 300px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
        background-color: #eff0f1;
    }
    .form-group textarea {
        width: 300px;
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        color: #333;
        background-color: #eff0f1;
    }
    .form-group button {
        width: 100px;
        height: 40px;
        border-radius: 8px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        color: #fff;
        margin-top: 30px;
        background-color: #6cc52d;
        border: 0px;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.25);
        cursor: pointer;
    }
`;
 
export default GlobalStyle;