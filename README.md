# 🍳 AI Recipe Generator

An AI-powered recipe generator that creates unique recipes based on user input. This project leverages the **SheCodes AI API** to generate dynamic content and uses **Axios** for handling API requests.

---

## 🚀 Features

* Generate recipes using AI
* Simple and clean user interface
* Fast API integration with Axios
* Lightweight and easy-to-understand project structure

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* Axios (for API requests)
* SheCodes AI API

---

## 📁 Project Structure

```
project-root/
│
├── index.html
└── src/
    ├── index.js
    └── style.css
```

---

## ⚙️ How It Works

1. The user inputs ingredients.
2. A request is sent to the SheCodes AI API using Axios.
3. The API returns a generated recipe.
4. The recipe is displayed dynamically on the page.

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-recipe-generator.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ai-recipe-generator
   ```

3. Open `index.html` in your browser.

---

## 🔑 API Configuration

To use the SheCodes AI API:

1. Sign up and get your API key.
2. Add your API key inside `index.js`:

   ```javascript
   const apiKey = "YOUR_API_KEY";
   ```

---

## 📡 Example API Call

```javascript
axios.post(apiUrl, {
  prompt: userInput,
  key: apiKey
})
.then(response => {
  console.log(response.data);
});
```

---

## 🎨 Styling

All styles are located in:

```
src/style.css
```

Feel free to customize the UI to match your design preferences.

---

## 📌 Future Improvements

* Add loading animations
* Improve error handling
* Save favorite recipes
* Add dietary filters (vegan, gluten-free, etc.)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* SheCodes AI API for powering the recipe generation
* Axios for simplifying HTTP requests

---
