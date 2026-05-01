import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [notes, setNotes] = useState();
  const [quizs, setQuizs] = useState();
  const [notices, setNotices] = useState();

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/fetchNotes",
        );
        const { data } = response.data;
        setNotes(data);
      } catch (error) {
        console.log("FETCHING_ERROR:", error);
      }
    }
    fetchNote();
  }, []);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/fetchQuizs",
        );
        setQuizs(response.data.quizzes);
      } catch (error) {
        console.log("FETCHING_QUIZ_ERROR:", error);
      }
    }
    fetchQuiz();
  }, []);

  useEffect(() => {
    async function fetchNotice() {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/fetchNotices",
        );
        setNotices(response.data.notices);
      } catch (error) {
        console.log("FETCHING_NOTICE_ERROR:", error);
      }
    }
    fetchNotice();
  }, []);

  return (
    <StoreContext.Provider value={{ notes, quizs, notices }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
