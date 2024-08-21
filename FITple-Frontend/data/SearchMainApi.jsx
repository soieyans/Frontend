const localhost = "http://localhost:3000";

export const searchMain = async (category, clothId, size) => {
  try {
    const url = new URL(`${localhost}/FITple/search/main`);

    // 쿼리 파라미터 추가
    if (category !== undefined) url.searchParams.append("category", category);
    if (clothId !== undefined) url.searchParams.append("clothId", clothId);
    if (size !== undefined) url.searchParams.append("size", size);

    console.log("url", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("검색 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
