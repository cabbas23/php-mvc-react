PHP with MVC, React as view

Install Babel for jsx preprocessor:
1. npm init -y
2. npm install babel-cli@6 babel-preset-react-app@3

Run preprocessor in root directory:
1. npx babel --watch app/view/react_dev --out-dir app/view/react_prod --presets react-app/prod
