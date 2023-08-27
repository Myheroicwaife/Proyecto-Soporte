document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const postForm = document.querySelector('.post-form');

    const postTextarea = document.querySelector('.post-form textarea');
    const postButton = document.querySelector('.post-form button');
    const postsContainer = document.querySelector('.posts');
    const logoutButton = document.getElementById('logout');

    // Obtener el nombre de usuario almacenado en localStorage
    const username = localStorage.getItem('username');

    // Verificar si hay un nombre de usuario almacenado
    if (username) {
        // Mostrar el nombre de usuario en los posts
        const usernameElements = document.querySelectorAll('.username');
        usernameElements.forEach(element => {
            element.textContent = username;
        });
    }

    // Función para agregar un nuevo post
    function addPost() {
        const content = postTextarea.value;

        if (content.trim() === '') {
            return;
        }

        const postContainer = document.createElement('div');
        postContainer.classList.add('post-container');

        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const usernameElement = document.createElement('h3');
        usernameElement.textContent = username;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Me gusta';
        
        // Elemento para mostrar "Me gusta" con el icono de corazón y el contador
        const likeCountElement = document.createElement('span');
        likeCountElement.innerHTML = '<i class="fas fa-heart"></i> <span>0</span>'; // Icono de corazón y contador inicial

        let likeCount = 0; // Variable para almacenar la cantidad actual de "Me gusta"

        // Manejador de clic para el botón "Me gusta"
        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCountElement.querySelector('span').textContent = likeCount; // Actualiza el contador en el elemento <span>
        });

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comentar';

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Escribe un comentario...';

        const commentList = document.createElement('ul');

        commentButton.addEventListener('click', () => {
            const commentContent = commentInput.value;

            if (commentContent.trim() === '') {
                return;
            }

            const commentItem = document.createElement('li');
            commentItem.textContent = commentContent;
            commentList.appendChild(commentItem);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                commentList.removeChild(commentItem); // Elimina el comentario al hacer clic en "Eliminar"
            });
        
            commentItem.appendChild(deleteButton);
            commentList.appendChild(commentItem);


            commentInput.value = '';
        });

        postElement.appendChild(usernameElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(likeButton);
        postElement.appendChild(likeCountElement);
        postElement.appendChild(commentButton);
        postElement.appendChild(commentInput);
        postElement.appendChild(commentList);

        postContainer.appendChild(postElement);
        postsContainer.appendChild(postContainer);

        // Mostrar la sección de posts después de agregar un nuevo post
        postsContainer.style.display = 'block';

        // Limpiar el campo de texto después de agregar el post
        postTextarea.value = '';
    }

    // Evento de clic para agregar un nuevo post
    postButton.addEventListener('click', addPost);

    //cerrar sesión
    logoutButton.addEventListener('click', function() {
        // Eliminar el nombre de usuario almacenado en localStorage
        localStorage.removeItem('username');
        // Eliminar la contraseña almacenada en localStorage
        localStorage.removeItem('password');
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'login.html'; // Asegúrate de que la página se llame correctamente
    });

});




















































