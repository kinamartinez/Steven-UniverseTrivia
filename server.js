/**
 * Created by kinamartinez on 8/16/17.
 */
const express = require ('express');
const app = express();

app.use(express.static('public'));
// app.use(express.static('node_modules'));
app.listen(8000, function () {
    console.log('Listening in 8000');
});