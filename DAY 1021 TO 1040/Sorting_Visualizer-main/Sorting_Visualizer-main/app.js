class SortingVisualizer {
    constructor() {
        this.array = [];
        this.arraySize = 50;
        this.animationSpeed = 5;
        this.isPlaying = false;
        this.isPaused = false;
        this.currentAlgorithm = 'bubble';
        this.animationId = null;
        this.timeoutId = null;
        
        // Statistics
        this.comparisons = 0;
        this.swaps = 0;
        this.arrayAccess = 0;
        this.startTime = 0;
        
        // Algorithm data
        this.algorithms = {
            bubble: {
                name: "Bubble Sort",
                timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
                spaceComplexity: "O(1)",
                description: "Repeatedly compares adjacent elements and swaps them if they are in wrong order"
            },
            selection: {
                name: "Selection Sort", 
                timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
                spaceComplexity: "O(1)",
                description: "Finds the minimum element and places it at the beginning"
            },
            insertion: {
                name: "Insertion Sort",
                timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
                spaceComplexity: "O(1)",
                description: "Builds the final sorted array one item at a time"
            },
            merge: {
                name: "Merge Sort",
                timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
                spaceComplexity: "O(n)",
                description: "Divides the array into halves, sorts them, and merges back"
            },
            quick: {
                name: "Quick Sort",
                timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)" },
                spaceComplexity: "O(log n)",
                description: "Selects a pivot element and partitions the array around it"
            }
        };
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindEvents();
                this.generateRandomArray();
                this.updateAlgorithmInfo();
                this.updateStatistics();
            });
        } else {
            this.bindEvents();
            this.generateRandomArray();
            this.updateAlgorithmInfo();
            this.updateStatistics();
        }
    }
    
    bindEvents() {
        // Algorithm selection
        document.querySelectorAll('.algorithm-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.isPlaying) {
                    this.selectAlgorithm(e.target.dataset.algorithm);
                }
            });
        });
        
        // Array size control
        const arraySizeSlider = document.getElementById('array-size');
        if (arraySizeSlider) {
            arraySizeSlider.addEventListener('input', (e) => {
                if (!this.isPlaying) {
                    this.arraySize = parseInt(e.target.value);
                    document.getElementById('array-size-value').textContent = this.arraySize;
                    this.generateRandomArray();
                }
            });
        }
        
        // Speed control
        const speedSlider = document.getElementById('speed');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                this.animationSpeed = parseInt(e.target.value);
                document.getElementById('speed-value').textContent = this.animationSpeed;
            });
        }
        
        // Control buttons
        const playBtn = document.getElementById('play-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const resetBtn = document.getElementById('reset-btn');
        const generateBtn = document.getElementById('generate-array');
        
        if (playBtn) playBtn.addEventListener('click', () => this.play());
        if (pauseBtn) pauseBtn.addEventListener('click', () => this.pause());
        if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                if (!this.isPlaying) {
                    this.generateRandomArray();
                }
            });
        }
    }
    
    selectAlgorithm(algorithm) {
        document.querySelectorAll('.algorithm-btn').forEach(btn => btn.classList.remove('active'));
        const selectedBtn = document.querySelector(`[data-algorithm="${algorithm}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }
        this.currentAlgorithm = algorithm;
        this.updateAlgorithmInfo();
        this.reset();
    }
    
    generateRandomArray() {
        this.array = [];
        for (let i = 0; i < this.arraySize; i++) {
            this.array.push(Math.floor(Math.random() * 350) + 10);
        }
        this.renderArray();
        this.resetStatistics();
    }
    
    renderArray() {
        const container = document.getElementById('array-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        const containerWidth = container.offsetWidth || 800;
        const maxWidth = Math.max(4, Math.floor((containerWidth - (this.array.length * 2)) / this.array.length));
        
        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${value}px`;
            bar.style.width = `${maxWidth}px`;
            bar.setAttribute('data-index', index);
            bar.textContent = this.arraySize <= 30 ? value : '';
            container.appendChild(bar);
        });
    }
    
    updateAlgorithmInfo() {
        const algo = this.algorithms[this.currentAlgorithm];
        if (!algo) return;
        
        const currentAlgoEl = document.getElementById('current-algorithm');
        const descEl = document.getElementById('algorithm-description');
        const bestCaseEl = document.getElementById('best-case');
        const avgCaseEl = document.getElementById('average-case');
        const worstCaseEl = document.getElementById('worst-case');
        const spaceComplexityEl = document.getElementById('space-complexity');
        
        if (currentAlgoEl) currentAlgoEl.textContent = algo.name;
        if (descEl) descEl.textContent = algo.description;
        if (bestCaseEl) bestCaseEl.textContent = algo.timeComplexity.best;
        if (avgCaseEl) avgCaseEl.textContent = algo.timeComplexity.average;
        if (worstCaseEl) worstCaseEl.textContent = algo.timeComplexity.worst;
        if (spaceComplexityEl) spaceComplexityEl.textContent = algo.spaceComplexity;
    }
    
    resetStatistics() {
        this.comparisons = 0;
        this.swaps = 0;
        this.arrayAccess = 0;
        this.startTime = 0;
        this.updateStatistics();
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }
    }
    
    updateStatistics() {
        const comparisonsEl = document.getElementById('comparisons');
        const swapsEl = document.getElementById('swaps');
        const arrayAccessEl = document.getElementById('array-access');
        const timeElapsedEl = document.getElementById('time-elapsed');
        
        if (comparisonsEl) comparisonsEl.textContent = this.comparisons;
        if (swapsEl) swapsEl.textContent = this.swaps;
        if (arrayAccessEl) arrayAccessEl.textContent = this.arrayAccess;
        
        const elapsed = this.startTime ? Date.now() - this.startTime : 0;
        if (timeElapsedEl) timeElapsedEl.textContent = `${elapsed}ms`;
    }
    
    async play() {
        if (this.isPaused) {
            this.isPaused = false;
            this.updateControlButtons();
            return;
        }
        
        this.isPlaying = true;
        this.startTime = Date.now();
        this.updateControlButtons();
        
        document.body.classList.add('sorting');
        
        try {
            await this.runAlgorithm();
            await this.markAllAsSorted();
        } catch (error) {
            if (error.message !== 'Animation stopped') {
                console.error('Sorting error:', error);
            }
        }
        
        document.body.classList.remove('sorting');
        this.isPlaying = false;
        this.updateControlButtons();
    }
    
    pause() {
        this.isPaused = true;
        this.updateControlButtons();
    }
    
    reset() {
        this.isPlaying = false;
        this.isPaused = false;
        
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        
        document.body.classList.remove('sorting');
        this.clearBarClasses();
        this.resetStatistics();
        this.updateControlButtons();
    }
    
    updateControlButtons() {
        const playBtn = document.getElementById('play-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const resetBtn = document.getElementById('reset-btn');
        
        if (!playBtn || !pauseBtn || !resetBtn) return;
        
        if (this.isPlaying && !this.isPaused) {
            playBtn.disabled = true;
            pauseBtn.disabled = false;
            resetBtn.disabled = false;
        } else if (this.isPaused) {
            playBtn.disabled = false;
            pauseBtn.disabled = true;
            resetBtn.disabled = false;
        } else {
            playBtn.disabled = false;
            pauseBtn.disabled = true;
            resetBtn.disabled = false;
        }
    }
    
    clearBarClasses() {
        document.querySelectorAll('.array-bar').forEach(bar => {
            bar.className = 'array-bar';
        });
    }
    
    async runAlgorithm() {
        switch (this.currentAlgorithm) {
            case 'bubble':
                await this.bubbleSort();
                break;
            case 'selection':
                await this.selectionSort();
                break;
            case 'insertion':
                await this.insertionSort();
                break;
            case 'merge':
                await this.mergeSort(0, this.array.length - 1);
                break;
            case 'quick':
                await this.quickSort(0, this.array.length - 1);
                break;
        }
    }
    
    async delay() {
        const speed = 11 - this.animationSpeed;
        const delayTime = Math.max(10, speed * 15);
        
        return new Promise((resolve, reject) => {
            const checkPause = () => {
                if (!this.isPlaying) {
                    reject(new Error('Animation stopped'));
                    return;
                }
                
                if (this.isPaused) {
                    this.timeoutId = setTimeout(checkPause, 50);
                } else {
                    this.timeoutId = setTimeout(resolve, delayTime);
                }
            };
            checkPause();
        });
    }
    
    async highlightBars(indices, className, updateStats = true) {
        this.clearBarClasses();
        
        indices.forEach(index => {
            if (index >= 0 && index < this.array.length) {
                const bar = document.querySelector(`[data-index="${index}"]`);
                if (bar) {
                    bar.classList.add(className);
                }
            }
        });
        
        if (updateStats) {
            if (className === 'comparing') this.comparisons++;
            if (className === 'swapping') this.swaps++;
            this.arrayAccess += indices.length;
            this.updateStatistics();
        }
        
        await this.delay();
    }
    
    async swapElements(i, j) {
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        
        const bar1 = document.querySelector(`[data-index="${i}"]`);
        const bar2 = document.querySelector(`[data-index="${j}"]`);
        
        if (bar1 && bar2) {
            const temp = bar1.style.height;
            bar1.style.height = bar2.style.height;
            bar2.style.height = temp;
            
            const tempText = bar1.textContent;
            bar1.textContent = bar2.textContent;
            bar2.textContent = tempText;
        }
        
        this.swaps++;
        this.updateStatistics();
    }
    
    // Bubble Sort
    async bubbleSort() {
        const n = this.array.length;
        let totalOperations = 0;
        let completedOperations = 0;
        
        // Calculate total operations for progress
        for (let i = 0; i < n - 1; i++) {
            totalOperations += n - i - 1;
        }
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                await this.highlightBars([j, j + 1], 'comparing');
                
                if (this.array[j] > this.array[j + 1]) {
                    await this.highlightBars([j, j + 1], 'swapping', false);
                    await this.swapElements(j, j + 1);
                }
                
                completedOperations++;
                const progress = document.getElementById('progress-fill');
                if (progress) {
                    progress.style.width = `${(completedOperations / totalOperations) * 100}%`;
                }
            }
        }
    }
    
    // Selection Sort
    async selectionSort() {
        const n = this.array.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            
            for (let j = i + 1; j < n; j++) {
                await this.highlightBars([minIdx, j], 'comparing');
                
                if (this.array[j] < this.array[minIdx]) {
                    minIdx = j;
                }
            }
            
            if (minIdx !== i) {
                await this.highlightBars([i, minIdx], 'swapping', false);
                await this.swapElements(i, minIdx);
            }
            
            const progress = document.getElementById('progress-fill');
            if (progress) {
                progress.style.width = `${((i + 1) / n) * 100}%`;
            }
        }
    }
    
    // Insertion Sort
    async insertionSort() {
        const n = this.array.length;
        
        for (let i = 1; i < n; i++) {
            let j = i;
            
            while (j > 0) {
                await this.highlightBars([j - 1, j], 'comparing');
                
                if (this.array[j - 1] > this.array[j]) {
                    await this.highlightBars([j - 1, j], 'swapping', false);
                    await this.swapElements(j - 1, j);
                    j--;
                } else {
                    break;
                }
            }
            
            const progress = document.getElementById('progress-fill');
            if (progress) {
                progress.style.width = `${(i / (n - 1)) * 100}%`;
            }
        }
    }
    
    // Merge Sort
    async mergeSort(left, right) {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            await this.mergeSort(left, mid);
            await this.mergeSort(mid + 1, right);
            await this.merge(left, mid, right);
        }
    }
    
    async merge(left, mid, right) {
        const leftArr = this.array.slice(left, mid + 1);
        const rightArr = this.array.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            await this.highlightBars([left + i, mid + 1 + j], 'comparing');
            
            if (leftArr[i] <= rightArr[j]) {
                this.array[k] = leftArr[i];
                i++;
            } else {
                this.array[k] = rightArr[j];
                j++;
            }
            
            const bar = document.querySelector(`[data-index="${k}"]`);
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
                bar.textContent = this.arraySize <= 30 ? this.array[k] : '';
            }
            
            await this.highlightBars([k], 'swapping', false);
            k++;
        }
        
        while (i < leftArr.length) {
            this.array[k] = leftArr[i];
            const bar = document.querySelector(`[data-index="${k}"]`);
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
                bar.textContent = this.arraySize <= 30 ? this.array[k] : '';
            }
            i++;
            k++;
        }
        
        while (j < rightArr.length) {
            this.array[k] = rightArr[j];
            const bar = document.querySelector(`[data-index="${k}"]`);
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
                bar.textContent = this.arraySize <= 30 ? this.array[k] : '';
            }
            j++;
            k++;
        }
        
        const progress = document.getElementById('progress-fill');
        if (progress) {
            progress.style.width = `${Math.min(100, ((right + 1) / this.array.length) * 100)}%`;
        }
    }
    
    // Quick Sort
    async quickSort(low, high) {
        if (low < high) {
            const pi = await this.partition(low, high);
            
            await this.quickSort(low, pi - 1);
            await this.quickSort(pi + 1, high);
        }
    }
    
    async partition(low, high) {
        const pivot = this.array[high];
        let i = low - 1;
        
        await this.highlightBars([high], 'pivot');
        
        for (let j = low; j < high; j++) {
            await this.highlightBars([j, high], 'comparing');
            
            if (this.array[j] < pivot) {
                i++;
                if (i !== j) {
                    await this.highlightBars([i, j], 'swapping', false);
                    await this.swapElements(i, j);
                }
            }
        }
        
        if (i + 1 !== high) {
            await this.highlightBars([i + 1, high], 'swapping', false);
            await this.swapElements(i + 1, high);
        }
        
        return i + 1;
    }
    
    async markAllAsSorted() {
        for (let i = 0; i < this.array.length; i++) {
            const bar = document.querySelector(`[data-index="${i}"]`);
            if (bar) {
                bar.classList.remove('comparing', 'swapping', 'pivot');
                bar.classList.add('sorted');
            }
            await new Promise(resolve => setTimeout(resolve, 30));
        }
        
        const progress = document.getElementById('progress-fill');
        if (progress) {
            progress.style.width = '100%';
        }
    }
}

// Initialize the visualizer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SortingVisualizer();
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
          footer.style.opacity = '1';
        } else {
          footer.style.opacity = '0';
        }
      });
      
});