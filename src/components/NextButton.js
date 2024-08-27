// import React from "react";

// export default function NextButton({ dispatch, answer, index, numQuestions }) {
//   if (answer === null) {
//     return null;
//   }

//   if (index < numQuestions - 1) {
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => {
//           dispatch({ type: "nextQuestion" });
//         }}
//       >
//         Next
//       </button>
//     );
//   }

//   if (index === numQuestions - 1) {
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => {
//           dispatch({ type: "finished" });
//         }}
//       >
//         Submit
//       </button>
//     );
//   }

//   return null;
// }


import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const isLastQuestion = index === numQuestions - 1;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        if (isLastQuestion) {
          dispatch({ type: "finish" });
        } else {
          dispatch({ type: "nextQuestion" });
        }
      }}
    >
      {isLastQuestion ? "Submit" : "Next"}
    </button>
  );
}

