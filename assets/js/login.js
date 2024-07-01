

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).get();
        })
        .then((doc) => {
            if (doc.exists) {
                const role = doc.data().role;
                if (role === 'admin') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'user-dashboard.html';
                }
            } else {
                alert('No such user found');
            }
        })
        .catch((error) => {
            console.error('Error logging in: ', error);
            alert('Error logging in: ' + error.message);
        });
});
