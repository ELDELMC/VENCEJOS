// CONSTANTES DE PRODUCTOS DISPONIBLES
const PRODUCTS = {
    1: { name: "Pañoleta de la Esperanza", price: 25000, img: "assets/product-scarf.png" },
    2: { name: "Kit Táctico de Superación", price: 35000, img: "assets/product-tactical.png" },
    3: { name: "Escultura Vencejo en Vuelo", price: 80000, img: "assets/product-craft.png" }
};

// ESTADO GLOBAL DE LA APLICACIÓN (CARRITO)
let cart = {};

// INICIALIZACIÓN AL CARGAR EL DOM
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initScrollEffects();
    initImpactCounters();
    initGalleryFilters();
    initTestimonialsCarousel();
    initVideoPlayer();
    initDonationForm();
    initContactForm();
    initCartDOM();
    initCheckoutDOM();
    loadCartFromLocalStorage();
});

/* ==========================================================================
   1. NAVEGACIÓN Y MENÚ MÓVIL
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Efecto Scroll en Cabecera
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Toggle Menú Móvil
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            hamburger.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", isOpen);
        });
    }

    // Cerrar Menú al hacer click en enlaces & actualizar enlace activo
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            if (navMenu.classList.contains("open")) {
                navMenu.classList.remove("open");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });
}

/* ==========================================================================
   2. EFECTOS DE SCROLL Y ANIMACIONES (SCROLL REVEAL)
   ========================================================================== */
function initScrollEffects() {
    const revealElements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Animación ocurre solo una vez
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   3. CONTADORES DE IMPACTO ANIMADOS
   ========================================================================== */
function initImpactCounters() {
    const counterElements = document.querySelectorAll(".counter-number, .impact-number");

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute("data-target"), 10);
        const duration = 2000; // 2 segundos
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = "+" + target;
                clearInterval(timer);
            } else {
                element.textContent = "+" + Math.floor(current);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counterElements.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   4. FILTROS DE GALERÍA MASONRY
   ========================================================================== */
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Activar botón
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryItems.forEach(item => {
                const category = item.getAttribute("data-category");
                
                if (filterValue === "all" || category === filterValue) {
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                }
            });
        });
    });
}

/* ==========================================================================
   5. CARRUSEL DE TESTIMONIOS
   ========================================================================== */
function initTestimonialsCarousel() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    const prevBtn = document.getElementById("prev-testimonial");
    const nextBtn = document.getElementById("next-testimonial");
    let currentIndex = 0;
    let autoSlideInterval;

    if (slides.length === 0) return;

    const goToSlide = (index) => {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    // Click en Controles
    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoSlide(); });

    // Click en Puntos
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            goToSlide(idx);
            resetAutoSlide();
        });
    });

    // Desplazamiento Automático
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 6000); // Cambiar cada 6 segundos
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    startAutoSlide();
}

/* ==========================================================================
   6. LAZY LOADING Y CONTENEDOR DE VIDEOS
   ========================================================================== */
function initVideoPlayer() {
    const playBtn = document.getElementById("play-video-btn");
    const videoWrapper = document.getElementById("video-wrapper");
    const videoIframeContainer = document.getElementById("video-iframe-container");

    if (playBtn && videoWrapper && videoIframeContainer) {
        playBtn.addEventListener("click", () => {
            // Reemplazar miniatura con el Iframe incrustado (Carga bajo demanda / Lazy loading)
            videoWrapper.style.display = "none";
            videoIframeContainer.style.display = "block";
            
            // Simular un embed de YouTube ilustrativo sobre fundaciones y superación
            videoIframeContainer.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Video Institucional Fundación Vive Vencejo" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            `;
        });
    }
}

/* ==========================================================================
   7. FORMULARIO DE DONACIÓN
   ========================================================================== */
function initDonationForm() {
    const amountButtons = document.querySelectorAll(".amount-btn");
    const customAmountBox = document.getElementById("custom-amount-box");
    const customAmountInput = document.getElementById("custom-amount-input");
    const donateSubmitBtn = document.getElementById("donate-submit-btn");
    let currentAmount = 20000;
    let isCustom = false;

    amountButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            amountButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            if (btn.getAttribute("data-custom") === "true") {
                customAmountBox.style.display = "block";
                isCustom = true;
                customAmountInput.focus();
            } else {
                customAmountBox.style.display = "none";
                isCustom = false;
                currentAmount = parseInt(btn.getAttribute("data-amount"), 10);
            }
        });
    });

    if (donateSubmitBtn) {
        donateSubmitBtn.addEventListener("click", () => {
            if (isCustom) {
                const customVal = parseInt(customAmountInput.value, 10);
                if (isNaN(customVal) || customVal < 5000) {
                    showToast("Por favor, ingresa un monto válido a donar (mínimo $5.000 COP).", "error");
                    return;
                }
                currentAmount = customVal;
            }

            // Simular checkout seguro
            showToast(`Redirigiendo a pasarela segura para donar $${currentAmount.toLocaleString()} COP. ¡Gracias por tu gran corazón!`, "success");
            
            // Simulación de redirección después de 2.5s
            setTimeout(() => {
                window.open(`https://wa.me/573104967407?text=Hola%20Fundaci%C3%B3n%20Vive%20Vencejo%2C%20quiero%20hacer%20un%20aporte%20solidario%20de%20$${currentAmount.toLocaleString()}%20COP%20para%20los%20programas%20sociales.`, '_blank');
            }, 2500);
        });
    }
}

/* ==========================================================================
   8. FORMULARIO DE CONTACTO FUNCIONAL
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value;
            const message = document.getElementById("contact-message").value.trim();

            if (!name || !email || !subject || !message) {
                showToast("Por favor, rellena todos los campos obligatorios.", "error");
                return;
            }

            // Enviar/Simular envío exitoso
            showToast(`Mensaje enviado con éxito. Gracias ${name}, nos contactaremos contigo lo antes posible.`, "success");
            contactForm.reset();
        });
    }
}

/* ==========================================================================
   9. SISTEMA DE CARRITO DE COMPRAS SOLIDARIO (LÓGICA + DOM)
   ========================================================================== */
function initCartDOM() {
    const cartTrigger = document.getElementById("cart-trigger");
    const cartTriggerMobile = document.getElementById("cart-trigger-mobile");
    const cartClose = document.getElementById("cart-close");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartGoShop = document.getElementById("cart-go-shop");

    const toggleCart = () => {
        const isOpen = cartSidebar.classList.toggle("open");
        cartOverlay.classList.toggle("open");
        cartSidebar.setAttribute("aria-hidden", !isOpen);
    };

    if (cartTrigger) cartTrigger.addEventListener("click", toggleCart);
    if (cartTriggerMobile) cartTriggerMobile.addEventListener("click", toggleCart);
    if (cartClose) cartClose.addEventListener("click", toggleCart);
    if (cartOverlay) cartOverlay.addEventListener("click", toggleCart);
    if (cartGoShop) cartGoShop.addEventListener("click", (e) => { e.preventDefault(); toggleCart(); window.location.hash = "#tienda"; });
}

// Agregar Item al Carrito
window.addToCart = function(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = {
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        };
    }

    saveCartToLocalStorage();
    renderCart();
    updateCartBadge();
    showToast(`"${product.name}" añadido al carrito de compras solidario.`, "success");
};

// Cambiar cantidad en el carrito
window.updateQty = function(productId, delta) {
    if (!cart[productId]) return;

    cart[productId].quantity += delta;

    if (cart[productId].quantity <= 0) {
        delete cart[productId];
        showToast("Producto eliminado del carrito.", "success");
    }

    saveCartToLocalStorage();
    renderCart();
    updateCartBadge();
};

// Eliminar producto por completo
window.removeItem = function(productId) {
    if (cart[productId]) {
        delete cart[productId];
        saveCartToLocalStorage();
        renderCart();
        updateCartBadge();
        showToast("Producto eliminado del carrito.", "success");
    }
};

// Renderizar contenido del carrito
function renderCart() {
    const container = document.getElementById("cart-items-container");
    const footer = document.getElementById("cart-footer");
    const emptyMsg = document.getElementById("cart-empty-msg");
    const subtotalText = document.getElementById("cart-subtotal");

    const productIds = Object.keys(cart);

    if (productIds.length === 0) {
        container.innerHTML = "";
        container.appendChild(emptyMsg);
        emptyMsg.style.display = "block";
        footer.style.display = "none";
        return;
    }

    emptyMsg.style.display = "none";
    footer.style.display = "block";
    container.innerHTML = "";

    let subtotal = 0;

    productIds.forEach(id => {
        const item = cart[id];
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toLocaleString()} COP</p>
                <div class="cart-item-qty-row">
                    <div class="qty-selectors">
                        <button class="qty-btn" onclick="updateQty(${id}, -1)" aria-label="Disminuir cantidad">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQty(${id}, 1)" aria-label="Aumentar cantidad">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeItem(${id})" aria-label="Eliminar ${item.name}"><i class="fa-solid fa-trash-can"></i> Quitar</button>
                </div>
            </div>
        `;
        container.appendChild(cartItemDiv);
    });

    subtotalText.textContent = `$${subtotal.toLocaleString()} COP`;
}

// Actualizar Contador de Icono de Carrito
function updateCartBadge() {
    const badge = document.getElementById("cart-count");
    const badgeMobile = document.getElementById("cart-count-mobile");
    const productIds = Object.keys(cart);
    let totalItems = 0;

    productIds.forEach(id => {
        totalItems += cart[id].quantity;
    });

    badge.textContent = totalItems;
    badgeMobile.textContent = totalItems;

    const trigger = document.getElementById("cart-trigger");
    const triggerMobile = document.getElementById("cart-trigger-mobile");

    trigger.setAttribute("aria-label", `Ver carrito de compras, ${totalItems} artículos`);
    triggerMobile.setAttribute("aria-label", `Ver carrito de compras, ${totalItems} artículos`);
}

// Local Storage Helpers
function saveCartToLocalStorage() {
    localStorage.setItem("vive_vencejo_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const stored = localStorage.getItem("vive_vencejo_cart");
    if (stored) {
        try {
            cart = JSON.parse(stored);
            renderCart();
            updateCartBadge();
        } catch (e) {
            cart = {};
        }
    }
}

/* ==========================================================================
   10. MODAL DE CHECKOUT Y PASARELA DE PAGO SIMULADA
   ========================================================================== */
function initCheckoutDOM() {
    const btnCheckout = document.getElementById("btn-checkout-trigger");
    const btnCheckoutWA = document.getElementById("btn-checkout-wa");
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutOverlay = document.getElementById("checkout-overlay");
    const checkoutClose = document.getElementById("checkout-close");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay");
    const checkoutForm = document.getElementById("checkout-form");

    const toggleCheckout = () => {
        const isOpen = checkoutModal.classList.toggle("open");
        checkoutOverlay.classList.toggle("open");
        checkoutModal.setAttribute("aria-hidden", !isOpen);
    };

    if (btnCheckout) {
        btnCheckout.addEventListener("click", () => {
            // Cerrar Carrito
            cartSidebar.classList.remove("open");
            cartOverlay.classList.remove("open");
            
            // Render Resumen de Checkout
            renderCheckoutSummary();
            
            // Abrir Checkout Modal
            toggleCheckout();
        });
    }

    if (checkoutClose) checkoutClose.addEventListener("click", toggleCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener("click", toggleCheckout);

    // Finalizar Pedido por WhatsApp
    if (btnCheckoutWA) {
        btnCheckoutWA.addEventListener("click", () => {
            enviarPedidoWhatsApp();
        });
    }

    // Cambiar Tabs de Métodos de Pago
    const tabs = document.querySelectorAll(".payment-tab");
    const tabContents = document.querySelectorAll(".payment-details-tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(c => c.style.display = "none");
            
            if (tab.id === "tab-card") {
                document.getElementById("content-card").style.display = "block";
            } else if (tab.id === "tab-pse") {
                document.getElementById("content-pse").style.display = "block";
            } else if (tab.id === "tab-delivery") {
                document.getElementById("content-delivery").style.display = "block";
            }
        });
    });

    // Formulario de Pago Enviar
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("checkout-name").value.trim();
            const email = document.getElementById("checkout-email").value.trim();
            const phone = document.getElementById("checkout-phone").value.trim();
            const address = document.getElementById("checkout-address").value.trim();

            if (!name || !email || !phone || !address) {
                showToast("Por favor, completa los campos requeridos.", "error");
                return;
            }

            // Simulación éxito pago
            showToast(`¡Transacción Procesada Exitosamente! Gracias ${name} por apoyar la Fundación Vive Vencejo. Te llegará un correo de confirmación.`, "success");
            
            // Vaciar Carrito
            cart = {};
            saveCartToLocalStorage();
            renderCart();
            updateCartBadge();
            
            // Cerrar Modal
            toggleCheckout();
        });
    }
}

// Render del resumen en el Checkout
function renderCheckoutSummary() {
    const listContainer = document.getElementById("checkout-items-list");
    const totalVal = document.getElementById("checkout-total-val");
    const productIds = Object.keys(cart);
    
    listContainer.innerHTML = "";
    let total = 0;

    productIds.forEach(id => {
        const item = cart[id];
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const summaryItemDiv = document.createElement("div");
        summaryItemDiv.className = "checkout-summary-item";
        summaryItemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${itemTotal.toLocaleString()} COP</span>
        `;
        listContainer.appendChild(summaryItemDiv);
    });

    totalVal.textContent = `$${total.toLocaleString()} COP`;
}

// Crear plantilla y link de WhatsApp para checkout directo
function enviarPedidoWhatsApp() {
    const productIds = Object.keys(cart);
    if (productIds.length === 0) return;

    let mensaje = "Hola Fundación Vive Vencejo, quiero realizar un pedido solidario de los siguientes productos:\n\n";
    let total = 0;

    productIds.forEach(id => {
        const item = cart[id];
        const sub = item.price * item.quantity;
        total += sub;
        mensaje += `• *${item.name}* (x${item.quantity}) - $${sub.toLocaleString()} COP\n`;
    });

    mensaje += `\n*TOTAL A PAGAR:* $${total.toLocaleString()} COP\n\n`;
    mensaje += "Quedo atento para acordar los detalles de pago y envío. ¡Muchas gracias!";

    const encodedMsg = encodeURIComponent(mensaje);
    window.open(`https://wa.me/573104967407?text=${encodedMsg}`, "_blank");
}

/* ==========================================================================
   11. SISTEMA DINÁMICO DE NOTIFICACIONES (TOAST)
   ========================================================================== */
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    const icon = type === "success" 
        ? '<i class="fa-solid fa-circle-check" style="color: #22c55e;"></i>' 
        : '<i class="fa-solid fa-circle-xmark" style="color: #ef4444;"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    // Desaparecer después de 4 segundos
    setTimeout(() => {
        toast.style.animation = "slideInToast 0.3s ease-in reverse forwards";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}
