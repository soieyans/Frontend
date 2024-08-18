import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
`;

export const Logo = styled.img`
    height: 40px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    flex: 1;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;
