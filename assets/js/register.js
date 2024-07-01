

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
                name: name,
                email: email,
                role: 'user'
            });
        })
        .then(() => {
            alert('User registered successfully');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error('Error registering user: ', error);
            alert('Error registering user: ' + error.message);
        });
});
