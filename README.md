# 🌌 Rick and Morty Characters App

A React application that fetches and displays Rick and Morty characters from the official API with responsive card layouts and modern CSS styling.

## 🚀 Features

- **API Integration:** Fetches character data from the [Rick and Morty API](https://rickandmortyapi.com/api/character).
- **Character Cards:** Displays character image, name, status, species, gender, origin, location, and episode count.
- **Status Indicators:** Color-coded status dots (Green = Alive, Red = Dead, Gray = Unknown).
- **Loading State:** Animated spinner while data is being fetched.
- **Error Handling:** User-friendly error message with a "Try Again" button.
- **Responsive Design:** Grid layout that adapts to all screen sizes.
- **Modern Styling:** Gradient backgrounds, hover animations, and glassmorphism effects.

## 🏗️ Project Structure

```
src/
├── App.jsx              # Main component with API fetch logic and state management
├── App.css              # Global styles, layout, loading and error states
├── main.jsx             # React entry point
├── index.css            # Base reset styles
└── Components/
    ├── CharacterCard.jsx    # Reusable card component for each character
    └── CharacterCard.css    # Card-specific styles and hover effects
```

## 🛠️ Tech Stack

- **React** - UI library with functional components and hooks (`useState`, `useEffect`)
- **Vite** - Next-generation frontend build tool
- **Fetch API** - Native browser API for making HTTP requests
- **CSS3** - Custom styling with gradients, animations, and responsive grid

## 📡 API

This project uses the **Rick and Morty API**:

- **Endpoint:** `GET https://rickandmortyapi.com/api/character`
- **Documentation:** [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

### Sample Response Structure:

```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": { "name": "Earth (C-137)", "url": "..." },
      "location": { "name": "Citadel of Ricks", "url": "..." },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": ["..."],
      "url": "...",
      "created": "..."
    }
  ]
}
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/[your-username]/[repo-name].git
   cd [repo-name]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🌐 Deployment (GitHub Pages)

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to `vite.config.js`:**
   ```javascript
   base: '/[repo-name]/',
   ```

3. **Add scripts to `package.json`:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in repository Settings > Pages > Source: `gh-pages` branch.

## 📝 Learning Objectives

- Consuming REST APIs using the Fetch API
- Managing loading, error, and success states with `useState`
- Using `useEffect` for data fetching on component mount
- Building reusable components with props
- Creating responsive grid layouts with CSS
- Handling asynchronous operations with `async/await`

## 📄 License

This project is open source and available under the MIT License.
