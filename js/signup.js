  const firebaseConfig = {
    apiKey: "AIzaSyD1TnJqaiRzgYXfQgqOuDZBF0nDCkbXhxU",
    authDomain: "project1-19278.firebaseapp.com",
    databaseURL: "https://project1-19278-default-rtdb.firebaseio.com",
    projectId: "project1-19278",
    storageBucket: "project1-19278.appspot.com",
    messagingSenderId: "318463194940",
    appId: "1:318463194940:web:ec9e6d579da74c2524d039",
    measurementId: "G-MCZ59M49PW"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('signupForm')

  document.getElementById('signupForm').addEventListener("submit",submitForm);





  function submitForm(e){

    e.preventDefault();

    var firstname= getElementVal('firstname');
     var lastname= getElementVal('lastname');
    var emailid=getElementVal('emailid');
    var password=getElementVal("password");


    console.log(firstname, lastname, emailid, password);

saveMessages(firstname, lastname, emailid, password);



  }



const saveMessages=(firstname, lastname, emailid, password)=>{
  var newContactForm=contactFormDB.push();
  newContactForm.set({
    firstname:firstname,
    lastname:lastname,
    emailid:emailid,
    password:password
  })
}

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };