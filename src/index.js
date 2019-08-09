import dva from 'dva';
import './index.css';
import './lib/MyPrototype.js';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/order').default);
app.model(require('./models/menu').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

// console.clear();