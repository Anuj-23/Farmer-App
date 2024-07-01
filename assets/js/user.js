

const fetchCrops = () => {
    db.collection('crops').get().then((querySnapshot) => {
        const cropsDiv = document.getElementById('crops');
        querySnapshot.forEach((doc) => {
            const crop = doc.data();
            const cropElement = document.createElement('div');
            cropElement.innerHTML = `<h4>${crop.name}</h4><p>${crop.details}</p>`;
            cropsDiv.appendChild(cropElement);
        });
    }).catch((error) => {
        console.error('Error fetching crops: ', error);
    });
};

const fetchSchemes = () => {
    db.collection('schemes').get().then((querySnapshot) => {
        const schemesDiv = document.getElementById('schemes');
        querySnapshot.forEach((doc) => {
            const scheme = doc.data();
            const schemeElement = document.createElement('div');
            schemeElement.innerHTML = `<h4>${scheme.name}</h4><p>${scheme.description}</p>`;
            schemesDiv.appendChild(schemeElement);
        });
    }).catch((error) => {
        console.error('Error fetching schemes: ', error);
    });
};

const logout = () => {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error logging out: ', error);
        alert('Error logging out: ' + error.message);
    });
};

window.onload = () => {
    fetchCrops();
    fetchSchemes();
};
