import {
  DeletePopup,
  DeletePopupBack,
  DeletePopupDelete,
  DeletePopupText,
  PopupButtonContainer,
} from "./DeletePopUp.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCloth } from "../../../data/DeleteApi";
const DeletePopUp = ({ clothId, onClose }) => {
  console.log("Received clothId:", clothId);
  const navigate = useNavigate();
  const handlePopupback = () => {
    onClose();
  };
  const [popupdelete, setPopupdelete] = useState(false);
  const handlePopupdelete = async () => {
    setPopupdelete(!popupdelete);

    try {
      await deleteCloth(clothId);
      alert("옷이 성공적으로 삭제되었습니다.");
      navigate("/cloth");
    } catch (error) {
      console.error("Error deleting cloth:", error);
      alert("옷 삭제에 실패했습니다.");
    }
  };
  return (
    <DeletePopup>
      <DeletePopupText>정말 삭제하시겠습니까?</DeletePopupText>
      <PopupButtonContainer>
        <DeletePopupBack onClick={handlePopupback}>뒤로가기</DeletePopupBack>
        <DeletePopupDelete onClick={handlePopupdelete}>
          삭제하기
        </DeletePopupDelete>
      </PopupButtonContainer>
    </DeletePopup>
  );
};
export default DeletePopUp;
