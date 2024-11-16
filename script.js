const tooltip = document.getElementById("tooltip");
      const tooltipImage = document.getElementById("tooltip-image");
      const tooltipName = document.getElementById("tooltip-name");

      document.querySelectorAll("area").forEach((area) => {
        area.addEventListener("mouseenter", (e) => {
          const name = area.dataset.name;
          const imgSrc = area.dataset.img;

          tooltipImage.src = imgSrc;
          tooltipName.textContent = name;

          tooltip.style.display = "block";
        });

        area.addEventListener("mousemove", (e) => {
          tooltip.style.left = `${e.pageX + 15}px`;
          tooltip.style.top = `${e.pageY + 15}px`;
        });

        area.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
      });