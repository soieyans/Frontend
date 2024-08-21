import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import PlusOpen from "../../components/PlusOpen/PlusOpen";
import {
  ProductDetail,
  ProductImage,
  ProductItem,
  ProductName,
  ProductBrand,
  ProductContainer,
  Parent,
  FilledHeart,
  Imgcontainer,
  PLUSbutton,
  EditButtons,
  EditButton,
  ClothdebarContainer,
  Clothdebar,
  LoadMoreButton,
  SerchContainer,
  SearchIcon,
  SearchBar,
  SerchTitle,
  SerchTitleContainer,
  SerchTitle2, // 더보기 버튼 스타일 추가
} from "./ClothmainPage.style";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";

const ClothmainPage = () => {
  const localhost = "http://localhost:3000";
  const [data, setData] = useState([]);
  const [token, setToken] = useState(""); // 토큰 상태 추가
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [isEdit, setIsEdit] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [cursorId, setCursorId] = useState(null); // Cursor for pagination
  const [hasMore, setHasMore] = useState(true); // 더 로드할 데이터가 있는지 여부

  // 토큰을 가져오는 함수
  const fetchToken = async () => {
    try {
      const response = await fetch(`${localhost}/temp-token`, {
        method: "POST", // POST 요청
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // 필요하다면, 요청 본문에 데이터를 추가
          client_id: "your-client-id",
          client_secret: "your-client-secret",
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch token");
      }
      const data = await response.json();
      setToken(data.token); // 가져온 토큰을 상태에 저장
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  // Fetch data from the API
  const fetchData = async (
    category = "",
    clothId = "",
    cursor = "",
    size = 8
  ) => {
    try {
      const query = new URLSearchParams();
      if (category) query.append("category", category);
      if (clothId) query.append("clothId", clothId);
      if (size) query.append("size", size);
      if (cursor) query.append("cursorId", cursor);

      const response = await fetch(
        `${localhost}/FITple/my/closet/main?${query.toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      // Check if 'data' and 'closetData' are present in the result
      if (result && result.data && result.data.closetData) {
        if (cursor) {
          // If cursor exists, append new data
          setData((prevData) => [...prevData, ...result.data.closetData]);
        } else {
          // If no cursor, replace data
          setData(result.data.closetData);
        }
        setCursorId(result.data.cursorId); // Update cursorId for pagination
        setHasMore(result.data.closetData.length > 0); // If no more data, stop pagination
      } else {
        console.error("Unexpected response structure:", result);
        if (!cursor) setData([]); // Reset data if the structure is unexpected and no cursor
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching cloth data:", error);
      if (!cursor) setData([]); // Reset data in case of an error and no cursor
      setHasMore(false);
    }
  };

  // Handle category selection
  const filterDataByCategory = (category) => {
    setCurrentCategory(category);
    setCursorId(null); // Reset cursor when changing category
    fetchData(category);
  };

  // Toggle the edit state for a specific item
  const toggleEditState = (index) => {
    setIsEdit((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Handle the deletion of an item
  const handleDelete = () => {
    setIsDeletePopupOpen(true);
  };

  // Toggle the visibility of the delete confirmation popup
  const toggleDeletePopup = () => {
    setIsDeletePopupOpen((prev) => !prev);
  };

  // Load more data when the "Load More" button is clicked
  const loadMoreData = () => {
    if (hasMore) {
      fetchData(currentCategory, null, cursorId);
    }
  };

  // Fetch token on mount and then fetch data
  useEffect(() => {
    fetchToken().then(() => {
      fetchData(currentCategory);
    });
  }, [currentCategory]);

  return (
    <Parent>
      <SideBar onCategoryClick={filterDataByCategory} />

      <ProductContainer>
        <SerchContainer>
          <SerchTitleContainer>
            <SerchTitle>내 옷</SerchTitle>
            <SerchTitle2>을 검색해보세요.</SerchTitle2>
          </SerchTitleContainer>
          <SearchIcon />
          <SearchBar placeholder="" />
        </SerchContainer>
        {data.map((item, index) => (
          <ProductItem key={item.clothid}>
            <Imgcontainer>
              <ProductImage
                image={`../../assets/${item.cloth_name}_${item.cloth_id}.jpg`}
              />
              {item.likes > 0 && <FilledHeart />}
            </Imgcontainer>

            <ProductBrand>{item.brand}</ProductBrand>
            <ClothdebarContainer onClick={() => toggleEditState(index)}>
              <Clothdebar />
              <Clothdebar />
              <Clothdebar />
              {isEdit[index] && (
                <EditButtons>
                  <Link to="/clothupdate">
                    <EditButton>옷 정보 수정하기</EditButton>
                  </Link>
                  <EditButton onClick={handleDelete}>
                    옷 정보 삭제하기
                  </EditButton>
                </EditButtons>
              )}
            </ClothdebarContainer>

            <ProductName>{item.cloth_name}</ProductName>

            <ProductDetail>
              {item.size}•{item.fit}
            </ProductDetail>
          </ProductItem>
        ))}
        <PLUSbutton onClick={() => setIsPlusOpen((prev) => !prev)}>
          {isPlusOpen && <PlusOpen />}
        </PLUSbutton>
      </ProductContainer>

      {hasMore && (
        <LoadMoreButton onClick={loadMoreData}>더보기</LoadMoreButton>
      )}

      {isDeletePopupOpen && (
        <Modal
          isOpen={isDeletePopupOpen}
          onRequestClose={toggleDeletePopup}
          style={{
            overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
            content: {
              border: "none",
              backgroundColor: "transparent",
              overflow: "hidden",
            },
          }}
        >
          <DeletePopUp onClose={toggleDeletePopup} />
        </Modal>
      )}
    </Parent>
  );
};

export default ClothmainPage;
