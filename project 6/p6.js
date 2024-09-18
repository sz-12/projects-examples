function toggleDetails(stageId) {
            const details = document.getElementById(stageId);
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        }

        function toggleComplete(item) {
            item.classList.toggle('completed');
            updateProgress();
        }

        function updateProgress() {
            const allItems = document.querySelectorAll('.checklist-container li');
            const completedItems = document.querySelectorAll('.checklist-container li.completed');
            const progressBar = document.getElementById('progress-bar');
            
            let progress = (completedItems.length / allItems.length) * 100;
            progressBar.value = progress;
        }