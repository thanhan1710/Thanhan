 function showDocuments(documentUrl1, documentUrl2, uploadDate) {
        const documentFrame1 = document.getElementById('documentFrame1');
        const documentFrame2 = document.getElementById('documentFrame2');
        documentFrame1.src = documentUrl1;
        documentFrame2.src = documentUrl2;
        document.getElementById('documentViewer').style.display = 'block';
        document.getElementById('uploadDate').innerText = 'Ngày tải lên: ' + uploadDate;
    }

    function closeDocumentViewer() {
        document.getElementById('documentViewer').style.display = 'none';
        document.getElementById('documentFrame1').src = '';
        document.getElementById('documentFrame2').src = '';
        document.getElementById('uploadDate').innerText = '';
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        // Xử lý tệp tải lên ở đây
        console.log('Tệp được chọn:', file);
        const documentList = document.getElementById('documentList');
const documentItems = Array.from(documentList.children);

function sortByNameAZ() {
const sortedItems = documentItems.slice().sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
documentList.innerHTML = '';
sortedItems.forEach(item => documentList.appendChild(item));
}

function sortByDateNewToOld() {
const sortedItems = documentItems.slice().sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
documentList.innerHTML = '';
sortedItems.forEach(item => documentList.appendChild(item));
}

// Thứ tự hiển thị ban đầu
sortByNameAZ();

// Thêm nút cho việc sắp xếp
const sortByNameButton = document.createElement('button');
sortByNameButton.textContent = 'Sắp Xếp theo Tên A-Z';
sortByNameButton.addEventListener('click', sortByNameAZ);
document.body.appendChild(sortByNameButton);

const sortByDateButton = document.createElement('button');
sortByDateButton.textContent = 'Sắp Xếp theo Ngày Mới-Cũ';
sortByDateButton.addEventListener('click', sortByDateNewToOld);
document.body.appendChild(sortByDateButton);
    }
