let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
let ngonNgu = localStorage.getItem("ngonNgu") || "vi";
let yeuThich = JSON.parse(localStorage.getItem("yeuThich")) || [];

const products = [
    ["hoodie", "DF-N01", "Áo Hoodie nam", "Men's Hoodie", 399000, "hoodie.jpg", "nam", ["Đen", "Xám", "Kem"], ["Black", "Gray", "Cream"], ["S", "M", "L", "XL"], "HOT"],
    ["oversize", "DF-N02", "Áo thun nam Oversize", "Men's Oversize T-Shirt", 259000, "aothunoversize.jpg", "nam", ["Đen", "Kem"], ["Black", "Cream"], ["M", "L", "XL"], "NEW"],
    ["polo", "DF-N03", "Áo Polo nam", "Men's Polo Shirt", 279000, "polo.jpg", "nam", ["Trắng", "Xanh Navy", "Xanh rêu"], ["White", "Navy", "Olive"], ["S", "M", "L", "XL"], "HOT"],
    ["somi", "DF-N04", "Áo sơ mi nam", "Men's Shirt", 329000, "somi.jpg", "nam", ["Trắng", "Xanh nhạt"], ["White", "Light Blue"], ["S", "M", "L", "XL"], ""],
    ["sweater", "DF-N05", "Áo Sweater nam", "Men's Sweater", 399000, "sweater.jpg", "nam", ["Xám", "Nâu", "Kem"], ["Gray", "Brown", "Cream"], ["M", "L", "XL"], "SALE"],
    ["aokhoac", "DF-N06", "Áo khoác nam", "Men's Jacket", 599000, "aokhoac.jpg", "nam", ["Đen", "Xanh Navy"], ["Black", "Navy"], ["M", "L", "XL"], "NEW"],
    ["jeanxanh", "DF-N07", "Quần Jean ống rộng nam", "Men's Wide Leg Jeans", 449000, "jeanxanh.jpg", "nam", ["Xanh nhạt", "Xanh đậm"], ["Light Blue", "Dark Blue"], ["28", "29", "30", "31", "32"], ""],
    ["jeanden", "DF-N08", "Quần Jean kiểu nam", "Men's Fashion Jeans", 469000, "jeanden.jpg", "nam", ["Đen"], ["Black"], ["28", "29", "30", "31", "32"], ""],
    ["kaki", "DF-N09", "Quần Kaki nam", "Men's Khaki Pants", 389000, "kaki.jpg", "nam", ["Be", "Nâu"], ["Beige", "Brown"], ["28", "29", "30", "31", "32"], ""],
    ["short", "DF-N10", "Quần Short nam", "Men's Shorts", 249000, "quanshort.jpg", "nam", ["Đen", "Xám"], ["Black", "Gray"], ["M", "L", "XL"], ""],

    ["aonu", "DF-NU01", "Áo thun nữ", "Women's T-Shirt", 289000, "aonu.jpg", "nu", ["Trắng", "Kem"], ["White", "Cream"], ["S", "M", "L"], ""],
    ["croptop", "DF-NU02", "Áo Croptop nữ", "Women's Crop Top", 239000, "croptop.jpg", "nu", ["Đen", "Hồng", "Tím"], ["Black", "Pink", "Purple"], ["S", "M", "L"], "NEW"],
    ["sominu", "DF-NU03", "Sơ mi nữ", "Women's Shirt", 319000, "sominu.jpg", "nu", ["Trắng", "Xanh nhạt"], ["White", "Light Blue"], ["S", "M", "L"], ""],
    ["aokhoacnu", "DF-NU04", "Áo khoác nữ", "Women's Jacket", 549000, "aokhoacnu.jpg", "nu", ["Kem", "Nâu"], ["Cream", "Brown"], ["S", "M", "L"], "HOT"],
    ["vaynu", "DF-NU05", "Set đồ nữ", "Women's Outfit Set", 399000, "vaynu.jpg", "nu", ["Trắng", "Hồng", "Đen"], ["White", "Pink", "Black"], ["S", "M", "L", "XL"], "HOT"],
    ["vayhoa", "DF-NU06", "Váy hoa nữ", "Women's Floral Dress", 429000, "vayhoanu.jpg", "nu", ["Hồng nhạt", "Xanh nhạt"], ["Light Pink", "Light Blue"], ["S", "M", "L"], "NEW"],
    ["vaycongso", "DF-NU07", "Váy công sở", "Women's Office Dress", 459000, "vaycongso.jpg", "nu", ["Đen", "Xanh Navy"], ["Black", "Navy"], ["S", "M", "L"], ""],
    ["damnu", "DF-NU08", "Đầm nữ dự tiệc", "Women's Party Dress", 599000, "damnu.jpg", "nu", ["Đỏ rượu", "Đen"], ["Wine Red", "Black"], ["S", "M", "L"], "SALE"],
    ["chanvay", "DF-NU09", "Chân váy chữ A", "Women's A-Line Skirt", 319000, "chanvay.jpg", "nu", ["Đen", "Be", "Xám"], ["Black", "Beige", "Gray"], ["S", "M", "L"], ""],

    ["tuicongso", "DF-PK01", "Túi xách công sở", "Office Handbag", 499000, "tuixach.jpg", "phukien", ["Đen", "Nâu"], ["Black", "Brown"], ["Freesize"], "HOT"],
    ["tuimini", "DF-PK02", "Túi xách thời trang", "Fashion Handbag", 359000, "tuimini.jpg", "phukien", ["Kem", "Hồng", "Đen"], ["Cream", "Pink", "Black"], ["Freesize"], "NEW"],
    ["balobasic", "DF-PK03", "Balo Basic", "Basic Backpack", 399000, "balo.jpg", "phukien", ["Đen", "Xám"], ["Black", "Gray"], ["Freesize"], ""],
    ["balocanvas", "DF-PK04", "Balo Canvas", "Canvas Backpack", 459000, "balocanvas.jpg", "phukien", ["Be", "Nâu", "Xanh rêu"], ["Beige", "Brown", "Olive"], ["Freesize"], "HOT"],
    ["balomini", "DF-PK05", "Balo Mini nữ", "Women's Mini Backpack", 379000, "balomini.jpg", "phukien", ["Hồng", "Kem"], ["Pink", "Cream"], ["Freesize"], "NEW"],
    ["kinhclassic", "DF-PK06", "Kính gọng đen Classic", "Classic Black Frame Glasses", 219000, "kinh.jpg", "phukien", ["Đen"], ["Black"], ["Freesize"], ""],
    ["kinhretro", "DF-PK07", "Kính Retro", "Retro Glasses", 259000, "kinhretro.jpg", "phukien", ["Nâu", "Đồi mồi"], ["Brown", "Tortoiseshell"], ["Freesize"], "HOT"],
    ["kinhmatmeo", "DF-PK08", "Kính mắt mèo nữ", "Women's Cat-Eye Glasses", 289000, "kinhmatmeo.jpg", "phukien", ["Đen", "Đỏ rượu"], ["Black", "Wine Red"], ["Freesize"], "NEW"],
    ["kinhtrong", "DF-PK09", "Kính gọng trong", "Clear Frame Glasses", 239000, "kinhtrong.jpg", "phukien", ["Trong suốt", "Hồng nhạt"], ["Clear", "Light Pink"], ["Freesize"], ""],
    ["nonbasic", "DF-PK10", "Nón lưỡi trai", "Baseball Cap", 159000, "non.jpg", "phukien", ["Đen", "Trắng", "Xanh Navy"], ["Black", "White", "Navy"], ["Freesize"], ""],
    ["nonbucket", "DF-PK11", "Nón Bucket Street", "Street Bucket Hat", 189000, "nonbucket.jpg", "phukien", ["Be", "Đen"], ["Beige", "Black"], ["Freesize"], "NEW"],
    ["sneaker", "DF-PK12", "Giày thể thao", "Sports Shoes", 649000, "giay.jpg", "phukien", ["Trắng", "Đen"], ["White", "Black"], ["37", "38", "39", "40", "41", "42"], "SALE"],
    ["sneakerretro", "DF-PK13", "Giày Retro", "Retro Shoes", 699000, "giayretro.jpg", "phukien", ["Trắng / Xanh", "Trắng / Đỏ"], ["White / Blue", "White / Red"], ["37", "38", "39", "40", "41", "42"], "NEW"],
    ["guocnu", "DF-PK14", "Guốc nữ cao gót", "Women's High Heel Mules", 429000, "guocnu.jpg", "phukien", ["Đen", "Kem", "Trắng"], ["Black", "Cream", "White"], ["35", "36", "37", "38", "39"], "NEW"]
].map((p, i) => ({
    key: p[0],
    ma: p[1],
    ten: p[2],
    tenEn: p[3],
    gia: p[4],
    hinh: "images/" + p[5],
    nhom: p[6],
    mau: p[7],
    mauEn: p[8],
    size: p[9],
    nhan: p[10],
    order: i + 1
}));

const banDich = {
    "Trang chủ": "Home",
    "Sản phẩm": "Products",
    "Thời trang nam": "Men",
    "Thời trang nữ": "Women",
    "Phụ kiện": "Accessories",
    "Giới thiệu": "About",
    "Liên hệ": "Contact",
    "Hỗ trợ": "Support",
    "Đăng nhập": "Login",
    "Đơn hàng": "Orders",
    "Giỏ hàng": "Cart",
    "Tìm kiếm": "Search",
    "Xem chi tiết": "View details",
    "Tất cả": "All",
    "Nam": "Men",
    "Nữ": "Women",
    "Xem tất cả": "View all",
    "Rút gọn": "Collapse",
    "Thêm vào giỏ hàng": "Add to cart",
    "Màu sắc": "Color",
    "Kích thước": "Size",
    "Số lượng": "Quantity",
    "Thanh toán": "Checkout",
    "Tổng cộng": "Total",
    "Sản phẩm liên quan": "Related products",
    "Đánh giá sản phẩm": "Product reviews",
    "Phong cách của bạn": "YOUR STYLE",
    "Khám phá thời trang": "Discover men's and women's fashion and accessories with a wide variety of products, colors and sizes.",
    "Mua sắm ngay": "SHOP NOW",
    "Về chúng tôi": "ABOUT US",
    "Xem thêm": "LEARN MORE"
};

function money(n) {
    return Number(n).toLocaleString("vi-VN") + "đ";
}

function text(vi, en) {
    return ngonNgu === "en" ? en : vi;
}

function tenSanPham(p) {
    return ngonNgu === "en" ? p.tenEn : p.ten;
}

function mauSanPham(p) {
    return ngonNgu === "en" ? p.mauEn : p.mau;
}

function dichMau(mau) {
    const colors = {
        "Đen": "Black",
        "Trắng": "White",
        "Xám": "Gray",
        "Kem": "Cream",
        "Xanh Navy": "Navy",
        "Xanh rêu": "Olive",
        "Xanh nhạt": "Light Blue",
        "Xanh đậm": "Dark Blue",
        "Be": "Beige",
        "Nâu": "Brown",
        "Hồng": "Pink",
        "Tím": "Purple",
        "Đỏ": "Red",
        "Hồng nhạt": "Light Pink",
        "Đỏ rượu": "Wine Red",
        "Đồi mồi": "Tortoiseshell",
        "Trong suốt": "Clear",
        "Trắng / Xanh": "White / Blue",
        "Trắng / Đỏ": "White / Red"
    };

    if (ngonNgu === "en" && colors[mau]) {
        return colors[mau];
    }

    return mau;
}

function saveCart() {
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    updateCount();
}

function updateCount() {
    let tong = gioHang.reduce((sum, item) => {
        return sum + Number(item.qty || 0);
    }, 0);

    document.querySelectorAll(".cart-count").forEach(item => {
        item.textContent = tong;
    });
}

function toast(noiDung) {
    let x = document.createElement("div");

    x.className = "toast";
    x.textContent = noiDung;

    document.body.appendChild(x);

    setTimeout(() => {
        x.classList.add("show");
    }, 20);

    setTimeout(() => {
        x.classList.remove("show");

        setTimeout(() => {
            x.remove();
        }, 250);
    }, 2200);
}

function toggleLang() {
    let menu = document.getElementById("langMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

function setLang(lang) {
    ngonNgu = lang;
    localStorage.setItem("ngonNgu", lang);
    location.reload();
}
function translate() {
    if (ngonNgu !== "en") {
        return;
    }

    document.documentElement.lang = "en";

    document.querySelectorAll("[data-t]").forEach(item => {
        let key = item.dataset.t;

        if (banDich[key]) {
            item.textContent = banDich[key];
        }
    });
}

function header() {
    let user = localStorage.getItem("nguoiDungDangNhap");

    let taiKhoan = {};

    try {
        taiKhoan =
            JSON.parse(
                localStorage.getItem("taiKhoan")
            ) || {};
    } catch {
        taiKhoan = {};
    }

    let dangNhap = {};

    try {
        dangNhap =
            JSON.parse(
                localStorage.getItem("dangNhap")
            ) || {};
    } catch {
        dangNhap = {};
    }

    let tenKhach =
        dangNhap.name ||
        taiKhoan.name ||
        user ||
        "";

    let emailKhach =
        dangNhap.email ||
        taiKhoan.email ||
        "";

    let avatar =
        localStorage.getItem("avatarKhachHang") || "";

    let chuDau =
        tenKhach
            ? tenKhach.trim().charAt(0).toUpperCase()
            : "U";

    let hienAvatar = avatar
        ? `<img src="${avatar}" alt="Avatar">`
        : chuDau;

   let khuVucTaiKhoan = "";

if (tenKhach) {
    khuVucTaiKhoan = `
        <div class="user-account">
            <button
                class="user-button"
                type="button"
                onclick="toggleUserMenu()"
            >
                <span class="user-avatar">
                    ${hienAvatar}
                </span>

                <span class="user-name">
                    ${tenKhach}
                </span>

                <span class="user-arrow">⌄</span>
            </button>

            <div
                class="user-menu"
                id="userMenu"
            >
                <div class="user-menu-info">

                    <span class="user-avatar user-avatar-large">
                        ${hienAvatar}
                    </span>

                    <div>
                        <strong>
                            ${tenKhach}
                        </strong>

                        <small>
                            ${emailKhach}
                        </small>
                    </div>

                </div>

                <button
                    type="button"
                    onclick="chonAvatar()"
                >
                    🖼 ${text(
                        "Đổi ảnh đại diện",
                        "Change profile picture"
                    )}
                </button>

                <button
                    type="button"
                    onclick="xoaAvatar()"
                >
                    ↻ ${text(
                        "Dùng avatar mặc định",
                        "Use default avatar"
                    )}
                </button>

                <a href="donhang.html">
                    📦 ${text(
                        "Đơn hàng của tôi",
                        "My orders"
                    )}
                </a>

                <button
                    type="button"
                    onclick="dangXuat()"
                >
                    ↪ ${text(
                        "Đăng xuất",
                        "Logout"
                    )}
                </button>

                <input
                    type="file"
                    id="avatarInput"
                    accept="image/png,image/jpeg,image/webp"
                    onchange="doiAvatar(event)"
                    style="display:none"
                >
            </div>
        </div>
    `;
} else {
    khuVucTaiKhoan = `
        <a href="dangnhap.html">
            ${text(
                "Đăng nhập",
                "Login"
            )}
        </a>
    `;
}

    return `
        <div class="top">
            ${text(
                "MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 500.000Đ",
                "FREE SHIPPING FOR ORDERS FROM 500,000 VND"
            )}
        </div>

        <header>

            <a
                class="logo"
                href="index.html"
            >
                DUY FASHION
            </a>

            <div class="search">

                <input
                    id="globalSearch"
                    type="text"
                    placeholder="${text(
                        "Tìm kiếm sản phẩm...",
                        "Search products..."
                    )}"
                >

                <button
                    type="button"
                    onclick="globalSearch()"
                >
                    ⌕
                </button>

            </div>

            <div class="head-links">

                <div class="lang">

                    <button
                        type="button"
                        onclick="toggleLang()"
                    >
                        🌐 ${ngonNgu.toUpperCase()}
                    </button>

                    <div id="langMenu">

                        <button
                            type="button"
                            onclick="setLang('vi')"
                        >
                            🇻🇳 Tiếng Việt
                        </button>

                        <button
                            type="button"
                            onclick="setLang('en')"
                        >
                            🇬🇧 English
                        </button>

                    </div>

                </div>

                ${khuVucTaiKhoan}

                <a href="donhang.html">
                    ${text(
                        "Đơn hàng",
                        "Orders"
                    )}
                </a>

                <a href="giohang.html">
                    ${text(
                        "Giỏ hàng",
                        "Cart"
                    )}
                    (<span class="cart-count">0</span>)
                </a>

            </div>

        </header>

        <nav>

            <a href="index.html">
                ${text(
                    "Trang chủ",
                    "Home"
                )}
            </a>

            <a href="sanpham.html">
                ${text(
                    "Sản phẩm",
                    "Products"
                )}
            </a>

            <a href="sanpham.html?loai=nam">
                ${text(
                    "Thời trang nam",
                    "Men"
                )}
            </a>

            <a href="sanpham.html?loai=nu">
                ${text(
                    "Thời trang nữ",
                    "Women"
                )}
            </a>

            <a href="sanpham.html?loai=phukien">
                ${text(
                    "Phụ kiện",
                    "Accessories"
                )}
            </a>

            <a href="gioithieu.html">
                ${text(
                    "Giới thiệu",
                    "About"
                )}
            </a>

            <a href="lienhe.html">
                ${text(
                    "Liên hệ",
                    "Contact"
                )}
            </a>

        </nav>
    `;
}

function toggleUserMenu() {
    let menu =
        document.getElementById("userMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

function chonAvatar() {
    let input =
        document.getElementById("avatarInput");

    if (input) {
        input.click();
    }
}

function doiAvatar(event) {
    let file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        toast(
            text(
                "Vui lòng chọn file hình ảnh",
                "Please select an image"
            )
        );
        return;
    }

    if (file.size > 1024 * 1024) {
        toast(
            text(
                "Ảnh phải nhỏ hơn 1MB",
                "Image must be smaller than 1MB"
            )
        );
        event.target.value = "";
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {
        localStorage.setItem(
            "avatarKhachHang",
            e.target.result
        );

        toast(
            text(
                "Đã đổi ảnh đại diện",
                "Profile picture updated"
            )
        );

        setTimeout(() => {
            location.reload();
        }, 500);
    };

    reader.readAsDataURL(file);
}

function xoaAvatar() {
    localStorage.removeItem(
        "avatarKhachHang"
    );

    toast(
        text(
            "Đã chuyển về avatar mặc định",
            "Default avatar restored"
        )
    );

    setTimeout(() => {
        location.reload();
    }, 400);
}

function dangXuat() {
    localStorage.removeItem(
        "nguoiDungDangNhap"
    );

    localStorage.removeItem(
        "dangNhap"
    );

    location.href = "index.html";
}

function footer() {
    return `
        <footer>

            <div>
                <h2>DUY FASHION</h2>

                <p>
                    ${text(
                        "Website thời trang nam, nữ và phụ kiện.",
                        "Fashion website for men, women and accessories."
                    )}
                </p>
            </div>

            <div>
                <h3>
                    ${text("LIÊN KẾT", "LINKS")}
                </h3>

                <a href="index.html">
                    ${text("Trang chủ", "Home")}
                </a>

                <a href="sanpham.html">
                    ${text("Sản phẩm", "Products")}
                </a>

                <a href="gioithieu.html">
                    ${text("Giới thiệu", "About")}
                </a>
            </div>

            <div>
                <h3>
                    ${text("HỖ TRỢ", "SUPPORT")}
                </h3>

                <a href="hotro.html">
                    ${text("Hướng dẫn mua hàng", "Shopping guide")}
                </a>

                <a href="hotro.html">
                    ${text("Vận chuyển", "Shipping")}
                </a>

                <a href="hotro.html">
                    ${text("Đổi trả", "Returns")}
                </a>
            </div>

            <div>
                <h3>
                    ${text("LIÊN HỆ", "CONTACT")}
                </h3>

                <p>TP. Hồ Chí Minh</p>
                <p>duyfashion@gmail.com</p>
                <p>0947 607 033</p>
            </div>

        </footer>

        <div class="copy">
            © 2026 Duy Fashion
        </div>
    `;
}

function globalSearch() {
    let input = document.getElementById("globalSearch");

    if (!input) {
        return;
    }

    let q = input.value.trim();

    if (!q) {
        toast(
            text(
                "Vui lòng nhập sản phẩm cần tìm",
                "Please enter a product to search"
            )
        );

        return;
    }

    localStorage.setItem("search", q);
    location.href = "sanpham.html";
}

function card(p) {
    let heart = yeuThich.includes(p.key) ? "♥" : "♡";

    return `
        <div
            class="card"
            data-cat="${p.nhom}"
            data-name="${tenSanPham(p).toLowerCase()}"
            data-price="${p.gia}"
            data-order="${p.order}"
        >

            ${p.nhan ? `<span class="badge">${p.nhan}</span>` : ""}

            <button
                class="fav"
                type="button"
                onclick="favorite('${p.key}')"
            >
                ${heart}
            </button>

            <a
                class="product-image"
                href="chitiet.html?sp=${p.key}"
            >
                <img
                    src="${p.hinh}"
                    alt="${tenSanPham(p)}"
                >
            </a>

            <div class="card-body">

                <small>
                    ${p.ma}
                </small>

                <h3>
                    ${tenSanPham(p)}
                </h3>

                <div class="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <small>4.8</small>
                </div>

                <p class="price">
                    ${money(p.gia)}
                </p>

                <a
                    class="btn"
                    href="chitiet.html?sp=${p.key}"
                >
                    ${text(
                        "Xem chi tiết",
                        "View details"
                    )}
                </a>

            </div>
        </div>
    `;
}

function favorite(key) {
    let index = yeuThich.indexOf(key);

    if (index === -1) {
        yeuThich.push(key);

        toast(
            text(
                "Đã thêm vào yêu thích",
                "Added to favorites"
            )
        );
    } else {
        yeuThich.splice(index, 1);

        toast(
            text(
                "Đã bỏ khỏi yêu thích",
                "Removed from favorites"
            )
        );
    }

    localStorage.setItem(
        "yeuThich",
        JSON.stringify(yeuThich)
    );

    let homeProducts = document.getElementById("homeProducts");
    let productList = document.getElementById("productList");

    if (homeProducts) {
        homeProducts.innerHTML =
            products.slice(0, 8).map(card).join("");
    }

    if (productList && typeof renderProducts === "function") {
        renderProducts();
    }
}

function addCart(p, color, size, qty) {
    let item = gioHang.find(x =>
        x.key === p.key &&
        x.color === color &&
        x.size === size
    );

    if (item) {
        item.qty = Math.min(
            10,
            Number(item.qty) + Number(qty)
        );
    } else {
        gioHang.push({
            key: p.key,
            ten: p.ten,
            tenEn: p.tenEn,
            gia: p.gia,
            hinh: p.hinh,
            color: color,
            size: size,
            qty: Number(qty)
        });
    }

    saveCart();

    hieuUngBayVaoGio(p);

    toast(
        text(
            "Đã thêm vào giỏ hàng",
            "Added to cart"
        )
    );
}

function hieuUngBayVaoGio(p) {
    let gioHangHeader =
        document.querySelector(
            '.head-links a[href="giohang.html"]'
        );

    if (!gioHangHeader) {
        return;
    }

    let anhSanPham =
        document.querySelector(
            '.detail img'
        );

    if (!anhSanPham) {
        anhSanPham =
            document.querySelector(
                '.product-detail img'
            );
    }

    let anhBay =
        document.createElement("img");

    anhBay.src = p.hinh;

    anhBay.style.position = "fixed";
    anhBay.style.zIndex = "99999";
    anhBay.style.width = "120px";
    anhBay.style.height = "120px";
    anhBay.style.objectFit = "cover";
    anhBay.style.borderRadius = "10px";
    anhBay.style.pointerEvents = "none";
    anhBay.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.25)";

    let batDauX =
        window.innerWidth / 2 - 60;

    let batDauY =
        window.innerHeight / 2 - 60;

    if (anhSanPham) {
        let viTriAnh =
            anhSanPham.getBoundingClientRect();

        batDauX =
            viTriAnh.left +
            viTriAnh.width / 2 -
            60;

        batDauY =
            viTriAnh.top +
            viTriAnh.height / 2 -
            60;
    }

    anhBay.style.left =
        batDauX + "px";

    anhBay.style.top =
        batDauY + "px";

    document.body.appendChild(anhBay);

    let viTriGio =
        gioHangHeader.getBoundingClientRect();

    let dichX =
        viTriGio.left +
        viTriGio.width / 2;

    let dichY =
        viTriGio.top +
        viTriGio.height / 2;

    anhBay.animate(
        [
            {
                left: batDauX + "px",
                top: batDauY + "px",
                width: "120px",
                height: "120px",
                opacity: 1,
                transform: "scale(1)"
            },
            {
                left:
                    batDauX +
                    (dichX - batDauX) * 0.45 +
                    "px",

                top:
                    Math.max(
                        40,
                        batDauY - 150
                    ) +
                    "px",

                width: "85px",
                height: "85px",
                opacity: 0.9,
                transform: "scale(0.8)"
            },
            {
                left:
                    dichX - 15 +
                    "px",

                top:
                    dichY - 15 +
                    "px",

                width: "30px",
                height: "30px",
                opacity: 0.2,
                transform:
                    "scale(0.2) rotate(15deg)"
            }
        ],
        {
            duration: 800,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    setTimeout(() => {
        anhBay.remove();

        gioHangHeader.animate(
            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.25)"
                },
                {
                    transform: "scale(0.9)"
                },
                {
                    transform: "scale(1.1)"
                },
                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 450
            }
        );

    }, 800);
}

function layTenGioHang(item) {
    if (ngonNgu === "en" && item.tenEn) {
        return item.tenEn;
    }

    return item.ten;
}

function dichNoiDungTrang() {
    if (ngonNgu !== "en") {
        return;
    }

    const bang = {
        "SẢN PHẨM NỔI BẬT": "FEATURED PRODUCTS",
        "Những sản phẩm được lựa chọn tại Duy Fashion": "Selected products from Duy Fashion",
        "Sản phẩm thời trang": "Fashion products",
        "Nhóm sản phẩm": "Product categories",
        "Hỗ trợ ngôn ngữ": "Language support",
        "PHONG CÁCH CỦA BẠN": "YOUR STYLE",
        "MUA SẮM NGAY": "SHOP NOW",
        "ƯU ĐÃI ĐẶC BIỆT": "SPECIAL OFFER",
        "GIẢM GIÁ ĐẾN 30%": "UP TO 30% OFF",
        "MUA NGAY": "SHOP NOW",
        "VỀ CHÚNG TÔI": "ABOUT US",
        "XEM THÊM": "LEARN MORE",
        "TẤT CẢ": "ALL",
        "NAM": "MEN",
        "NỮ": "WOMEN",
        "PHỤ KIỆN": "ACCESSORIES",
        "Mặc định": "Default",
        "Mới nhất": "Newest",
        "Giá thấp đến cao": "Price low to high",
        "Giá cao đến thấp": "Price high to low",
        "THANH TOÁN": "CHECKOUT",
        "ĐẶT HÀNG": "PLACE ORDER",
        "ĐĂNG NHẬP": "LOGIN",
        "ĐĂNG KÝ": "REGISTER",
        "GIỚI THIỆU": "ABOUT US",
        "LIÊN HỆ": "CONTACT",
        "GỬI LIÊN HỆ": "SEND MESSAGE",
        "TRUNG TÂM HỖ TRỢ": "SUPPORT CENTER"
    };

    document.querySelectorAll(
        "h1, h2, h3, p, button, option, a"
    ).forEach(element => {
        let noiDung = element.textContent.trim();

        if (bang[noiDung]) {
            element.textContent = bang[noiDung];
        }
    });

    let hero = document.querySelector(".hero");

    if (hero) {
        let paragraphs = hero.querySelectorAll("p");

        if (paragraphs.length > 1) {
            paragraphs[1].textContent =
                "Discover men's and women's fashion and accessories with a wide variety of products, colors and sizes.";
        }
    }

    const placeholders = {
        "Tìm sản phẩm...": "Search products...",
        "Tìm kiếm sản phẩm...": "Search products...",
        "Họ và tên": "Full name",
        "Số điện thoại": "Phone number",
        "Email": "Email",
        "Địa chỉ nhận hàng": "Delivery address",
        "Mật khẩu": "Password",
        "Tên của bạn": "Your name",
        "Nhận xét của bạn": "Your review",
        "Chủ đề": "Subject",
        "Nội dung": "Message",
        "Nội dung cần hỗ trợ": "How can we help you?"
    };

    document.querySelectorAll(
        "input[placeholder], textarea[placeholder]"
    ).forEach(element => {
        let placeholder =
            element.getAttribute("placeholder");

        if (placeholders[placeholder]) {
            element.setAttribute(
                "placeholder",
                placeholders[placeholder]
            );
        }
    });
}

function applyPageLanguage() {
    translate();
    dichNoiDungTrang();
}

document.addEventListener("click", event => {
    let lang = document.querySelector(".lang");

    if (
        lang &&
        !lang.contains(event.target)
    ) {
        let menu = document.getElementById("langMenu");

        if (menu) {
            menu.classList.remove("show");
        }
    }
});

document.addEventListener("keydown", event => {
    if (
        event.key === "Enter" &&
        document.activeElement &&
        document.activeElement.id === "globalSearch"
    ) {
        globalSearch();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let siteHeader =
        document.getElementById("siteHeader");

    let siteFooter =
        document.getElementById("siteFooter");

    if (siteHeader) {
        siteHeader.innerHTML = header();
    }

    if (siteFooter) {
        siteFooter.innerHTML = footer();
    }

    updateCount();

    setTimeout(() => {
        applyPageLanguage();
    }, 0);

    setTimeout(() => {
        applyPageLanguage();
    }, 100);
});
footer = function () {
    let footerBox = document.getElementById("siteFooter");

    if (!footerBox) {
        return;
    }

    footerBox.innerHTML = `
        <section class="footer-benefits">

            <div class="footer-benefit">
                <div class="footer-benefit-icon">🚚</div>

                <div>
                    <strong>
                        ${text(
                            "MIỄN PHÍ VẬN CHUYỂN",
                            "FREE SHIPPING"
                        )}
                    </strong>

                    <p>
                        ${text(
                            "Cho đơn hàng từ 500.000đ",
                            "For orders from 500,000₫"
                        )}
                    </p>
                </div>
            </div>

            <div class="footer-benefit">
                <div class="footer-benefit-icon">↻</div>

                <div>
                    <strong>
                        ${text(
                            "HỖ TRỢ ĐỔI TRẢ",
                            "RETURN SUPPORT"
                        )}
                    </strong>

                    <p>
                        ${text(
                            "Hỗ trợ khi sản phẩm gặp vấn đề",
                            "Support for product issues"
                        )}
                    </p>
                </div>
            </div>

            <div class="footer-benefit">
                <div class="footer-benefit-icon">🔒</div>

                <div>
                    <strong>
                        ${text(
                            "MUA SẮM AN TOÀN",
                            "SAFE SHOPPING"
                        )}
                    </strong>

                    <p>
                        ${text(
                            "Thông tin đơn hàng được bảo mật",
                            "Your order information is protected"
                        )}
                    </p>
                </div>
            </div>

            <div class="footer-benefit">
                <div class="footer-benefit-icon">☎</div>

                <div>
                    <strong>
                        ${text(
                            "HỖ TRỢ KHÁCH HÀNG",
                            "CUSTOMER SUPPORT"
                        )}
                    </strong>

                    <p>
                        0947 607 033
                    </p>
                </div>
            </div>

        </section>

        <footer class="footer-new">

            <div class="footer-brand">

                <h2>DUY FASHION</h2>

                <p class="footer-slogan">
                    ${text(
                        "Thời trang hiện đại - Phong cách của bạn.",
                        "Modern fashion - Your style."
                    )}
                </p>

                <p>
                    ${text(
                        "Duy Fashion mang đến các sản phẩm thời trang nam, nữ và phụ kiện với phong cách trẻ trung, hiện đại và dễ dàng lựa chọn.",
                        "Duy Fashion offers men's fashion, women's fashion and accessories with a youthful and modern style."
                    )}
                </p>

                <div class="footer-social-title">
                    ${text(
                        "KẾT NỐI VỚI CHÚNG TÔI",
                        "FOLLOW US"
                    )}
                </div>

                <div class="footer-social">

                    <a
                        href="https://www.facebook.com/nguyen.duy.281161?locale=vi_VN"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                    >
                        f
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        title="Instagram"
                    >
                        ◎
                    </a>

                    <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        title="TikTok"
                    >
                        ♪
                    </a>

                </div>

            </div>

            <div class="footer-column">

                <h3>
                    ${text(
                        "MUA SẮM",
                        "SHOPPING"
                    )}
                </h3>

                <a href="index.html">
                    ${text("Trang chủ", "Home")}
                </a>

                <a href="sanpham.html">
                    ${text("Tất cả sản phẩm", "All products")}
                </a>

                <a href="sanpham.html?cat=nam">
                    ${text("Thời trang nam", "Men's fashion")}
                </a>

                <a href="sanpham.html?cat=nu">
                    ${text("Thời trang nữ", "Women's fashion")}
                </a>

                <a href="sanpham.html?cat=phukien">
                    ${text("Phụ kiện", "Accessories")}
                </a>

                <a href="giohang.html">
                    ${text("Giỏ hàng", "Shopping cart")}
                </a>

            </div>

            <div class="footer-column">

                <h3>
                    ${text(
                        "HỖ TRỢ",
                        "SUPPORT"
                    )}
                </h3>

                <a href="hotro.html">
                    ${text(
                        "Trung tâm hỗ trợ",
                        "Support center"
                    )}
                </a>

                <a href="hotro.html#shoppingGuide">
                    ${text(
                        "Hướng dẫn mua hàng",
                        "Shopping guide"
                    )}
                </a>

                <a href="hotro.html#shippingGuide">
                    ${text(
                        "Vận chuyển",
                        "Shipping"
                    )}
                </a>

                <a href="hotro.html#returnGuide">
                    ${text(
                        "Chính sách đổi trả",
                        "Return policy"
                    )}
                </a>

                <a href="hotro.html#paymentGuide">
                    ${text(
                        "Thanh toán",
                        "Payment"
                    )}
                </a>

                <a href="lienhe.html">
                    ${text(
                        "Liên hệ",
                        "Contact"
                    )}
                </a>

            </div>

            <div class="footer-column footer-contact-info">

                <h3>
                    ${text(
                        "LIÊN HỆ",
                        "CONTACT"
                    )}
                </h3>

                <div class="footer-contact-row">
                    <span>⌖</span>

                    <div>
                        <strong>
                            ${text(
                                "Địa chỉ",
                                "Address"
                            )}
                        </strong>

                        <p>
                            TP. Hồ Chí Minh, Việt Nam
                        </p>
                    </div>
                </div>

                <div class="footer-contact-row">
                    <span>☎</span>

                    <div>
                        <strong>
                            Hotline
                        </strong>

                        <p>
                            0947 607 033
                        </p>
                    </div>
                </div>

                <div class="footer-contact-row">
                    <span>✉</span>

                    <div>
                        <strong>
                            Email
                        </strong>

                        <p>
                            duyfashion@gmail.com
                        </p>
                    </div>
                </div>

                <div class="footer-contact-row">
                    <span>◷</span>

                    <div>
                        <strong>
                            ${text(
                                "Giờ hỗ trợ",
                                "Support hours"
                            )}
                        </strong>

                        <p>
                            ${text(
                                "Thứ 2 - Thứ 7: 08:00 - 21:00",
                                "Mon - Sat: 08:00 - 21:00"
                            )}
                        </p>

                        <p>
                            ${text(
                                "Chủ nhật: 09:00 - 18:00",
                                "Sunday: 09:00 - 18:00"
                            )}
                        </p>
                    </div>
                </div>

            </div>

            <div class="footer-payment">

                <div>
                    <span class="footer-payment-title">
                        ${text(
                            "PHƯƠNG THỨC THANH TOÁN",
                            "PAYMENT METHODS"
                        )}
                    </span>

                    <div class="footer-payment-list">

                        <span>COD</span>

                        <span>
                            ${text(
                                "CHUYỂN KHOẢN",
                                "BANK TRANSFER"
                            )}
                        </span>

                    </div>
                </div>

                <div class="footer-security">
                    <span>🔒</span>

                    <p>
                        ${text(
                            "Mua sắm an toàn tại Duy Fashion",
                            "Shop safely at Duy Fashion"
                        )}
                    </p>
                </div>

            </div>

        </footer>

        <div class="copy footer-copy">

            <span>
                © 2026 DUY FASHION
            </span>

            <span>
                ${text(
                    "Website thời trang nam, nữ và phụ kiện",
                    "Men's, women's fashion and accessories"
                )}
            </span>

        </div>
    `;
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        footer();
    }, 150);
}); 