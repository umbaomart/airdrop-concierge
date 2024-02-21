# Airdrop Concierge - React App

### Prerequisites
Ensure the following software is installed on your computer:
- Node.js v18+

### Installation
Follow these steps to set up the Airdrop Concierge application:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/umbaomart/airdrop-concierge.git

2. **Install Dependencies**
    ```bash
    npm install
    npm i sass

3. **Usage**
    ```bash
    npm run dev

### Dependencies
 - gsap
 - sass
 - react-dom
 - react-router

## Changing Base Path in vite.config.js

To change the base path in vite.config.js, follow these steps:

1. Open the `vite.config.js` file in your project.

2. Locate the `base` property within the `defineConfig` function.

3. Modify the value of the `base` property to match your desired base path. By default, it is set to `/airdrop-concierge/`.

   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-custom-base-path/'
   })
