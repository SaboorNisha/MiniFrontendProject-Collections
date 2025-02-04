// Function to set the current date dynamically
function setDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
  }
  
  // Function to rotate news blogs based on the day of the month
  function rotateNewsBlogs() {
    const newsContainer = document.getElementById('news-container');
    const newsElements = Array.from(newsContainer.getElementsByClassName('news'));
    const today = new Date().getDate();  // Get the current day of the month
  
    // Shift news blogs based on the day of the month
    const rotateBy = today % newsElements.length;
    const rotatedNews = newsElements.slice(rotateBy).concat(newsElements.slice(0, rotateBy));
  
    // Clear and re-add news blogs in new order
    newsContainer.innerHTML = '';
    rotatedNews.forEach(news => {
      newsContainer.appendChild(news);
    });
  }
  
  // Initialize the page
  function init() {
    setDate();        // Set the dynamic date
    rotateNewsBlogs(); // Rotate the news blogs
  }
  
  // Call the init function when the page loads
  window.onload = init;
  