window.onload = () => {
    gsap.to(".info", {
      opacity: 0,
      display: "none",
      duration: 1,
      delay: 6
    });
    gsap.to("h1.three", {
      opacity: 1,
      display: "block",
      duration: 0.5,
      delay: 7
    });
  
    gsap.to("h1.three", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 7.5
    });
  
    gsap.to("h1.two", {
      opacity: 1,
      display: "block",
      duration: 0.5,
      delay: 8
    });
  
    gsap.to("h1.two", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 8.5
    });
  
    gsap.to("h1.one", {
      opacity: 1,
      display: "block",
      duration: 0.5,
      delay: 9
    });
  
    gsap.to("h1.one", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 9.5
    });
  
    gsap.to(".loader", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 10
    });
  
    gsap.to(".front", {
      left: "-100%",
      duration: 1.2,
      delay: 10.5,
      ease: "power2.inOut"
    });
  
    gsap.to(".front-shadow", {
      left: "-100%",
      duration: 0.8,
      delay: 10.5,
      ease: "power2.inOut"
    });
  
    gsap.to(".new-year", {
      left: "0",
      duration: 1,
      delay: 10.7,
      ease: "power2.inOut"
    });
  
    gsap.to("h1.greeting", {
      marginLeft: "0",
      duration: 1.5,
      delay: 11.3,
      ease: "power2.inOut"
    });
  
    gsap.to("h1.year", {
      marginTop: "0",
      duration: 2.5,
      delay: 12,
      ease: "power2.inOut"
    });
  
    const fireworks1 = document.querySelectorAll(".firework")[0];
    const fireworks2 = document.querySelectorAll(".firework")[1];
    const fireworks3 = document.querySelectorAll(".firework")[2];
    const fireworks4 = document.querySelectorAll(".firework")[3];
    const fireworks5 = document.querySelectorAll(".firework")[4];
    const fireworks6 = document.querySelectorAll(".firework")[5];
    const fireworks7 = document.querySelectorAll(".firework")[6];
    const fireworks8 = document.querySelectorAll(".firework")[7];
    const fireworks9 = document.querySelectorAll(".firework")[8];
    const fireworks10 = document.querySelectorAll(".firework")[9];
    const fireworks11 = document.querySelectorAll(".firework")[10];
    const fireworks12 = document.querySelectorAll(".firework")[11];
    const fireworks13 = document.querySelectorAll(".firework")[12];
    const fireworks14 = document.querySelectorAll(".firework")[13];
    const fireworks15 = document.querySelectorAll(".firework")[14];
    const fireworks16 = document.querySelectorAll(".firework")[15];
    const fireworks17 = document.querySelectorAll(".firework")[16];
    const fireworks18 = document.querySelectorAll(".firework")[17];
    const fireworks19 = document.querySelectorAll(".firework")[18];
    const fireworks20 = document.querySelectorAll(".firework")[19];
    const fireworks21 = document.querySelectorAll(".firework")[20];
    const fireworks22 = document.querySelectorAll(".firework")[21];
    const fireworks23 = document.querySelectorAll(".firework")[22];
  
    setInterval(() => {
      fireworks1.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks2.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks3.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks6.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks5.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks4.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks7.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks8.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks9.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks10.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks11.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks12.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks13.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks14.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks15.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks16.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks17.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks18.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks19.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks20.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks21.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * 100
      }px`;
      fireworks22.style = `top: ${Math.random() * window.innerHeight}px; left: ${
        Math.random() * window.innerWidth
      }px`;
      fireworks23.style = `top: ${Math.random() * window.innerWidth}px; left: ${
        Math.random() * window.innerWidth
      }px`;
    }, 1000);
  };
  