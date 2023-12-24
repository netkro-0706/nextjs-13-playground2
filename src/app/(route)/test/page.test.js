const express = require('express');
const app = express();
const port = 3000;

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

app.get('/carousel', async (req, res) => {
  try {
    const part = 'snippet';
    const playlistId = 'PLWTycz4el4t7ZCxkGYyekoP1iBxmOM4zZ';
    const maxResults = '30';

    const response = await fetch(
      `${API_URL}?key=${API_KEY}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}`
    );

    if (response.ok) {
      const data = await response.json();
      res.json({ data });
    } else {
      // 응답이 실패했을 경우, 에러 상태 코드를 클라이언트에 전송합니다.
      res.status(response.status).json({ error: 'API Request Failed' });
    }
  } catch (error) {
    // 에러가 발생한 경우 에러를 클라이언트에 전송합니다.
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
