---
layout: page
title: İletişim
permalink: /contact/
extra_css:
  - /assets/css/contact.css
---

<section class="contact-section container py-5">

  <!-- HEADER -->
  <div class="text-center mb-5">
    <h1>İletişim</h1>
    <p>
      Proje, iş teklifi veya teknik bir konu için benimle iletişime geçebilirsiniz.
    </p>
  </div>

  <!-- CONTACT CARDS -->
  <div class="row g-4 justify-content-center">

    <!-- EMAIL -->
    <div class="col-md-4">
      <div class="contact-card">
        <div class="contact-icon">📧</div>
        <h5>Email</h5>
        <p>
          <a href="mailto:{{ site.social.email }}">teomanbas@protonmail.com</a>
        </p>
      </div>
    </div>

    <!-- FREELANCE -->
    <div class="col-md-4">
      <div class="contact-card">
        <div class="contact-icon">💼</div>
        <h5>Freelance</h5>
        <p>
          <a href="{{ site.social.bionluk }}" target="_blank">
            Bionluk profilim
          </a>
        </p>
      </div>
    </div>

    <!-- GITHUB -->
    <div class="col-md-4">
      <div class="contact-card">
        <div class="contact-icon">🐙</div>
        <h5>GitHub</h5>
        <p>
          <a href="{{ site.social.github }}" target="_blank">
            github.com/teomanbas
          </a>
        </p>
      </div>
    </div>

  </div>

  <!-- FOOTER NOTE -->
  <div class="text-center mt-5">
    <small>
      Genellikle 24 saat içinde dönüş yapıyorum.
    </small>
  </div>

</section>
