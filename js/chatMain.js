<<<<<<< HEAD:public/js/chatMain.js
//Variables Globales
let userCreate = null;
let contUser = 0;

// Initialize Firebase
// Initialize Firebase
window.onload = () => {
  var config = {
    apiKey: "AIzaSyDAA4JbcHK1nV-K4ox0ubnaG_PxeTEpgkY",
    authDomain: "ibmchat-e1ce2.firebaseapp.com",
    databaseURL: "https://ibmchat-e1ce2.firebaseio.com",
    projectId: "ibmchat-e1ce2",
    storageBucket: "ibmchat-e1ce2.appspot.com",
    messagingSenderId: "299553386584"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }

  let provider = new firebase.auth.GoogleAuthProvider();


};

//Autenticación
document.addEventListener('DOMContentLoaded', function () {
  try {
    let app = firebase.app();
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [ // Leave the lines as is for the providers you want to offer
        firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ], // Terms of service
      tosUrl: '/terms-of-service'
    };
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        document.getElementById("userLogin").innerHTML = "Hola " + user.displayName;
        login.style.display = "none";
                navBar.style.display = "block";
        regulariz.style.display = "none";
        carousel.style.display = "block"; 
        botones.style.display = "block";
      
        chatBtn.style.display = "block"

        userCreate = firebase.database().ref('users/' + user.uid);
        let conectados = userCreate.set({
          displayName: user.displayName || user.providerData[0].email,
          email: user.email || user.providerData[0].email,
          photoUrl: user.photoURL || '',
          createdOn: user.metadata.createdAt || new Date(),
          uid: user.uid,
          userConected: false
        })
        newUser(user);
        console.log(user.uid + user.displayName);
      } else {
        document.getElementById('userLogin').innerHTML = '';
        ui.start('#firebaseui-auth-container', uiConfig);
      }
    });
  } catch (e) {
    console.error(e);
  }

  // firebase.database().ref('/users').on('value', showContacts);
  // firebase.database().ref("/post").on('value', drawPosts);
  // firebase.database().ref("/messages").on("value", lastMessages);


  document.getElementById('receiverName').addEventListener('keyup', findReceiver);
  document.getElementById('receiverName').addEventListener('click', loadContacts);

});

out.addEventListener('click', () => {
  
  let user = firebase.auth().currentUser;
  userCreate = firebase.database().ref('users/' + user.uid);
  userCreate.update({
    userConected: false

  }, function (error) {
    if (error) {
      console.log("error actualizando");
    } else {
      console.log("actualización exitosa" + user.uid);
    }
  })
  console.log('chaolin ');
  firebase.auth().signOut();
  login.style.display="block";
loginContent.style.display = "block";

});


function newUser(uid) {
  user = firebase.auth().currentUser;
  userCreate = firebase.database().ref('users/');

  userCreate.on('value', function (snapshot) {
    let users = snapshot.val();
    console.log((snapshot.val()["3odJSWkYzcRGzevLysUWnoRdFlA2"]));
    console.log(Object.keys(users));
    console.log(`Ha ingresado a la sala ${user.displayName}`);
    let arrayKeys = Object.keys(users);
    arrayKeys.forEach(element => {
      user = users[element];
      if (user.userConected === true) {
        contUser++;
        userOnline.textContent = contUser;
        userConected(name, uid);
      }
    })
  });
};
window.addEventListener("beforeunload", function (event) {
  userCreate = firebase.database().ref('users/' + user.uid);
  console.log(userCreate);
  userCreate.update({
    userConected: false
  })

});




function userConected(name, uid) {

  var li = `
  <li id="${uid}">
  <span>
  <i class="material-icons">person</i>${name}
  </span>
  </li>`
  $('#userOnline').append(li);
=======
//Variables Globales
let userCreate = null;
let contUser = 0;

// Initialize Firebase
// Initialize Firebase
// window.onload = () => {
//   var config = {
//     apiKey: "AIzaSyDAA4JbcHK1nV-K4ox0ubnaG_PxeTEpgkY",
//     authDomain: "ibmchat-e1ce2.firebaseapp.com",
//     databaseURL: "https://ibmchat-e1ce2.firebaseio.com",
//     projectId: "ibmchat-e1ce2",
//     storageBucket: "ibmchat-e1ce2.appspot.com",
//     messagingSenderId: "299553386584"
//   };




// };
firebase.initializeApp({
  authDomain: "ibmchat-e1ce2.firebaseapp.com",
  databaseURL: "https://ibmchat-e1ce2.firebaseio.com",
  projectId: "ibmchat-e1ce2",
  storageBucket: "ibmchat-e1ce2.appspot.com",
  messagingSenderId: "299553386584"
});
if (!firebase.apps.length) {
  firebase.initializeApp({});
}

let provider = new firebase.auth.GoogleAuthProvider();
//Inicializa una instancia de Cloud Firestore
var db = firebase.database();

//Autenticación
document.addEventListener('DOMContentLoaded', function () {
  try {
    let app = firebase.app();
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [ // Leave the lines as is for the providers you want to offer
        firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ], // Terms of service
      tosUrl: '/terms-of-service'
    };
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        document.getElementById("userLogin").innerHTML = "Hola " + user.displayName;

        userCreate = firebase.database().ref('users/' + user.uid);
        let conectados = userCreate.set({
          displayName: user.displayName || user.providerData[0].email,
          email: user.email || user.providerData[0].email,
          photoUrl: user.photoURL || '',
          createdOn: user.metadata.createdAt || new Date(),
          uid: user.uid,
          userConected: false
        })
        newUser(user);
        console.log(user.uid + user.displayName);
      } else {
        document.getElementById('userLogin').innerHTML = '';
        ui.start('#firebaseui-auth-container', uiConfig);
      }
    });
  } catch (e) {
    console.error(e);
  }

  // firebase.database().ref('/users').on('value', showContacts);
  // firebase.database().ref("/post").on('value', drawPosts);
  // firebase.database().ref("/messages").on("value", lastMessages);


  document.getElementById('receiverName').addEventListener('keyup', findReceiver);
  document.getElementById('receiverName').addEventListener('click', loadContacts);

});

out.addEventListener('click', () => {
  let user = firebase.auth().currentUser;
  userCreate = firebase.database().ref('users/' + user.uid);
  userCreate.update({
    userConected: false

  }, function (error) {
    if (error) {
      console.log("error actualizando");
    } else {
      console.log("actualización exitosa" + user.uid);
    }
  })
  console.log('chaolin ');
  firebase.auth().signOut();

});

function newUser(uid) {
  user = firebase.auth().currentUser;
  userCreate = firebase.database().ref('users/');

  userCreate.on('value', function (snapshot) {
    let users = snapshot.val();
    console.log((snapshot.val()["3odJSWkYzcRGzevLysUWnoRdFlA2"]));
    console.log(Object.keys(users));
    console.log(`Ha ingresado a la sala ${user.displayName}`);
    let arrayKeys = Object.keys(users);
    arrayKeys.forEach(element => {
      user = users[element];
      if (user.userConected === true) {
        contUser++;
        userOnline.textContent = contUser;
        userConected(name, uid);
      }
    })
  });
};
window.addEventListener("beforeunload", function (event) {
  userCreate = firebase.database().ref('users/' + user.uid);
  console.log(userCreate);
  userCreate.update({
    userConected: false
  })

});




function userConected(name, uid) {

  var li = `
  <li id="${uid}">
  <span>
  <i class="material-icons">person</i>${name}
  </span>
  </li>`
  $('#userOnline').append(li);
>>>>>>> 585523e1f899961a20da9c52e5b4c672f0cb3321:js/chatMain.js
};