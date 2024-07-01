

document.getElementById('cropForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cropName = document.getElementById('cropName').value;
    const season = document.getElementById('season').value;
    const location = document.getElementById('location').value;
    const details = document.getElementById('details').value;

    db.collection('crops').add({
        name: cropName,
        season: season,
        location: location,
        details: details
    })
    .then(() => {
        alert('Crop details posted successfully');
    })
    .catch((error) => {
        console.error('Error posting crop details: ', error);
        alert('Error posting crop details: ' + error.message);
    });
});

document.getElementById('schemeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const schemeName = document.getElementById('schemeName').value;
    const description = document.getElementById('description').value;
    const eligibility = document.getElementById('eligibility').value;
    const details = document.getElementById('schemeDetails').value;

    db.collection('schemes').add({
        name: schemeName,
        description: description,
        eligibility: eligibility,
        details: details
    })
    .then(() => {
        alert('Scheme details posted successfully');
    })
    .catch((error) => {
        console.error('Error posting scheme details: ', error);
        alert('Error posting scheme details: ' + error.message);
    });
});

const logout = () => {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error logging out: ', error);
        alert('Error logging out: ' + error.message);
    });
};

// Function to fetch and display scheme requests
const fetchRequests = () => {
    db.collection('schemeRequests').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Display each request with an approval button
        });
    }).catch((error) => {
        console.error('Error fetching scheme requests: ', error);
    });
};

window.onload = fetchRequests;
