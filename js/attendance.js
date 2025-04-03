document.addEventListener('DOMContentLoaded', () => {
    const attendanceData = [
        { date: '2023-10-01', subject: 'Mathematics', status: 'present', notes: 'On time' },
        { date: '2023-10-02', subject: 'Physics', status: 'absent', notes: 'Sick leave' },
        { date: '2023-10-03', subject: 'Chemistry', status: 'present', notes: 'Active participation' },
        // Add more data as needed
    ];

    const tableBody = document.querySelector('#attendanceTable tbody');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function loadTableData(filter = 'all') {
        tableBody.innerHTML = '';
        attendanceData.forEach(record => {
            if (filter === 'all' || filter === record.status) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${record.date}</td>
                    <td>${record.subject}</td>
                    <td class="${record.status}">${record.status}</td>
                    <td>${record.notes}</td>
                `;
                tableBody.appendChild(row);
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadTableData(button.dataset.filter);
        });
    });

    // Initial load
    loadTableData();
});