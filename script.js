// inisialisasi
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const errorMessage = document.getElementById('error-message');

// Event: tambah tugas baru
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = input.value.trim();

  // validasi input
  if (task === "") {
    errorMessage.textContent = "Tugas tidak boleh kosong!";
    return;
  } else {
    errorMessage.textContent = "";
  }

  // buat elemen li baru
  const li = document.createElement('li');
  li.className = 'todo-item';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = task;

  const actions = document.createElement('div');
  actions.className = 'todo-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Selesai';
  completeBtn.className = 'btn-complete';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';
  deleteBtn.className = 'btn-delete';

  // Event: tugas selesai
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Event: tugas dihapus
  deleteBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });

  // gabungkan elemen
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);

  // tambahkan ke daftar
  todoList.appendChild(li);

  // reset input
  input.value = "";
});