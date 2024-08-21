const localhost = "http://localhost:3000";

export const login = async (loginId, loginPw) => {
  try {
    const response = await fetch(`${localhost}/FITple/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: loginId, password: loginPw }),
    });

    return response;
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
