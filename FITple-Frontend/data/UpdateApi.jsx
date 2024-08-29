const updateCloth = async (clothId, updatedData) => {
  try {
    const response = await fetch(
      `http://localhost:3000/FITple/my/closet/${clothId}/modify`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 등의 인증 정보 포함
        body: JSON.stringify(updatedData), // 수정할 데이터
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update the cloth information");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating cloth information:", error);
    throw error; // 필요에 따라 에러 처리
  }
};
export default updateCloth;
