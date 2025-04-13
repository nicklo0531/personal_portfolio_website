let words = [
    { text: "Python", size: 90 },
    { text: "Pandas", size: 95 },
    { text: "SQL", size: 90 },
    { text: "Matplotlib", size: 85 },
    { text: "Machine Learning", size: 70 },
    { text: "NumPy", size: 70 },
    { text: "HTML", size: 85 },
    { text: "Statistical Methods", size: 85 },
    { text: "Cloud Platforms", size: 60 },
    { text: "Java", size: 60 },
    { text: "Tableau", size: 60 },
    { text: "problem-solving", size: 90 },
    { text: "responsibility", size: 95 },
    { text: "communication", size: 95 },
    { text: "leadership", size: 90 },
    { text: "creativity", size: 85 },
    { text: "teamwork", size: 90 }
  ];
  
  let container = document.getElementById('bubbleContainer');
  
  words.forEach(word => {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerText = word.text;
  
    let size = word.size;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.fontSize = `${size / 5}px`;
  
    let maxLeft = container.clientWidth - size;
    let maxTop = container.clientHeight - size;
    let left = Math.random() * maxLeft;
    let top = Math.random() * maxTop;
  
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
  
    container.appendChild(bubble);
  });

  document.getElementById("colorPicker").addEventListener("input", function () {
    document.querySelector(".bubble-box").style.backgroundColor = this.value;
  });
  