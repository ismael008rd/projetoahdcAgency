        document.addEventListener("DOMContentLoaded", function () {
            let circleA = new ProgressBar.Circle(document.getElementById("circleA"), {
                color: "#64DAF9",
                strokeWidth: 8,
                duration: 1400,
                from: { color: '#AAA' },
                to: { color: '#65DAF9' },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);

                    let value = Math.round(circle.value() * 60);
                    circle.setText(value);
                }
            });
            let circleB = new ProgressBar.Circle(document.getElementById("circleB"), {
                color: "#64DAF9",
                strokeWidth: 8,
                duration: 1600,
                from: { color: '#AAA' },
                to: { color: '#65DAF9' },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);

                    let value = Math.round(circle.value() * 254);
                    circle.setText(value);
                }
            });
            let circleC = new ProgressBar.Circle(document.getElementById("circleC"), {
                color: "#64DAF9",
                strokeWidth: 8,
                duration: 2000,
                from: { color: '#AAA' },
                to: { color: '#65DAF9' },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);

                    let value = Math.round(circle.value() * 32);
                    circle.setText(value);
                }
            });
            let circleD = new ProgressBar.Circle(document.getElementById("circleD"), {
                color: "#64DAF9",
                strokeWidth: 8,
                duration: 2000,
                from: { color: '#AAA' },
                to: { color: '#65DAF9' },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);

                    let value = Math.round(circle.value() * 5243);
                    circle.setText(value);
                }
            });
            
            // iniciando o loader quanto o usuario chega no elemento
            let dataAreaOffset = document
              .getElementById("data-area")
              .getBoundingClientRect();
            let stop = 0;

            window.addEventListener("scroll", function () {
              let scroll = window.scrollY;
              if (scroll > dataAreaOffset.top - 500 && stop == 0) {
                // Animar os círculos
                circleA.animate(1.0);
                circleB.animate(1.0);
                circleC.animate(1.0);
                circleD.animate(1.0);

                stop = 1;
              }
            });

            // parallax

            setTimeout(() => {
                const dataArea = document.querySelector('#data-area');
                dataArea.style.backgroundImage = 'url("img/cidadeparallax.png")';
                dataArea.style.backgroundAttachment = 'fixed';
                dataArea.style.backgroundSize = 'cover';
                dataArea.style.backgroundPosition = 'center';
                const applyArea = document.querySelector('#apply-area');
                applyArea.style.backgroundImage = 'url("img/pattern.png")';
                applyArea.style.backgroundAttachment = 'fixed';
                applyArea.style.backgroundSize = 'cover';
                applyArea.style.backgroundPosition = 'center';
            }, 250);
            



            // filtro buttons

            const filterBtns = document.querySelectorAll('.filter-btn');
            const projectBoxes = document.querySelectorAll('.project-box');
      
            filterBtns.forEach(button => {
              button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
      
                filterBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
      
                projectBoxes.forEach(box => {
                  const boxClasses = Array.from(box.classList);
                  boxClasses.shift();

               
                  if (filter === 'all' || boxClasses.includes(filter)) {
                    box.style.display = 'block';
                  } else {
                    box.style.display = 'none';
                  }
                });
              });
            });
     });
            