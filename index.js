
    // JavaScript for tabs
    document.getElementById("defaultOpen").click();

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
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
const input = document.getElementById('searchInput').value.toLowerCase();}
       // JavaScript for tabs
       document.getElementById("defaultOpen").click();
    
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
        // JavaScript for tabs
        document.getElementById("defaultOpen").click();
    
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    // JavaScript to handle modal switching
    const continueButtons = document.querySelectorAll('.continue-btn');
    const mainModal = document.getElementById('mainModal');
    const challengeModal = document.getElementById('challengeModal');
    const confirmationModal = document.getElementById('confirmationModal');

    // Open the second modal when any "Continue" button is clicked
    continueButtons.forEach(button => {
        button.addEventListener('click', () => {
            mainModal.classList.remove('active');
            challengeModal.classList.add('active');
        });
    });

    // Function to open the confirmation modal
    function openConfirmationModal() {
        challengeModal.classList.remove('active');
        confirmationModal.classList.add('active');
    }

    // Function to close the confirmation modal and return to the main screen
    function closeConfirmationModal() {
        confirmationModal.classList.remove('active');
        mainModal.classList.add('active');
    }
        

  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Update active tab
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`).classList.add('active');
  }
