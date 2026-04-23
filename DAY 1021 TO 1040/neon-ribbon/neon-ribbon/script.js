 "use strict";

      const CONFIG = {
        SPEED_X: 0.15,
        SPEED_Y: 0.15,
        MAX_LENGTH: 120,
        RED_STEP: 0.02,
        GREEN_STEP: 0.015,
        BLUE_STEP: 0.025,
        SPREAD_LIMIT: 20,
      };

      const canvas = document.getElementById("ribbon");
      const ctx = canvas.getContext("2d");

      let animation = 0;
      const points = [];
      const mouse = { x: 0, y: 0 };
      const prevMouse = { x: 0, y: 0 };
      const colorState = { red: 0, green: 255, blue: 255, size: 0 };

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      function spreadPoint(p) {
        p.x += p.dx;
        p.y += p.dy;
      }

      function drawLines() {
        const total = points.length;
        if (total < 3) return;

        let p0, p1, p2;

        for (let i = total - 1; i > 1; i--) {
          p0 = points[i];
          p1 = points[i - 1];
          p2 = points[i - 2];

          ctx.beginPath();
          ctx.strokeStyle = p0.color;
          ctx.lineWidth = p0.size;
          ctx.globalAlpha = i / total;

          ctx.moveTo((p1.x + p0.x) / 2, (p1.y + p0.y) / 2);
          ctx.quadraticCurveTo(
            p1.x,
            p1.y,
            (p1.x + p2.x) / 2,
            (p1.y + p2.y) / 2
          );

          ctx.stroke();

          spreadPoint(p0);
        }

        if (points[0]) spreadPoint(points[0]);
        if (points[total - 1]) spreadPoint(points[total - 1]);
      }

      function draw() {
        const mouseX = mouse.x;
        const mouseY = mouse.y;
        const px = prevMouse.x;
        const py = prevMouse.y;

        let dx = (mouseX - px) * CONFIG.SPEED_X;
        let dy = (mouseY - py) * CONFIG.SPEED_Y;

        const limit = CONFIG.SPREAD_LIMIT;
        if (dx < -limit) dx = -limit;
        if (dx > limit) dx = limit;
        if (dy < -limit) dy = -limit;
        if (dy > limit) dy = limit;

        prevMouse.x = mouseX;
        prevMouse.y = mouseY;

        colorState.size += 0.125;
        colorState.red += CONFIG.RED_STEP;
        colorState.green += CONFIG.GREEN_STEP;
        colorState.blue += CONFIG.BLUE_STEP;

        const size = Math.abs(Math.sin(colorState.size) * 10) + 1;
        const r = Math.floor(Math.sin(colorState.red) * 128 + 128);
        const g = Math.floor(Math.sin(colorState.green) * 128 + 128);
        const b = Math.floor(Math.sin(colorState.blue) * 128 + 128);

        points.push({
          x: mouseX,
          y: mouseY,
          dx,
          dy,
          size,
          color: `rgb(${r}, ${g}, ${b})`,
        });

        if (points.length > CONFIG.MAX_LENGTH) points.shift();

        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "lighter";
        drawLines();
        drawLines();
        drawLines();

        animation = requestAnimationFrame(draw);
      }

      function handleMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      function handleTouchMove(e) {
        e.preventDefault();
        if (!e.touches || !e.touches[0]) return;
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });

      mouse.x = window.innerWidth / 2;
      mouse.y = window.innerHeight / 2;
      prevMouse.x = window.innerWidth / 2;
      prevMouse.y = window.innerHeight / 2;

      draw();

      window.addEventListener("pagehide", () => cancelAnimationFrame(animation));