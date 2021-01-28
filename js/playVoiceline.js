const button = document.querySelector('.operator__voice');

const playVoiceline = () => {
  const buttonContent = button.textContent.trim().split(' ');
  const audio = new Audio();

  switch (buttonContent[1]){
    case 'Amiya': 
      audio.src = '../assets/sounds/amiya.mp3';
    break;
    case 'Thorns': 
      audio.src = '../assets/sounds/thorns.mp3';
    break;
    case 'Mountain': 
      audio.src = '../assets/sounds/mountain.mp3';
    break;
    case 'Surtr': 
      audio.src = '../assets/sounds/surtr.mp3';
    break;
  }

  audio.currentTime = 0;

  audio.play();
};

button.addEventListener('click', playVoiceline);