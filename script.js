function calculatePythagorean() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
 
    if (isNaN(sideA) || isNaN(sideB)) {
      alert('Пожалуйста, введите числа для обеих сторон.');
      return;
    }
 
    const hypotenuse = pythagoreanTheorem(sideA, sideB);
 
    document.getElementById('result').innerText = `Гипотенуза (сторона C): ${hypotenuse}`;
  }
 
  function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }