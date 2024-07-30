import { useState } from 'react';
import { Container } from './ClosetButton.style';
import Icon from "/assets/Closet.svg";
import IconEmpty from "/assets/ClosetEmpty.svg";

function ClosetButton() {
  // 클릭 상태를 관리하는 useState 훅
  const [isClicked, setIsClicked] = useState(false);

  // 클릭 핸들러 함수
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={handleClick}>
      <img src={isClicked ? IconEmpty : Icon} alt="Closet Icon" />
    </Container>
  );
}

export default ClosetButton;