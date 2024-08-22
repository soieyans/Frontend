const localhost = "http://localhost:3000";

export const login = async (loginId, loginPw) => {
  try {
    const response = await fetch(`${localhost}/FITple/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   추가
      credentials: "include",
      body: JSON.stringify({ user_id: loginId, password: loginPw }),
    });

    return response;
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다.", error);
    throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};


export const findId = async (name, email) => {
    try {
        const response = await fetch(`${localhost}/FITple/auth/find-id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ nickname: name, email: email }),
        });
        
        if (!response.ok) {
            throw new Error('ID 찾기 요청 실패');
        }

        const data = await response.json();
        console.log('받아온 데이터');
        console.log(data.result);
        return data.result;  // { email, name, user_id } 형태로 반환
    } catch (error) {
        console.error("ID 찾기 요청 중 오류가 발생했습니다.", error);
        throw new Error("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
};