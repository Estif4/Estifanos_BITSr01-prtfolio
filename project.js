window.addEventListener('scroll', () => {
            const bioContent = document.querySelector('.bio-content');
            const bioContentPosition = bioContent.getBoundingClientRect().top;

            const eduContent = document.querySelector('.edu-content');
            const eduContentPosition = eduContent.getBoundingClientRect().top;

            const screenHeight = window.innerHeight;

            if (bioContentPosition < screenHeight) {
                bioContent.classList.add('active');
            } else {
                bioContent.classList.remove('active');
            }

            if (eduContentPosition < screenHeight) {
                eduContent.classList.add('active');
            } else {
                eduContent.classList.remove('active');
            }
        });

        document.getElementById('dark-mode-toggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                const offset = 80; // Adjust this offset as needed

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });