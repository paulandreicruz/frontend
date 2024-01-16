import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export async function registerStudent(data) {
  const response = await Api.post("/register/student", data);
  return response.data;
}

export async function registerTeacher(data) {
  const response = await Api.post("/register/teacher", data);
  return response.data;
}

export async function loginStudent(data) {
  const response = await Api.post("/login/student", data);
  return response.data;
}

export async function loginTeacher(data) {
  const response = await Api.post("/login/teacher", data);
  return response.data;
}

export async function addGrade(grade) {
  const response = await Api.post(`/add-grade`, grade);
  return response.data;
}

export async function getStudenGradeById(id) {
  const response = await Api.get(`/grades/student/${id}`);
  return response;
}

export async function getAllStudents() {
  const response = await Api.get("/students");
  return response.data;
}
