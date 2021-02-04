  'use strict';
  
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const otherA = document.querySelector('a');
  const unko = document.querySelector('.unko');

  const quizSet = [
    {q: '目標減量体重は？', c: ['１kg~3kg', '4kg~7kg', '8kg~10kg']},
    {q: '目標減量期間は？', c: ['１,2ヶ月', '3,4ヶ月', '5,6ヶ月']},
    {q: 'どうしてもやりたくないことは？', c: ['筋トレ','有酸素', '食事制限','特になし']}
  ];


  // 変数
  let counter = 0;
  let currentNum = 0;
  let isAnswered;
  let score = 0;
  let c1_Zero = quizSet[0].c[0];
  let c1_One = quizSet[0].c[1];
  let c1_Two = quizSet[0].c[2];

  let c2_Zero = quizSet[1].c[0];
  let c2_One = quizSet[1].c[1];
  let c2_Two = quizSet[1].c[2];

  let c3_Zero = quizSet[2].c[0];
  let c3_One = quizSet[2].c[1];
  let c3_Two = quizSet[2].c[2];
  let c3_Three = quizSet[2].c[3];
  // 変数




  // 回答チェック
  function checkAnswer(li) {
      if (isAnswered) {
        return;
      }
      isAnswered = true;
  
      if(li.textContent === c1_Zero) {
        li.classList.add('good');
        counter = counter + 1;
        }if(li.textContent === c1_One) {
        li.classList.add('great');
        counter= counter + 2;
        }if(li.textContent === c1_Two) {
        li.classList.add('oh_my');
          counter= counter + 3;
        }if(li.textContent === c2_Zero) {
          li.classList.add('good');
          counter = counter + 100;
        }if(li.textContent === c2_One) {
        li.classList.add('great');
          counter = counter + 200;
        }if(li.textContent === c2_Two) {
        li.classList.add('parfect');
          counter = counter + 300;
        }if(li.textContent === c3_Zero) {
          li.classList.add('good');
          counter = counter + 10000;
        }if(li.textContent === c3_One) {
        li.classList.add('great');
          counter = counter + 20000;
        }if(li.textContent === c3_Two) {
        li.classList.add('oh_my');
          counter = counter + 30000;
        }if(li.textContent === c3_Three) {
        li.classList.add('parfect');
          counter = counter + 40000;
        }
  
        console.log(counter);
  
      btn.classList.remove('disabled');
  }
  // 回答チェック




  // クイズまとめ
  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;


    // /前要素消す
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
    // /前要素消す

    const allchoice = quizSet[currentNum].c;
    allchoice.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = '診断結果へ';
    }
  }

  setQuiz();


  // 全ての問題終了
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');
    

    
    if (currentNum === quizSet.length - 1) {
      
      if(counter === 10101) {
        location.href = "sample01.html";
        return;
        }
        if(counter === 10201) { 
          location.href = "sample02.html";
        } 
        if(counter === 10301) { 
          location.href = "sample03.html";
        } 
        if(counter === 20101) { 
          location.href = "sample04.html";
        } 
        if(counter === 20201) { 
          location.href = "sample05.html";
        } 
        if(counter === 20301) { 
          location.href = "sample06.html";
        } 
        if(counter === 30101) { 
          location.href = "sample07.html";
        } 
        if(counter === 30201) { 
          location.href = "sample07.html";
        } 
        if(counter === 30301) { 
          location.href = "sample07.html";
        } 
        if(counter === 40101) { 
          location.href = "sample07.html";
        } 
        if(counter === 40201) { 
          location.href = "sample07.html";
        } 
        if(counter === 40301) { 
          location.href = "sample07.html";
        } 



        if(counter === 10102) { 
          location.href = "sample07.html";
        } 
        if(counter === 10202) { 
          location.href = "sample07.html";
        } 
        if(counter === 10302) { 
          location.href = "sample07.html";
        } 
        if(counter === 20102) { 
          location.href = "sample07.html";
        } 
        if(counter === 20202) { 
          location.href = "sample07.html";
        } 
        if(counter === 20302) { 
          location.href = "sample07.html";
        } 
        if(counter === 30102) { 
          location.href = "sample07.html";
        } 
        if(counter === 30202) { 
          location.href = "sample07.html";
        } 
        if(counter === 30302) { 
          location.href = "sample07.html";
        } 
        if(counter === 40102) { 
          location.href = "sample07.html";
        } 
        if(counter === 40202) { 
          location.href = "sample07.html";
        } 
        if(counter === 40302) { 
          location.href = "sample07.html";
        } 


        if(counter === 10103) { 
          location.href = "sample07.html";
        } 
        if(counter === 10203) { 
          location.href = "sample07.html";
        } 
        if(counter === 10303) { 
          location.href = "sample07.html";
        } 
        if(counter === 20103) { 
          location.href = "sample07.html";
        } 
        if(counter === 20203) { 
          location.href = "sample07.html";
        } 
        if(counter === 20303) { 
          location.href = "sample07.html";
        } 
        if(counter === 30103) { 
          location.href = "sample07.html";
        } 
        if(counter === 30203) { 
          location.href = "sample07.html";
        } 
        if(counter === 30303) { 
          location.href = "sample07.html";
        } 
        if(counter === 40103) { 
          location.href = "sample07.html";
        } 
        if(counter === 40203) { 
          location.href = "sample07.html";
        } 
        if(counter === 40303) { 
          location.href = "sample07.html";
        } 
       
      } else {
      currentNum++;
      setQuiz();
    }
    // 全ての問題終了
  });
  
  // クイズまとめ

  