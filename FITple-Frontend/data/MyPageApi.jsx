const API_BASE_URL = 'http://localhost:3000';

// 임시 토큰 발급 함수
const fetchToken = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/temp-token`, {
            method: 'POST', // POST 요청
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // 필요한 경우 바디 데이터를 추가
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch token');
        }

        const data = await response.json();
        return data.token; // 가져온 토큰을 반환
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

export const submitUserInfo = async (data, imageFile) => {
    const formData = new FormData();

    // JSON 데이터를 문자열로 변환해서 추가
    formData.append('data', JSON.stringify(data));

    // 이미지 파일 추가
    if (imageFile) {
        formData.append('image', imageFile);
    }

    try {
        // 임시 토큰 발급
        const token = await fetchToken();

        // 사용자 정보 제출
        const response = await fetch(`${API_BASE_URL}/FITple/myprofile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
            credentials: 'include',
        });

        if (!response.ok) {
            if (response.status === 407) {
                console.error('이미 존재하는 닉네임입니다.');
            }
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('submit User Info!');
        console.log(responseData);

        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
