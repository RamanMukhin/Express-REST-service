import { PORT } from './common/config.js';
import { app } from './app.js';
import { tryToconnectDB } from './db/db.js';

tryToconnectDB(() => console.log('OOOh, eeeeee!!!!!')).then(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
