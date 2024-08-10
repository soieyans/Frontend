import styled from 'styled-components'

export const UserInfoPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

export const MainText = styled.p`
    font-size: 28px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
`;

export const SubText = styled.p`
    width: auto;
    text-align: left;
    font-size: 17px;
    color: #0276FE;
    font-weight: 550;
    margin-top: 10px;
`;

export const Container = styled.div`
    height: 135px;
`;

export const InfoContainer = styled.div`
    width: 55%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #838383;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 40px 0px;
    align-items: center;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-left: -30px;
`;

export const TextWrapper = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const InputWrapper = styled.div`
    width: 78%;
    display: flex;
    flex-direction: column;
`;

export const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
    }))`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #838383;
    border-radius: 8px;
    background-color: white;
    padding: 10px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

export const GenderWrapper = styled.div`
    width: 105%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const GenderButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #838383')};
    border-radius: 10px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;
    font-size: 15px;
    &:focus {
        outline: none;
    }
`;

export const FitWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const FitButton = styled.button`
    width: auto;
    padding: 10px 20px;
    border: 1px solid #0276FE;
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;
    font-size: 12px;
    &:focus {
        outline: none;
    }
`;

export const StyleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const StyleButton = styled.button`
    width: auto;
    padding: 10px 20px;
    border: 1px solid #0276FE;
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;
    margin: 5px;
    font-size: 12px;
    &:focus {
        outline: none;
    }
`;

export const BodyInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`;

export const InputSet = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 10px;
`;

export const BodyInputWrapper = styled.div`
    width: auto;
    position: relative; 
    margin-top: 10px;
`;

export const BodyInputBox = styled.input.attrs(props => ({
        type: props.type || 'text',
        id: props.id,
        placeholder: props.placeholder 
    }))`
    width: 350px;
    height: 50px;
    border: 1px solid #838383;
    border-radius: 8px;
    background-color: white;
    padding: 10px 40px;
    font-size: 17px;
    outline-color: #0075FF;
    text-align: right;
    box-sizing: border-box;
`;

export const UnitText = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    pointer-events: none;
`;

export const SubmitButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
`;
