# Bestellapp

A simple single-page ordering application  
that loads data from a local JSON file  
and displays it as responsive cards.  
The goal is to demonstrate fundamental JavaScript techniques  
(such as fetch-based data retrieval), template functions, 
and responsive CSS.

---

## 📁 Project Structure

bestellapp/  
├── index.html           # Entry point of the application  
├── style.css            # Base styles and layout  
├── responsive.css       # Media queries for various breakpoints  
├── script.js            # JavaScript logic: data fetching, template rendering  
├── Templates.js         # Template functions for rendering items  
├── menu.json            # JSON file containing order data  
├── img/                 # Folder for images  

---

## 🚀 Features

- **Local Data Fetching**  
  Loads post data from `menu.json` using the `fetch` API.

- **Template Function**  
  `createRowTemplate(data)` generates an HTML string for each `.post` element.

- **DOM Rendering**  
  Clears the container (`innerHTML = ""`) before injecting new content.

- **Responsive Design**  
  Mobile-first approach with breakpoints at 890px, 630px, and 290px  
  to ensure good appearance across devices.

- **Basic Error Handling**  
  Simple status check and error message if the JSON file can't be loaded.

---

## ⚙️ Technologies

- HTML5  
- CSS3 (Flexbox, Media Queries, Reset)  
- JavaScript (ES6+)  
- Fetch API for loading local JSON files  
- Template literals for generating HTML  
- DOM methods: `innerHTML`, `createElement`, `DocumentFragment`

---

## ✅ Best Practices

- **Separation of Concerns**  
  Template function returns HTML strings only, rendering happens centrally.

- **CSS Reset & Box Model**  
  Unified layout using:

  ```css
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

- **Mobile-First Approach**
Styles are adapted from small to larger viewports.

## 🛠️ Future Enhancements 

- **Performance Improvements**
Use of DocumentFragment or batch DOM updates for large datasets.

- **Interactive Features**
Filtering, sorting, or searching through the order data.

- **Form Integration**
Add functionality to create new entries and save them via localStorage.

- **Testing**
Unit tests for template functions and integration tests using Cypress.

## 📄 License
This project is licensed under the MIT License. See LICENSE for details.