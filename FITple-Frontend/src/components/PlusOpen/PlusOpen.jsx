import { PlusOpenButton, PlusOpenButtons } from "./PlusOpen.style";
import { useNavigate } from "react-router-dom";

const PlusOpen = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/clothregister");
  };
  return (
    <PlusOpenButtons>
      <PlusOpenButton onClick={handleNavigate}>직접 등록하기</PlusOpenButton>
      <PlusOpenButton>검색하기</PlusOpenButton>
    </PlusOpenButtons>
  );
};

export default PlusOpen;
