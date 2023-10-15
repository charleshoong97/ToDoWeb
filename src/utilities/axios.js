import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YWY0YzEyMC1lODBhLTRjOTAtYjA4Ny1hMDU5OTQ0ZjQyNWEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE3NGU0ZjE3LTVhMmItNDZkZi1iN2U1LTBjMzE4MzYyYTA0ZiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJuYmYiOjE2OTczNjM0MzgsImV4cCI6MTY5Nzk2ODIzOCwiaXNzIjoiRXZhRnJhbWV3b3JrIiwiYXVkIjoiRXZhRnJhbWV3b3JrIn0.tL1pNYbAYoB3IBHWOgFFmvdZGFtV4s3t76CQE9ifzoM";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

Axios.interceptors.response.use(
  (response) => {
    return { error: false, ...response };
  },
  (error) => {
    return {
      error: true,
      message: error.response.data.message,
    };
  }
);
