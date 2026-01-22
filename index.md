---
layout: home
title: "Backend, Sistem Tasarımı ve Otomasyon"
description: "Teoman Bas’ın Linux, Docker, CI/CD ve backend projelerini dÖkümante ettiği kişisel teknik web sitesi."

---

<!-- ===================== -->
<!-- HERO -->
<!-- ===================== -->
<section class="hero text-center d-flex flex-column justify-content-center align-items-center" style="min-height: 50vh; background: none;">
  <b class="display-3 fw-bold">
    <span id="terminal-text"></span><span class="cursor"> </span>
  </b>
  
  <p class="lead mt-2">
    Backend, sistem tasarımı ve otomasyon odaklı projeler geliştiriyorum.<br>
    Bu site; blog yazılarım, teknik notlarım ve açık kaynak çalışmalarım için kişisel merkezim.
  </p>
</section>

<!-- ===================== -->
<!-- STYLES -->
<!-- ===================== -->
  <link 
  rel="stylesheet" 
  href="{{ '/assets/css/cursor.css' | relative_url }}">

<!-- ===================== -->
<!-- JS -->
<!-- ===================== -->

 <script
    src="{{ '/assets/js/cursor.js' | relative_url }}">
  </script>
<!-- ===================== -->
<!-- ABOUT / INTRO -->
<!-- ===================== -->

<section class="container my-5">
  <h2>Bu Site Nedir?</h2>
  <p>
    <strong>teomanbas.com</strong> kişisel bir teknik günlük ve proje vitrini olarak
    tasarlanmıştır. Amaç:
  </p>

  <ul>
    <li>Teknik blog yazıları paylaşmak</li>
    <li>Gerçek projeleri dokümante etmek</li>
    <li>Deneyerek öğrenilen bilgileri kalıcı hale getirmek</li>
  </ul>

  <p>
    Kod örnekleri, mimari diyagramlar ve adım adım açıklamalarla ilerler.
  </p>
</section>

<!-- ===================== -->
<!-- FEATURE CARDS -->
<!-- ===================== -->
<section class="projects container my-5" id="projects">
  <div class="row g-4">
    <div class="col-md-4">
      <div class="project-card h-100">
        <h3>🧠 Blog</h3>
        <p>
          Linux, Docker, CI/CD, Jekyll, sistem tasarımı ve backend
          konularında teknik yazılar.
        </p>
        <a href="/blog/" class="project-link">Bloga git →</a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="project-card h-100">
        <h3>⚙️ Projeler</h3>
        <p>
          Freelance ve kişisel projeler, mimari açıklamalar ve
          kullanılan teknolojiler.
        </p>
        <a href="/projects/" class="project-link">Projeleri incele →</a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="project-card h-100">
        <h3>📦 Açık Kaynak</h3>
        <p>
          GitHub üzerinde paylaşılan scriptler, otomasyon araçları ve
          deneysel çalışmalar.
        </p>
        <a href="{{ site.social.github_repo }}" target="_blank" class="project-link">
          GitHub →
        </a>
      </div>
    </div>
  </div>
</section>


