import app from './app';

require('dotenv').config();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3001;

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on port ${EXPRESS_PORT}`);
})