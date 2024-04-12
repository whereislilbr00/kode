// script.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://burgers-hub.p.rapidapi.com/burgers')
        const selectedIngredients = [];
      
        // Function to make an HTTP GET request to the API
        function getBurgers() {
          fetch(`https://burgers-hub.p.rapidapi.com/burgers`,) }
            method: 'POST',
            headers; {
              'Content-Type'; 'application/json',
              // Include authentication headers if required
            }
            body: JSON.stringify(orderDetails)
          })
          .then(response => {
            if (response.ok) {
              // Order successfully placed, proceed to payment
              // Example: redirect to payment page or show payment modal
            } else {
              // Handle error response from order management API
              console.error('Error placing order:', response.statusText);
            }
          })
          .catch(error => console.error('Error placing order:', error));
        
            .then(response => response.json())
            .then(data => renderMenu(data))
            .catch(error => console.log(error));
            const menu = document.getElementById('main-content');
      
      
        // Function to render the menu
        function renderMenu(burgers) {
          const menuList = document.getElementById('menu-list');
      
          burgers.forEach(burger => {
            const menuItem = document.createElement('li');
            menuItem.textContent = `${burger.name} - $${burger.price}`;
            menuItem.addEventListener('click', function() {
              addIngredient(burger);
              
            });
      
            menuList.appendChild(menuItem);
          });
        }
      
        // Function to add an ingredient to the burger
        function addIngredient(ingredient) {
          selectedIngredients.push(ingredient);
      
          const burgerIngredientsDiv = document.getElementById('burger-ingredients');
          const ingredientItem = document.createElement('div');
          ingredientItem.textContent = `${ingredient.name} - $${ingredient.price}`;
          burgerIngredientsDiv.appendChild(ingredientItem);
        }
      
        // Function to calculate the total price of the burger
        function calculateTotalPrice() {
          let totalPrice = 0;
          selectedIngredients.forEach(ingredient => {
            totalPrice += ingredient.price;
          });
          return totalPrice;
        }
      
        // Function to place an order
        function placeOrder() {
          const totalPrice = calculateTotalPrice();
      
          if (totalPrice === 0) {
            alert('Please build your burger before placing an order.');
            return;
          }
      
          const orderSummary = document.getElementById('order-summary');
          const orderList = document.getElementById('order-list');
      
          // Clear previous order details
          orderList.innerHTML = '';
      
          // Display order details
          selectedIngredients.forEach(ingredient => {
            const orderItem = document.createElement('li');
            orderItem.textContent = `${ingredient.name} - $${ingredient.price}`;
            orderList.appendChild(orderItem);
          });
      
          const totalPriceItem = document.createElement('li');
          totalPriceItem.textContent = `Total: $${totalPrice}`;
          orderList.appendChild(totalPriceItem);
      
          // Show the order summary section
          orderSummary.style.display = 'block';
        }
      
        // Event listener for the "Place Order" button
        const orderButton = document.getElementById('order-button');
        orderButton.addEventListener('click', placeOrder);
      
      