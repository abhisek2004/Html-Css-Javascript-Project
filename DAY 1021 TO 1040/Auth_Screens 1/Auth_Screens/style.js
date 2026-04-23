
        const gridContainer = document.getElementById('gridContainer');

        for (let i = 0; i < 30; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.width = '100%';
            line.style.height = '1px';
            line.style.top = (i * 50) + 'px';
            line.style.animationDelay = (i * 0.1) + 's';
            gridContainer.appendChild(line);
        }

        for (let i = 0; i < 40; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.width = '1px';
            line.style.height = '100%';
            line.style.left = (i * 50) + 'px';
            line.style.animationDelay = (i * 0.1 + 0.5) + 's';
            gridContainer.appendChild(line);
        }

        const shapeCount = 5;
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'shape';
            const size = Math.random() * 200 + 100;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = (i * 1.6) + 's';
            shape.style.animationDuration = (Math.random() * 4 + 6) + 's';
            gridContainer.appendChild(shape);
        }

        const togglePassword = document.getElementById('togglePassword');
        const passwordField = document.getElementById('passwordField');
        let isPasswordVisible = false;

        togglePassword.addEventListener('click', () => {
            isPasswordVisible = !isPasswordVisible;
            passwordField.type = isPasswordVisible ? 'text' : 'password';
            togglePassword.className = isPasswordVisible
                ? 'fa-solid fa-eye-slash toggle-icon'
                : 'fa-solid fa-eye toggle-icon';
        });

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const statusText = document.querySelector('.status-text');
            statusText.textContent = 'Authenticating...';

            setTimeout(() => {
                statusText.textContent = 'Access Granted';
                setTimeout(() => {
                    statusText.textContent = 'System Ready';
                }, 2000);
            }, 1500);
        });