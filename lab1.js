 const teacherTable = document.getElementById('teacherTable');
    const addForm = document.getElementById('addForm');

    // Mảng lưu trữ nhân viên
    let teachers = [];

    // Thêm nhân viên
    addForm.onsubmit = function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;

        const staff = { name, subject };
        teachers.push(staff);
        renderTable();
        addForm.reset();
    };

    // Hiển thị danh sách nhân viên
    function renderTable() {
        teacherTable.innerHTML = '';
        teachers.forEach((staff, index) => {
            const row = `<tr>
                <td>${staff.name}</td>
                <td>${staff.subject}</td>
                <td>
                    <button onclick="editTeacher(${index})">Sửa</button>
                    <button onclick="deleteTeacher(${index})">Xóa</button>
                </td>
            </tr>`;
            staffTable.innerHTML += row;
        });
    }

    // Sửa nhân viên
    function editStaff(index) {
        const name = prompt("Nhập tên mới:", teachers[index].name);
        const subject = prompt("Nhập phòng mới:", staffs[index].subject);
        if (name && subject) {
            staffs[index] = { name, subject };
            renderTable();
        }
    }

    // Xóa nhân viên
    function deleteTeacher(index) {
        teachers.splice(index, 1);
        renderTable();
    }

    // Tìm kiếm nhân viên
    function searchStaff() {
const input = document.getElementById('searchInput').value.toLowerCase();
