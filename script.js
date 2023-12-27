document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
  
    function moveButton(event) {
      const maxX = window.innerWidth - event.target.offsetWidth;
      const maxY = window.innerHeight - event.target.offsetHeight;
      
      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);
      
      event.target.style.left = `${newX}px`;
      event.target.style.top = `${newY}px`;

      var x = Math.random () * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
      var y = Math.random () * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
      document.getElementById('noButton').style.left = '${x}px';
      document.getElementById('noButton').style.top = '${y}px';


    }
  
    noButton.addEventListener('click', function(event) {
      moveButton(event);
    });
  
    yesButton.addEventListener('click', function() {
      window.location.href = 'newpage.html';
    });
  });
  