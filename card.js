
        let currentIndex = 1;  

        function showSlide1(index) {
            const slides = document.querySelectorAll('.card');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                }
            });
        }
        function nextSlide1() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card').length;
            showSlide1(currentIndex);
        }

        function prevSlide1() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card').length) % document.querySelectorAll('.card').length;
            showSlide1(currentIndex);
        }

        showSlide1(currentIndex);

        function showSlide2(index) {
            const slides = document.querySelectorAll('.card2');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } 
            });
        }


        function nextSlide2() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card2').length;
            showSlide2(currentIndex);
        }

        function prevSlide2() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card2').length) % document.querySelectorAll('.card2').length;
            showSlide2(currentIndex);
        }
        showSlide2(currentIndex);

        showSlide3(currentIndex);
        function showSlide3(index) {
            const slides = document.querySelectorAll('.card3');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } 
            });
        }


        function nextSlide3() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card3').length;
            showSlide3(currentIndex);
        }

        function prevSlide3() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card3').length) % document.querySelectorAll('.card3').length;
            showSlide3(currentIndex);
        }

        showSlide3(currentIndex);
        


        function showSlide4(index) {
            const slides = document.querySelectorAll('.card4');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                }
            });
        }
        function nextSlide4() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card4').length;
            showSlide4(currentIndex);
        }

        function prevSlide4() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card4').length) % document.querySelectorAll('.card4').length;
            showSlide4(currentIndex);
        }

        showSlide4(currentIndex);



        function showSlide5(index) {
            const slides = document.querySelectorAll('.card5');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                }
            });
        }
        function nextSlide5() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card5').length;
            showSlide5(currentIndex);
        }

        function prevSlide5() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card5').length) % document.querySelectorAll('.card5').length;
            showSlide5(currentIndex);
        }

        showSlide5(currentIndex);


        showSlide6(currentIndex);
        function showSlide6(index) {
            const slides = document.querySelectorAll('.card6');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } 
            });
        }


        function nextSlide6() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card6').length;
            showSlide6(currentIndex);
        }

        function prevSlide6() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card6').length) % document.querySelectorAll('.card6').length;
            showSlide6(currentIndex);
        }

        showSlide6(currentIndex);


        function showSlide7(index) {
            const slides = document.querySelectorAll('.card7');
            const totalSlides = slides.length;
            slides.forEach((slide, i) => {
                let slideOffset = (i - index) * 100;
                if (i === index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(1)`;
                    slide.style.zIndex = 1;
                } else if (i < index) {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                } else {
                    slide.style.transform = `translateX(${slideOffset}px) scale(0.8)`;
                    slide.style.zIndex = 0;
                }
            });
        }
        function nextSlide7() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.card7').length;
            showSlide7(currentIndex);
        }

        function prevSlide7() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.card7').length) % document.querySelectorAll('.card7').length;
            showSlide7(currentIndex);
        }

        showSlide7(currentIndex);