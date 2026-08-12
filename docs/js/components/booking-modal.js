(function () {
    const style = document.createElement('style');
    style.textContent = `
        .bm-overlay {
            position: fixed;
            inset: 0;
            background: rgba(68, 46, 36, 0.55);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            opacity: 0;
            transition: opacity 0.25s ease;
        }
        .bm-overlay.bm-visible {
            opacity: 1;
        }
        .bm-card {
            background: #F4EEE3;
            border-radius: 1.5rem;
            padding: 2.5rem 2rem 2rem;
            max-width: 26rem;
            width: 100%;
            position: relative;
            text-align: center;
            transform: translateY(14px);
            transition: transform 0.25s ease;
            font-family: 'Hind', sans-serif;
        }
        .bm-overlay.bm-visible .bm-card {
            transform: translateY(0);
        }
        .bm-close {
            position: absolute;
            top: 1rem;
            right: 1.25rem;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #946A57;
            line-height: 1;
            padding: 0.25rem 0.5rem;
        }
        .bm-close:hover { color: #442E24; }
        .bm-icon {
            color: #946A57;
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }
        .bm-title {
            font-family: 'Lora', serif;
            font-size: 1.35rem;
            color: #442E24;
            margin-bottom: 1rem;
            line-height: 1.3;
        }
        .bm-body {
            color: #442E24;
            font-size: 1rem;
            line-height: 1.65;
            margin-bottom: 1.75rem;
        }
        .bm-body strong { font-weight: 700; }
        .bm-btn {
            display: inline-block;
            background: #946A57;
            color: #ffffff;
            font-family: 'Hind', sans-serif;
            font-size: 1rem;
            padding: 0.75rem 2.25rem;
            border-radius: 2rem;
            border: none;
            cursor: pointer;
            transition: background 0.2s ease;
        }
        .bm-btn:hover { background: #7a5745; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.className = 'bm-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'bm-title');
    overlay.style.display = 'none';
    overlay.innerHTML = `
        <div class="bm-card">
            <button class="bm-close" aria-label="Close">&times;</button>
            <div class="bm-icon"><i class="fa-solid fa-heart"></i></div>
            <h2 class="bm-title" id="bm-title">Bookings are currently unavailable</h2>
            <p class="bm-body">
                I am currently on maternity leave and not taking new bookings at this time.
                <br><br>
                I look forward to welcoming you back in <strong>March 2027</strong>.
                <br><br>
                Thank you for your patience and support!
            </p>
            <button class="bm-btn">Got it</button>
        </div>
    `;
    document.body.appendChild(overlay);

    function openModal() {
        overlay.style.display = 'flex';
        overlay.offsetHeight; // force reflow for CSS transition
        overlay.classList.add('bm-visible');
        overlay.querySelector('.bm-close').focus();
    }

    function closeModal() {
        overlay.classList.remove('bm-visible');
        overlay.addEventListener('transitionend', function handler() {
            overlay.style.display = 'none';
            overlay.removeEventListener('transitionend', handler);
        });
    }

    overlay.querySelector('.bm-close').addEventListener('click', closeModal);
    overlay.querySelector('.bm-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('bm-visible')) closeModal();
    });

    // Intercept all planway.com booking links (capture phase catches dynamically rendered links too)
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href*="planway.com"]');
        if (link) {
            e.preventDefault();
            openModal();
        }
    }, true);
})();
