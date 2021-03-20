//call Firebase
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase
    console.log(app);
    
});

//Auth Google for the example

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    //works as a promise async so we can use then
    .then(result => {
        const user = result.user; 
        document.write(`Hello ${user.displayName}`);
        console.log(user); 
    })
    .catch(console.log)
}; 

// Query a DB collection like MongoDB
/*
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    // test
    const myPost = db.collection('post').doc('ffirstPost');

    // retrieve the collection
     myPost.onSnapshot(doc => {

     const data = doc.data();
         document.write(data.title + `<br>`)
         document.write(data.createdAt + `<br>`)

     }); 

})*/

// Upload file to Firebase (check the Storage Rules before doing so)

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('horse.jpg'); 
    const file = files.item(0); 
    const task = horseRef.put(file); 

    task.then(snapshot => {
        console.log(snapshot);
        const url = snapshot.downloadURL

    })

}

