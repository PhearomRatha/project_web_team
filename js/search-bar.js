const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

// Sample data (replace with your actual data source)
const items = ["Apple", "Banana", "Orange", "Mango", "Grapefruit"];

searchBar.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));

  searchResults.innerHTML = ''; // Clear previous results

  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      searchResults.appendChild(listItem);
    });
  } else {
    searchResults.innerHTML = '<li>No results found.</li>';
  }
});