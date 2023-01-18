/*let searchBtn = document.querySelector('.searchBtn');
     let closeBtn = document.querySelector('.closeBtn');
     let searchBox = document.querySelector('.searchBox');*/
     let navigation = document.querySelector('.navigation');
     let menuToggle = document.querySelector('.menuToggle');
     let header = document.querySelector('header');
         
     /*searchBtn.onclick = function(){
         searchBox.classList.add('active');
         closeBtn.classList.add('active');
         searchBtn.classList.add('active');
         menuToggle.classList.add('hide');
         header.classList.remove('open');
     } */
     /*closeBtn.onclick = function(){
         searchBox.classList.remove('active');
         closeBtn.classList.remove('active');
         searchBtn.classList.remove('active');
         menuToggle.classList.remove('hide');
     }*/
     menuToggle.onclick = function(){
         header.classList.toggle('open');
         /*searchBox.classList.remove ('active');
         closeBtn.classList.remove('active');
         searchBtn.classList.remove('active');*/
     }
     const questions = document.querySelectorAll('.faq h2');

questions.forEach(question => {
  question.addEventListener('click', function() {
    const answerId = this.getAttribute('id').replace('question-', 'answer-');
    const answer = document.getElementById(answerId);
    answer.style.display = 'block'; /* affiche la réponse */
  });
});
