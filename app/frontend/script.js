const API_URL = 'http://localhost:3001/api';
let currentFilter = 'all';
let todos = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadTodos();
});

function setupEventListeners() {
    // Form submission
    document.getElementById('todoForm').addEventListener('submit', addTodo);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderTodos();
        });
    });
}

async function loadTodos() {
    try {
        const response = await fetch(`${API_URL}/todos`);
        if (!response.ok) throw new Error('Failed to fetch todos');
        todos = await response.json();
        renderTodos();
    } catch (error) {
        console.error('Error loading todos:', error);
        showMessage('Failed to load todos', 'error');
    }
}

async function addTodo(e) {
    e.preventDefault();

    const title = document.getElementById('titleInput').value.trim();
    const description = document.getElementById('descriptionInput').value.trim();

    if (!title) {
        showMessage('Please enter a task title', 'error');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });

        if (!response.ok) throw new Error('Failed to add todo');

        const newTodo = await response.json();
        todos.unshift(newTodo);
        
        document.getElementById('todoForm').reset();
        renderTodos();
        showMessage('Task added successfully!', 'success');
    } catch (error) {
        console.error('Error adding todo:', error);
        showMessage('Failed to add task', 'error');
    }
}

async function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const newStatus = todo.status === 'pending' ? 'completed' : 'pending';

    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                status: newStatus
            })
        });

        if (!response.ok) throw new Error('Failed to update todo');

        todo.status = newStatus;
        renderTodos();
    } catch (error) {
        console.error('Error updating todo:', error);
        showMessage('Failed to update task', 'error');
    }
}

async function deleteTodo(id) {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete todo');

        todos = todos.filter(t => t.id !== id);
        renderTodos();
        showMessage('Task deleted successfully!', 'success');
    } catch (error) {
        console.error('Error deleting todo:', error);
        showMessage('Failed to delete task', 'error');
    }
}

function renderTodos() {
    const todosList = document.getElementById('todosList');
    const emptyState = document.getElementById('emptyState');

    // Filter todos based on current filter
    let filteredTodos = todos;
    if (currentFilter !== 'all') {
        filteredTodos = todos.filter(t => t.status === currentFilter);
    }

    // Update counters
    updateCounters();

    // Show/hide empty state
    if (filteredTodos.length === 0) {
        todosList.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // Render todos
    todosList.innerHTML = filteredTodos.map(todo => `
        <div class="todo-item ${todo.status}">
            <div class="todo-content">
                <div class="todo-title">${escapeHtml(todo.title)}</div>
                ${todo.description ? `<div class="todo-description">${escapeHtml(todo.description)}</div>` : ''}
                <div class="todo-meta">
                    <span class="todo-status ${todo.status}">${todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}</span>
                    <span>📅 ${formatDate(todo.created_at)}</span>
                </div>
            </div>
            <div class="todo-actions">
                <button class="btn-icon btn-complete" onclick="toggleTodo(${todo.id})" title="Toggle status">
                    ${todo.status === 'pending' ? '✓ Complete' : '↻ Pending'}
                </button>
                <button class="btn-icon btn-delete" onclick="deleteTodo(${todo.id})" title="Delete">
                    🗑 Delete
                </button>
            </div>
        </div>
    `).join('');
}

function updateCounters() {
    const total = todos.length;
    const completed = todos.filter(t => t.status === 'completed').length;
    const pending = todos.filter(t => t.status === 'pending').length;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('pendingCount').textContent = pending;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function showMessage(message, type) {
    // Simple notification - you can enhance this with a toast library
    console.log(`[${type.toUpperCase()}] ${message}`);
}
