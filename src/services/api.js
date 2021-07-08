import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MjU3NDc0MDY1MjQsImlhdCI6MTYyNTc1MTAwNjUyNH0.ft7q5hCV-TE0UcSekdPIm9fv-aEzEnP6PQ67c06C_KU'
  }
});

export default api;
