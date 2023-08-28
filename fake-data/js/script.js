const apiurl = 'https://randomuser.me/api/';
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const gender = document.getElementById('gender');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const mail = document.getElementById('mail');
const number = document.getElementById('number');
const getnewdata = document.getElementById('getnewdata');
const dob = document.getElementById('dob');
const age = document.getElementById('age');
async function getData() {
    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        fname.textContent = 'First Name : ' + data.results[0].name.first;
        lname.textContent = 'Last Name : ' + data.results[0].name.last;
        gender.textContent = 'Gender : ' + data.results[0].gender;
        street.textContent = 'Street : ' + data.results[0].location.street.name;
        city.textContent = 'City : ' + data.results[0].location.city;
        state.textContent = 'State : ' + data.results[0].location.state;
        country.textContent = 'Country : ' + data.results[0].location.country;
        zip.textContent = 'Postal Code : ' + data.results[0].location.postcode;
        mail.textContent = 'Email : ' + data.results[0].email;
        number.textContent = 'Phone Number : ' + data.results[0].phone;
        const dobDate = data.results[0].dob.date.slice(0, 10); // Extract only the first 10 characters
        dob.textContent = 'Date of Birth : ' + dobDate;
        age.textContent = 'Date of Birth : ' + data.results[0].dob.age;
    } catch (error) {
        console.error('Error fetching data:', error);
        fname.textContent = 'An error occurred while fetching the data: ' + error.message;
    }
}

getData();
getnewdata.addEventListener('click', getData);