import app from './app.js';

app.set('port',3000);
app.listen(app.get('port'));
console.log(`server running on port ${app.get('port')}`);

