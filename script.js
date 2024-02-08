const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const buttonsContainer = document.querySelector('.options'); 

let noButtonClickCount = 0;

noButton.addEventListener('click', function() {
  // Increment the click count
  noButtonClickCount++;

  // Change the response text
  const responses = [
    "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart"
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  response.textContent = randomResponse;

  // Enlarge the Yes button
  yesButton.style.fontSize = (16 + noButtonClickCount * 20) + 'px';
});
yesButton.addEventListener('click', function() {
    // Change the response text when Yes button is clicked
    response.textContent = "Yay...we are couples now... promise to stay by me always";
    buttonsContainer.style.display = 'none';

    const gifContainer = document.createElement('div');
    gifContainer.innerHTML = '<img src="milk-and-mocha.gif" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">';
  document.body.appendChild(gifContainer);
});