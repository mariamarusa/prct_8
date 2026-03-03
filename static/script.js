const API = "http://localhost:8000";

async function loadAll() {
    showLoading();
    try {
        let res = await fetch(API + "/products/all");
        let products = await res.json();
        showProducts(products);
        highlightButton("all");
    } catch(e) {
        showError("Ошибка загрузки");
    }
    hideLoading();
}

async function loadCats() {
    let res = await fetch(API + "/categories");
    let cats = await res.json();
    let html = '<button class="cat-btn active" onclick="loadAll()">Все товары</button>';
    cats.forEach(c => {
        html += `<button class="cat-btn" onclick="loadByCat(${c.id})">${c.name}</button>`;
    });
    document.getElementById("cats").innerHTML = html;
}

async function loadByCat(id) {
    showLoading();
    let res = await fetch(API + "/category/" + id);
    let products = await res.json();
    showProducts(products);
    highlightButton(id);
    hideLoading();
}

function showProducts(products) {
    let html = "";
    products.forEach(p => {
        html += `
            <div class="card" onclick="showDetail(${p.id})">
                <h3>${p.name}</h3>
                <div class="price">${p.price.toLocaleString()} ₽</div>
                <div class="stock">В наличии: ${p.stock || 10} шт</div>
            </div>
        `;
    });
    document.getElementById("products").innerHTML = html;
}

async function showDetail(id) {
    let res = await fetch(API + "/products/get/" + id);
    let p = await res.json();
    
    document.getElementById("modal-body").innerHTML = `
        <h2>${p.name}</h2>
        <div style="color: #666; margin-bottom: 10px;">${p.category?.name || "Товар"}</div>
        <div class="big-price">${p.price.toLocaleString()} ₽</div>
        <div>В наличии: ${p.stock || 10} шт</div>
    `;
    
    document.getElementById("modal").classList.add("show");
}

function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target == modal) closeModal();
}

function highlightButton(id) {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    if (id === "all") {
        document.querySelector('button[onclick="loadAll()"]').classList.add("active");
    }
}

function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}

function showError(msg) {
    let err = document.getElementById("error");
    err.textContent = msg;
    err.classList.remove("hidden");
    setTimeout(() => err.classList.add("hidden"), 3000);
}

loadAll();
loadCats();