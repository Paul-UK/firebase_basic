//User Auth using google Auth

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase
    console.log(app);
    
});

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

     })

})