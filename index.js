const BookDatabase = require('./databases/BookDatabase');
const MemberDatabase = require('./databases/MemberDatabase');
const CheckoutDatabase = require('./databases/CheckoutDatabase');

var path = require('path');
var express = require('express');
var app = express();

let bookDatabase = new BookDatabase();;
let memberDatabase = new MemberDatabase();
let checkoutDatabase = new CheckoutDatabase(bookDatabase, memberDatabase);

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

/*
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
*/

app.get('/', function(req, res){
    res.render('member');
});

app.get('/member', function(req, res){
    res.render('member');
});

app.get('/book', function(req, res){
    res.render('book');
});

app.get('/checkout', function(req, res){
    res.render('checkout');
});


app.post('/member', function(req, res){
    memberDatabase.create(req.body.firstName, req.body.lastName);
    console.log("Member Database:");
    console.log(memberDatabase.members);
    res.render("member");
});

app.post('/book', function(req, res){
    bookDatabase.create(req.body.title, req.body.author, req.body.bookReference);
    console.log("Book Database:");
    console.log(bookDatabase.books);
    res.render("book");
});

app.post('/checkout', function(req, res){
    checkoutDatabase.create(req.body.bookId, req.body.memberId, req.body.period);
    console.log("Checkout Database:");
    console.log(checkoutDatabase.checkouts);
    res.render("checkout");
});

app.listen(3000);
console.log('Running at Port 3000');