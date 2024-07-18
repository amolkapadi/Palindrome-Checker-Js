document.getElementById('check-btn').addEventListener('click', checkPalindrome);

function checkPalindrome() {
  const inputText = document.getElementById('input-text').value;
  const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');
  const result = (cleanedText === reversedText) ? 'This is a palindrome!' : 'This is not a palindrome.';
  document.getElementById('result').textContent = result;
}
