import React from "react";
import styled from "styled-components";
import Board from "./Board";

const MainContainer = styled.div`
    position: fixed;
    width: 80%;
    height: 100%;

    .color-picker{
        text-align: center;
    }

    .board-container{
        width: 80%;
        height: 80%;
        position: relative;
        top: 8%;
        margin: 1% 5%;
        background: #fff;
    }
`

const Container = () => {
    return(
        <>
            <MainContainer>
                <div className="color-picker">
                    <input type="color"></input>
                </div>

                <div className="board-container">
                    <Board/>
                </div>
            </MainContainer>
        </>
    );
}

export default Container;