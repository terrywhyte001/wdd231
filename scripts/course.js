const courses = [
    { code: "CSE 110", name: "Programming Building Blocks", credits: 2, completed: true },
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false },
    { code: "WDD 231", name: "Front-end Development I", credits: 2, completed: false },
  ];
  
  function renderCourses(courseList) {
    const container = document.getElementById('courseContainer');
    container.innerHTML = "";
    let total = 0;
  
    courseList.forEach(course => {
      const card = document.createElement('div');
      card.innerHTML = `<strong>${course.code}</strong>: ${course.name}`;
      card.style.background = course.completed ? "#c2f0c2" : "#f0f0f0";
      card.style.padding = "0.5rem";
      card.style.margin = "0.5rem 0";
      total += course.credits;
      container.appendChild(card);
    });
  
    document.getElementById('totalCredits').textContent = total;
  }
  
  function displayAll() {
    renderCourses(courses);
  }
  
  function displayWDD() {
    renderCourses(courses.filter(c => c.code.startsWith("WDD")));
  }
  
  function displayCSE() {
    renderCourses(courses.filter(c => c.code.startsWith("CSE")));
  }
  
  window.onload = displayAll;
  