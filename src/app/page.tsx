"use client"
import { QuestionItem } from "@/components/QuestionItem"
import { questionsList } from "@/data/questions"
import { count } from "console"
import { useState } from "react"

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const title = "Quiz de Culinária"

  const handleAnswered = (answer: number) => {}

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          <QuestionItem question={questionsList[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswered} />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion + 1} de {questionsList.length} pergunta{questionsList.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  )
}
export default Page
