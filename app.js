// CONSTANTES DE PRODUCTOS DISPONIBLES
const PRODUCTS = {
    1: { name: "Pañoleta de la Esperanza",      price: 25000,  img: "assets/product-scarf.png", imgs: ["assets/product-scarf.png", "assets/product-craft.png"] },
    2: { name: "Kit Táctico de Superación",      price: 35000,  img: "assets/product-tactical.png", imgs: ["assets/product-tactical.png", "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=600&auto=format&fit=crop"] },
    3: { name: "Escultura Vencejo en Vuelo",     price: 80000,  img: "assets/product-craft.png", imgs: ["assets/product-craft.png", "https://images.unsplash.com/photo-1595424954374-1c4fb246cf7a?q=80&w=600&auto=format&fit=crop"] },
    // EPP — Equipo de Protección Personal
    4: { name: "Taser Eléctrico Táctico",        price: 85000,  img: "assets/product-taser.png", imgs: ["assets/product-taser.png", "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?q=80&w=600&auto=format&fit=crop"] },
    5: { name: "Gas Pimienta Compacto",          price: 28000,  img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1508847154043-be12a26c451e?q=80&w=600&auto=format&fit=crop"] },
    6: { name: "Bastón Tambo Telescópico",       price: 48000,  img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=600&auto=format&fit=crop"] },
    7: { name: "Chaleco Antibalas Niv. IIIA",    price: 320000, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1509702719782-b7e61f22df67?q=80&w=600&auto=format&fit=crop"] },
    8: { name: "Navaja Táctica Plegable",        price: 55000,  img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop"] },
    9: { name: "Linterna Táctica LED 1200lm",    price: 65000,  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1587300003306-d7b45eacfe6b?q=80&w=600&auto=format&fit=crop"] },
    10: { name: "Morral Táctico Modular 45L",   price: 125000, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop"] },
    11: { name: "Placa Militar Personalizada",   price: 22000,  img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"] },
    12: { name: "Pantalón Camuflado Digital",    price: 98000,  img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=200&auto=format&fit=crop", imgs: ["https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&auto=format&fit=crop", "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop"] }
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
   1. NAVEGACIÓN Y TABS ORGANIZACIONALES
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger-menu");
    const orgTabsNav = document.getElementById("org-tabs-nav");
    const orgTabs = document.querySelectorAll(".org-tab");
    const orgPanels = document.querySelectorAll(".org-panel");

    // Efecto Scroll en Cabecera
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Lógica de cambio de tabs organizacionales
    orgTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetPanelId = tab.getAttribute("data-panel");

            // Si el panel no existe en la página actual (ej. estamos en tienda.html), redirigir a index.html con el hash
            if (targetPanelId && !document.getElementById(targetPanelId)) {
                window.location.href = "index.html#" + targetPanelId;
                return;
            }

            // Actualizar tabs activos
            orgTabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            // Mostrar panel correspondiente, ocultar el resto
            orgPanels.forEach(panel => {
                panel.classList.remove("active");
            });
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add("active");
                // Scroll suave al inicio del panel
                targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            // Cerrar menú móvil si está abierto
            if (orgTabsNav && orgTabsNav.classList.contains("open")) {
                orgTabsNav.classList.remove("open");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Toggle Menú Móvil (hamburguesa)
    if (hamburger && orgTabsNav) {
        hamburger.addEventListener("click", () => {
            const isOpen = orgTabsNav.classList.toggle("open");
            hamburger.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", isOpen);
        });
    }

    // Seleccionar automáticamente tab en base al hash de la URL al cargar
    const currentHash = window.location.hash;
    if (currentHash) {
        const targetPanelId = currentHash.substring(1);
        const targetTab = Array.from(orgTabs).find(t => t.getAttribute("data-panel") === targetPanelId);
        if (targetTab) {
            // Un pequeño delay para permitir que el DOM se asiente
            setTimeout(() => {
                targetTab.click();
            }, 100);
        }
    }
}


/* ==========================================================================
   2. EFECTOS DE SCROLL Y ANIMACIONES (SCROLL REVEAL)
   ========================================================================== */
function initScrollEffects() {
    const revealElements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    // Exportar para uso en catalog.js
    window._scrollObserver = observer;

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

// LOGICA DE CARRUSEL DE TARJETAS DE PRODUCTOS
window.changeCardImage = function(btn, delta) {
    const card = btn.closest(".product-card-item");
    if (!card) return;
    const slides = card.querySelectorAll(".product-gallery-slide");
    if (slides.length <= 1) return;
    
    let activeIdx = -1;
    slides.forEach((slide, idx) => {
        if (slide.classList.contains("active")) {
            activeIdx = idx;
        }
    });
    
    if (activeIdx !== -1) {
        slides[activeIdx].classList.remove("active");
        const newIdx = (activeIdx + delta + slides.length) % slides.length;
        slides[newIdx].classList.add("active");
    }
};

// Eventos automáticos de Hover para cambio de plano de imagen
document.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".product-card-item");
    if (!card) return;
    
    const related = e.relatedTarget;
    if (related && card.contains(related)) return;
    
    const slides = card.querySelectorAll(".product-gallery-slide");
    if (slides.length > 1) {
        slides.forEach(s => s.classList.remove("active"));
        slides[1].classList.add("active");
    }
});

document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".product-card-item");
    if (!card) return;
    
    const related = e.relatedTarget;
    if (related && card.contains(related)) return;
    
    const slides = card.querySelectorAll(".product-gallery-slide");
    if (slides.length > 0) {
        slides.forEach(s => s.classList.remove("active"));
        slides[0].classList.add("active");
    }
});
