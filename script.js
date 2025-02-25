const apiKey = "14c2f93a6ce74dbabbc223921252502"; // Replace with your real API key
const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=41.9981,21.4254&aqi=no`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        let temp = data.current.temp_c;
        let weatherDesc = data.current.condition.text;
        let weatherInfo = `🌡️ ${temp}°C - ${weatherDesc}`;
        document.getElementById("weather-info").textContent = weatherInfo;

        // Dynamic CTA based on temperature
        let ctaMessage = "";
        if (temp < 5) {
            ctaMessage = "❄️ Брр! Надвор е студено, време е да си се обезбедите со огрев!";
        } else if (temp >= 5 && temp < 20) {
            ctaMessage = "🌤️ Пријатна температура денес. Но, бидете подготвени за студени ноќи! Купете си брикети навреме!";
        } else {
            ctaMessage = "☀️ Топло време денес! Сепак, навечер може да треба греење! Подгответе се во случај да залади!";
        }

        document.getElementById("weather-cta").textContent = ctaMessage;
    })
    .catch(() => {
        document.getElementById("weather-info").textContent = "Грешка при вчитување.";
        document.getElementById("weather-cta").textContent = "⛔ Не можеме да ја преземеме временската прогноза во моментов.";
    });

// 2️⃣ Fade-in Effect (No Issues, Just Placed Below Weather Fetch)
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(element => observer.observe(element));

// 3️⃣ Price Calculator (Move Inside an Event Listener for Performance)
document.addEventListener("DOMContentLoaded", () => {
    const quantityInput = document.getElementById("quantity");
    if (quantityInput) {
        quantityInput.addEventListener("input", function() {
            let pricePerKg = 15; // Example price: 15 den/kg
            let quantity = parseInt(this.value);
            let totalPrice = quantity * pricePerKg;
            document.getElementById("total-price").textContent = totalPrice;
        });
    }
});

// 4️⃣ Lightbox Function (No Issues, Just Placed at the Bottom)
function openLightbox(src) {
    let lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${src}" class="lightbox-img">`;
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightbox.firstChild) {
            lightbox.remove();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            lightbox.remove();
        }
    }, { once: true });
}
