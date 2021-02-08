const Title = document.getElementById('title');
const Author = document.getElementById('Author');
const Year = document.getElementById('Year');

const Btn = document.getElementById('submitBtn');
Btn.addEventListener('click', function (e) {
    e.preventDefault();

    const tbody = document.getElementById('tbody');
    if (Title.value === '' && Author.value === '' && Year.value === '') {
        alert('please Enter someting')
    } else {
        const NewRow = document.createElement('tr');

       

        const tds = `
        <td>${Title.value}</td>
        <td>${Author.value}</td>
        <td>${Year.value}</td>
        `
        NewRow.innerHTML = tds
        tbody.appendChild(NewRow)
        
    }
    
});