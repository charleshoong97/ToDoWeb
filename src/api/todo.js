import {
  apiCategory,
  apiCreateToDo,
  apiToDoList,
  apiUpdateToDo,
} from "../constant/api";
import { Axios } from "../utilities/axios";

export const getToDoCategory = async () => {
  let response = await Axios.get(apiCategory);
  if (!response.error) {
    return response.data;
  } else {
    return [];
  }
};

export const getToDoList = async () => {
  let response = await Axios.get(apiToDoList);
  if (!response.error) {
    return response.data;
  } else {
    return [];
  }
};

export const createToDo = async (data) => {
  const currentDateTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  ).toJSON();

  let response = await Axios.post(apiCreateToDo, {
    id: 0,
    taskName: data.label,
    category: data.category,
    isCompleted: false,
    userId: data.userId,
    updatedDate: currentDateTime,
  });

  return response;
};

export const updateExistingToDo = async (data) => {
  const currentDateTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  ).toJSON();

  let response = await Axios.put(apiUpdateToDo + data.id, {
    ...data,
    updatedDate: currentDateTime,
  });

  return response;
};

export const deleteExistingToDo = async (data) => {
  let response = await Axios.delete(apiUpdateToDo + data.id);

  return response;
};
