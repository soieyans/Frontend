// closetApi.js

export const deleteCloth = async (clothId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/FITple/my/closet/${clothId}/modify`,
      {
        method: "DELETE",
        credentials: "include", // 세션 쿠키 포함
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the cloth");
    }

    return response.json(); // 성공 시 응답 데이터를 반환
  } catch (error) {
    console.error("Error deleting cloth:", error);
    throw error; // 에러 발생 시 호출하는 곳에서 처리하도록 던짐
  }
};
