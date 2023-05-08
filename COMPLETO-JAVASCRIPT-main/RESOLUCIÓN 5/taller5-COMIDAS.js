// JS
const categoryDropdown = document.getElementById('category');
const mealsContainer = document.getElementById('meals');

// Obtener todas las categorías de comida desde la API
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => response.json())
  .then(data => {
    // Llenar el menú desplegable con las categorías
    data.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.strCategory;
      option.textContent = category.strCategory;
      categoryDropdown.appendChild(option);
    });
  });

// Obtener las comidas de la categoría seleccionada y renderizarlas en tarjetas
categoryDropdown.addEventListener('change', () => {
  const category = categoryDropdown.value;
  mealsContainer.innerHTML = '';

  // Obtener todas las comidas de la categoría seleccionada desde la API
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data => {
      data.meals.forEach(meal => {
        // Crear una tarjeta para la comida
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h2>${meal.strMeal}</h2>
          <p>${meal.strInstructions}</p>
        `;
        mealsContainer.appendChild(card);
      });
    });
});