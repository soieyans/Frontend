const localhost = "http://localhost:3000";

export const login = async (loginId, loginPw) => {
  const data = { user_id: loginId, password: loginPw };

  try {
    const response = await fetch(`${localhost}/FITple/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // 성공적인 응답을 JSON으로 반환
      return response;
    } else {
      const errorData = await response.json();
      const errorMessage =
        errorData.message || "로그인 중 오류가 발생했습니다.";
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
