import styled from 'styled-components'

export const UserInfoPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
    padding-bottom: 40px;
`;

export const MainText = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const SubText = styled.p`
    font-size: 17px;
    margin-bottom: 30px;
`;

export const Container = styled.div`
    height: 135px;
`;

export const InfoContainer = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 10px 40px;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-top: 10px;
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
    padding-left: 20px;
`;

export const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 80%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

export const GenderWrapper = styled.div`
    width: 84%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const GenderButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 10px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export const FitWrapper = styled.div`
    width: 84%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const FitButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export const StyleWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const StyleButton = styled.button`
    width: 160px;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;
    margin: 5px;

    &:focus {
        outline: none;
    }
`;

export const BodyInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
`;

export const BodyInputWrapper = styled.div`
    position: relative;
    width: 90%;
    margin-top: 10px;
    margin-bottom: 23px;
`;

export const BodyInputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 40px 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
    text-align: right;
    box-sizing: border-box;
`;

// 단위 텍스트를 스타일링하는 컴포넌트
export const UnitText = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1
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