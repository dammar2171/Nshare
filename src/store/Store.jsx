import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const {
    data: noteData,
    loading: noteLoading,
    error: noteError,
  } = useFetch("http://localhost:5000/user/fetchNotes");
  const {
    data: quizData,
    loading: quizLoading,
    error: quizError,
  } = useFetch("http://localhost:5000/user/fetchQuizs");
  const {
    data: noticeData,
    loading: noticeLoading,
    error: noticeError,
  } = useFetch("http://localhost:5000/user/fetchNotices");
  return (
    <StoreContext.Provider
      value={{ notes: noteData, quizs: quizData, notices: noticeData }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
