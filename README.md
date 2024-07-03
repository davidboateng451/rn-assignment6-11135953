# rn-assignment6-11135953

## Overview

This project is a simple React Native e-commerce application that includes a product listing screen and a cart screen. Users can view available products, add them to the cart, and remove them from the cart. The cart's state is saved locally on the device using AsyncStorage. The application mimics a basic shopping cart experience.

## Features

- **HomeScreen**: Displays a list of available products with options to add items to the cart.
- **CartScreen**: Shows the selected items in the cart with options to remove items.
- **Add to Cart Button**: Available for each product on the HomeScreen.
- **Remove from Cart Button**: Available for each item in the CartScreen.
- **Local Storage**: Stores selected items locally using AsyncStorage.

## Design Choices

### UI Design

The application's UI follows a simple and intuitive design to enhance user experience. The mockup provided guided the following design choices:

- **HomeScreen**: A clean and organized list layout where each product displays its name, image, price, and an "Add to Cart" button.
- **CartScreen**: A list of products added to the cart with a "Remove" button for each item and a checkout section showing the estimated total cost.
- **Headers and Titles**: Clear and centered titles for each screen to denote their purpose.

### Data Storage

- **AsyncStorage**: Chosen for its simplicity and ease of use to store and persist data locally on the device. It handles JSON data well and is suitable for our requirement of storing the cart items.

### Functionality Implementation

- **Product List**: The `HomeScreen` component fetches and displays a static list of products. Each product has an "Add to Cart" button.
- **Cart Management**: The `CartScreen` component retrieves cart items from AsyncStorage, displays them, and provides options to remove items.
- **Add to Cart**: The button on the `HomeScreen` allows users to add a product to the cart, updating the state and AsyncStorage.
- **Remove from Cart**: The button on the `CartScreen` allows users to remove a product from the cart, updating the state and AsyncStorage.

## Implementation Details


### Key Components

- **HomeScreen.js**: 
  - Displays a list of products.
  - Uses the `ProductItem` component to render each product.
  - Handles adding items to the cart.

- **CartScreen.js**: 
  - Displays the items in the cart.
  - Uses the `CartItem` component to render each cart item.
  - Handles removing items from the cart.

- **ProductItem.js**: 
  - A reusable component for displaying individual products on the `HomeScreen`.

- **CartItem.js**: 
  - A reusable component for displaying individual cart items on the `CartScreen`.

### State Management

- The application uses React's `useState` and `useEffect` hooks for state management.
- The cart items are stored and managed locally within each component and persisted using AsyncStorage.

### Local Storage

- **AsyncStorage**:
  - Used to save and load cart items.
  - Provides methods to get, set, and remove data.
  - Ensures the cart's state is preserved across app sessions.

Screenshots

HomeScreen: Displaying the list of products.
![Screenshot1](https://github.com/davidboateng451/rn-assignment6-11135953/assets/151746606/6246976c-a4a6-4de8-ae2e-73fc9006822c)
![Screenshot2](https://github.com/davidboateng451/rn-assignment6-11135953/assets/151746606/75f23c01-25b1-4601-a9e1-004a62550867)




CartScreen: Displaying selected items in the cart.
![Screenshot3](https://github.com/davidboateng451/rn-assignment6-11135953/assets/151746606/a7045aab-3e1f-4f5a-bb92-e83cc3d6153e)
![Screenshot4](https://github.com/davidboateng451/rn-assignment6-11135953/assets/151746606/5c74cfb1-8318-4711-a9c4-3b9bb15a4c29)


