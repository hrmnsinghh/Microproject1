// document.getElementById('loadData').addEventListener('click', async () => {
//     try {
//         const response = await fetch('/api/details');
//         const data = await response.json();
//         const container = document.getElementById('dataContainer');
//         container.innerHTML = '';
//         data.forEach(item => {
//             const div = document.createElement('div');
//             div.classList.add('item');
//             div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
//             container.appendChild(div);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// });
document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:4000/api/details');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const tableBody = document.querySelector('#dataContainer tbody');
        tableBody.innerHTML = ''; 

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.email}</td>
                <td>${item.gender}</td>
                <td>${item.job_title}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        const container = document.getElementById('dataContainer');
        container.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
});
