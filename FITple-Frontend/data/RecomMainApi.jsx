// export const RecomMainApi = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/FITple/my/closet/main', {
//       method: 'GET',
//       credentials: 'include', // 쿠키를 포함하여 요청합니다.
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json(); // 응답을 JSON으로 변환합니다.
//     console.log(data); // 데이터 출력
//     return data; // 필요에 따라 데이터를 반환합니다.
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// };

export const RecomMainApi = async () => {
  try {
    const response = await fetch('/TestData/UserTestData.json', { // JSON 파일의 경로를 설정합니다.
      method: 'GET',
      credentials: 'include', // 쿠키를 포함하여 요청합니다.
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // 응답을 JSON으로 변환합니다.
    console.log(data); // 데이터 출력
    return data; // 필요에 따라 데이터를 반환합니다.
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

