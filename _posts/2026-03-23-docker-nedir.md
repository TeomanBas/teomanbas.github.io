---
layout: post
title: "Docker Nedir? Temelden İleri Seviyeye Rehber"
description: "Docker nedir, nasıl çalışır ve neden kullanılır? Container mantığını ve gerçek kullanım senaryolarını detaylı şekilde öğrenin."
date: 2026-03-23 20:00:00 +0300
author: "Teoman Bas"
categories: [DevOps, Docker]
tags: [docker, container, linux, devops, virtualization]
featured: true
image: /assets/images/docker-cover.jpg
---

## 🚀 Docker Nedir?

Docker, uygulamaları izole bir şekilde çalıştırmanı sağlayan **container tabanlı bir sanallaştırma platformudur**.

Klasik sanallaştırma sistemlerinden farklı olarak, işletim sistemi seviyesinde çalışır ve çok daha hafiftir.

---

## 🧠 Docker Nasıl Çalışır?

Docker'ın temelinde 3 ana bileşen vardır:

- **Image** → Uygulamanın blueprint’i
- **Container** → Çalışan instance
- **Docker Engine** → Tüm sistemi yöneten motor

---

## 📦 Container Mantığı

Container’lar:

- İzole çalışır
- Hızlı başlar
- Taşınabilir (portable)

Örnek:

```bash
docker run -d -p 80:80 nginx
````

Bu komut:

* nginx image’ını indirir
* container başlatır
* 80 portunu açar

---

## 🔥 Docker Neden Kullanılır?

### 1. Ortam bağımsızlığı

“Bende çalışıyor” problemi ortadan kalkar.

### 2. Hızlı deployment

CI/CD süreçlerinde büyük avantaj sağlar.

### 3. Kaynak verimliliği

VM’lere göre çok daha az RAM kullanır.

---

## 🧪 Gerçek Kullanım Senaryosu

Bir backend projesi düşün:

* Node.js API
* Redis
* PostgreSQL

Bunları tek tek kurmak yerine:

👉 Docker Compose ile tek komut:

```bash
docker-compose up -d
```

---

## 📚 Sonuç

Docker modern yazılım geliştirme süreçlerinin temel taşlarından biridir.

Eğer:

* DevOps öğreniyorsan
* Backend geliştiriyorsan
* Mikroservis mimarisi kullanıyorsan

👉 Docker öğrenmek zorundasın.

---

## 🏷️ Etiketler

#docker #devops #container #linux
