const firebaseConfig = {
    apiKey: "AIzaSyBvKR5MzhxS8OhU9Cog2ZsH91Cko-pp_-M",
    authDomain: "tdah-513fc.firebaseapp.com",
    databaseURL: "https://tdah-513fc-default-rtdb.firebaseio.com",
    projectId: "tdah-513fc",
    storageBucket: "tdah-513fc.appspot.com",
    messagingSenderId: "614531647661",
    appId: "1:614531647661:web:dfc83ebe98c4be8f9d5e24"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}