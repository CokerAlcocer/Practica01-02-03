console.log('[--- 03-Fetch I20203TN066 ---]');

const response = fetch('https://reqres.in/api/users?page=1')
const container = document.getElementById('container');
let content = '';

response.then(res => res.json()).then(res => {
    res.data.forEach(item => {
        content = content + `<div class="col-6 col-lg-4 mb-3">
            <div class='card' style='width: 18rem;'>
            <img src='${item.avatar}' class='card-img-top' alt='...'>
            <div class='card-body'>
            <h5 class='card-title'>${item.first_name} ${item.last_name}</h5>
            <p class='card-text'>${item.email}</p>
            <button class="btn btn-primary" onclick="searchUser(${item.id})">Info</button>
            </div>
            </div>
            </div>`;
    });

    container.innerHTML = content;
});

const searchUser = id => {
    const modal = new bootstrap.Modal('#modal', {});
    fetch(`https://reqres.in/api/users/${id}`).then(res => res.json()).then(({data}) => {
        document.getElementById('modal-body').innerHTML = `<img src='${data.avatar}' alt='...'>
            <div class='mt-3'>
            <h5>${data.first_name} ${data.last_name}</h5>
            <p>${data.email}</p>
            </div>`;
    });

    modal.show();
}
