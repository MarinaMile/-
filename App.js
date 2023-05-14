import React, { useState } from 'react';
import './App.css';

const masters = [
  {
    name: 'Alenin',
    images: [
      './images/alenin1.jpg',
      './images/alenin2.jpg',
      './images/alenin3.jpg',
      './images/alenin4.jpg',
      './images/alenin5.jpg'
    ]
  },
  {
    name: 'Franc',
    images: [
      './images/franc1.jpg',
      './images/franc2.jpg',
      './images/franc3.jpg',
      './images/franc4.jpg',
      './images/franc5.jpg'
    ]
  },
  {
    name: 'Miller',
    images: [
      './images/miller1.jpg',
      './images/miller2.jpg',
      './images/miller3.jpg',
      './images/miller4.jpg',
      './images/miller5.jpg'
    ]
  },
  {
    name: 'Мастер 4',
    images: [
      './images/volgarev1.jpg',
      './images/volgarev2.jpg',
      './images/volgarev3.jpg',
      './images/volgarev4.jpg',
      './images/volgarev5.jpg'
    ]
  }
];

const questions = [
  {
    questionText: 'Вопрос 1',
    answerOptions: [
      { answerText: 'Ответ 1', image: './images/alenin1.jpg' },
      { answerText: 'Ответ 2', image: './images/franc1.jpg' },
      { answerText: 'Ответ 3', image: './images/miller1.jpg' },
      { answerText: 'Ответ 4', image: './images/volgarev1.jpg' }
    ]
  },
  {
    questionText: 'Вопрос 2',
    answerOptions: [
      { answerText: 'Ответ 1', image: './images/alenin2.jpg' },
      { answerText: 'Ответ 2', image: './images/franc2.jpg' },
      { answerText: 'Ответ 3', image: './images/miller2.jpg' },
      { answerText: 'Ответ 4', image: './images/volgarev2.jpg' }
    ]
  },
  {
    questionText: 'Вопрос 3',
    answerOptions: [
      { answerText: 'Ответ 1', image: './images/alenin3.jpg' },
      { answerText: 'Ответ 2', image: './images/franc3.jpg' },
      { answerText: 'Ответ 3', image: './images/miller3.jpg' },
      { answerText: 'Ответ 4', image: './images/volgarev3.jpg' }
    ]
  },
  {
    questionText: 'Вопрос 4',
    answerOptions: [
      { answerText: 'Ответ 1', image: './images/alenin4.jpg' },
      { answerText: 'Ответ 2', image: './images/franc4.jpg' },
      { answerText: 'Ответ 3', image: './images/miller4.jpg' },
      { answerText: 'Ответ 4', image: './images/volgarev4.jpg' }
    ]
  },
  {
    questionText: 'Вопрос 5',
    answerOptions: [
      { answerText: 'Ответ 1', image: './images/alenin5.jpg' },
      { answerText: 'Ответ 2', image: './images/franc5.jpg' },
      { answerText: 'Ответ 3', image: './images/miller5.jpg' },
      { answerText: 'Ответ 4', image: './images/volgarev5.jpg' }
    ]
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerStats, setAnswerStats] = useState({});
  const sortedMasters = masters.sort((a, b) => {
    const aScore = a.images.reduce(
        (total, image) => total + (answerStats[image] || 0),
        0
    );
    const bScore = b.images.reduce(
        (total, image) => total + (answerStats[image] || 0),
        0
    );
    return bScore - aScore;
  });

  const handleAnswerOptionClick = (answerImage) => {
    const newAnswerStats = { ...answerStats };
    newAnswerStats[answerImage] = (newAnswerStats[answerImage] || 0) + 1;
    setAnswerStats(newAnswerStats);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Добавляем проверку на наличие выбранного ответа перед выводом результата
      const allAnswers = Object.values(newAnswerStats);
      if (allAnswers.reduce((total, value) => total + value, 0) === questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert('Пожалуйста, выберите ответ на все вопросы');
      }
    }
  };

  return (
      <div className='app'>
        {currentQuestion === questions.length ? (
            <div className='result'>
              <h2>Результат:</h2>
              <p>Наибольшее количество выборов у мастера:</p>
              <h3>{sortedMasters[0].name}</h3>
              <div className='master_images'>
                {sortedMasters[0].images.map((image) => (
                    <img key={image} src={image} alt='' />
                ))}
              </div>
            </div>
        ) : (
            <div className='question'>
              <h2>{questions[currentQuestion].questionText}</h2>
              <div className='answer_options'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <div
                        key={answerOption.image}
                        className='answer_option'
                        onClick={() => handleAnswerOptionClick(answerOption.image)}
                    >
                      <img src={answerOption.image} alt='' />
                      <p>{answerOption.answerText}</p>
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
}

export default App;




// import React, {useState} from 'react'
// import './App.css';
//
// function App() {
//
//   const questions = [
//     {
//       questionText: 'Что нравится больше?',
//       answerOptions: [
//         {answerImage: '/Users/marina/Documents/masters/alenin1.jpg', isCorrect: true},
//         {answerImage: '/Users/marina/Documents/masters/franc1.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/miller1.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/volgarev1.jpg', isCorrect: false}
//       ]
//
//     },
//     {
//       questionText: 'Что нравится больше?',
//       answerOptions: [
//         {answerImage: '/Users/marina/Documents/masters/alenin2.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/franc2.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/miller2.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/volgarev2.jpg', isCorrect: false}
//       ]
//
//     },
//     {
//       questionText: 'Что нравится больше?',
//       answerOptions: [
//         {answerImage: '/Users/marina/Documents/masters/alenin3.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/franc3.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/miller3.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/volgarev3.jpg', isCorrect: false}
//       ]
//
//     },
//     {
//       questionText: 'Что нравится больше?',
//       answerOptions: [
//         {answerImage: '/Users/marina/Documents/masters/alenin4.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/franc4.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/miller4.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/volgarev4.jpg', isCorrect: false}
//       ]
//
//     },
//     {
//       questionText: 'Что нравится больше?',
//       answerOptions: [
//         {answerImage: '/Users/marina/Documents/masters/alenin5.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/franc5.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/miller5.jpg', isCorrect: false},
//         {answerImage: '/Users/marina/Documents/masters/volgarev5.jpg', isCorrect: false}
//       ]
//
//     }
//
//   ]
//
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [score, setScore] = useState(0)
//   const [showScore, setShowScore] = useState(false)
//   const handleAnswerOptionClick = () => {
//     // Обработчик клика на вариант ответа
//   };
//
//   return (
//     <div className="app">
//       <div className="quizz">
//         <div className="question_section">
//           <div className="question_count">
//             <span> Вопрос {currentQuestion + 1} </span> / {questions.length}
//           </div>
//           <div className="question_text">
//             {questions[currentQuestion].questionText}
//           </div>
//         </div>
//         <div className="answer_section">
//           {questions[currentQuestion].answerOptions.map((answerOption, index) => (
//               <label key={index} className="answer_option">
//                 <input
//                     type="radio"
//                     name="answer"
//                     onClick={handleAnswerOptionClick}
//                 />
//                 <img src={answerOption.answerImage} alt="Answer option" />
//               </label>
//           ))}
//           <button onClick={() => {}}>
//             {currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default App;
