const button = document.getElementById('opinion-button');
let clicks = 0;

button.addEventListener('click', () => {
  clicks++;

  const feedback =
    clicks === 1
      ? 'See? A button should feel like a button.'
      : [
          'Still satisfying.',
          'The details make the difference.',
          'Yes, I have opinions about this.',
        ][(clicks - 2) % 3];

  document.getElementById('button-feedback').textContent = feedback;
});
