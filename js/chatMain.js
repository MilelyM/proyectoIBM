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
        // titulo.style.display = "none";
        // navBar.style.display = "block";
        // regulariz.style.display = "block";
        // carousel.style.display = "block"; 
        // botones.style.display = "block";
        // login.stule.display = "none;"

        userCreate = firebase.database().ref('users/' + user.uid);
        let conectados = userCreate.set({
          displayName: user.displayName || user.providerData[0].email,
          email: user.email || user.providerData[0].email,
          photoUrl: user.photoURL || '',
          createdOn: user.metadata.createdAt || new Date(),
          uid: user.uid,
          userConected: true
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
  firebase.auth().signOut();
  // userCreate = firebase.database().ref('users/' + user.uid);
  // userCreate.update({
  //   userConected: false

  // })

});

function newUser(user, uid) {
  userCreate = firebase.database().ref('users/' + user.uid);

  userCreate.on('value', function (snapshot) {
    console.log(snapshot.val())
    console.log(`Ha ingresado a la sala ${snapshot.val().displayName}`);
    contUser = contUser + 1;
    userOnline.textContent = contUser;
    userConected(name, uid);
  });
};
// window.addEventListener("beforeunload", function (event) {
//   if (firebase.auth().signOut()) {
//     userCreate = firebase.database().ref('users/' + user.uid);
//     userCreate.update({
//       userConected: false
//     })
//   }
// });




function userConected(name, uid) {

  var li = `<li id="${uid}"><span><i class="material-icons">person</i>${name}</span></li>`
  $('#userOnline').append(li);
};