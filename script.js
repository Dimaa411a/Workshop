// Малює мордочку мейн-куна потрібного кольору.
// fur — основний колір шерсті, stripe — колір смужок.
function catSVG(fur, stripe, title) {
  return `
  <svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title || "Мейн-кун"}">
    <!-- грива -->
    <path d="M38 120 L30 150 L48 146 L44 176 L64 164 L70 196 L86 176 L100 204 L114 176 L130 196 L136 164 L156 176 L152 146 L170 150 L162 120 Z" fill="${fur}"/>
    <!-- вуха з китицями -->
    <path d="M44 100 L56 22 L98 72 Z" fill="${fur}"/>
    <path d="M156 100 L144 22 L102 72 Z" fill="${fur}"/>
    <path d="M58 44 L62 30 L84 68 Z" fill="#F2D9C4" opacity=".8"/>
    <path d="M142 44 L138 30 L116 68 Z" fill="#F2D9C4" opacity=".8"/>
    <path d="M56 24 L50 4 M56 24 L60 6 M56 24 L44 10" stroke="${stripe}" stroke-width="3" stroke-linecap="round"/>
    <path d="M144 24 L150 4 M144 24 L140 6 M144 24 L156 10" stroke="${stripe}" stroke-width="3" stroke-linecap="round"/>
    <!-- голова -->
    <ellipse cx="100" cy="114" rx="64" ry="56" fill="${fur}"/>
    <!-- смужки табі: буква «М» на лобі -->
    <path d="M76 84 L84 66 L100 82 L116 66 L124 84" fill="none" stroke="${stripe}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M40 112 L58 116 M40 124 L58 124 M160 112 L142 116 M160 124 L142 124" stroke="${stripe}" stroke-width="3" stroke-linecap="round"/>
    <!-- морда -->
    <ellipse cx="100" cy="140" rx="30" ry="20" fill="#F6E6D6" opacity=".9"/>
    <!-- очі -->
    <ellipse cx="78" cy="108" rx="11" ry="12" fill="#C9A227"/>
    <ellipse cx="122" cy="108" rx="11" ry="12" fill="#C9A227"/>
    <ellipse cx="78" cy="108" rx="3" ry="10" fill="#1A1A1A"/>
    <ellipse cx="122" cy="108" rx="3" ry="10" fill="#1A1A1A"/>
    <!-- ніс і рот -->
    <path d="M93 128 L107 128 L100 137 Z" fill="#C97B7B"/>
    <path d="M100 137 Q100 146 90 146 M100 137 Q100 146 110 146" fill="none" stroke="#5A4230" stroke-width="2" stroke-linecap="round"/>
    <!-- вуса -->
    <path d="M84 140 L46 132 M84 145 L44 148 M116 140 L154 132 M116 145 L156 148" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>
  </svg>`;
}

// Велика мордочка в шапці сайту
document.getElementById("hero-cat").innerHTML = catSVG("#B8742A", "#5A4230");

// Беремо котів з data/cats.js і малюємо картки
const container = document.getElementById("cats");
const list = window.CATS || [];

if (list.length === 0) {
  container.innerHTML = `<p class="cats__empty">Тут поки порожньо. Стань першим, хто додасть свого кота через Pull Request.</p>`;
} else {
  container.innerHTML = list.map((cat) => `
    <article class="cat">
      ${catSVG(cat.fur || "#B8742A", cat.stripe || "#5A4230", cat.name)}
      <h3>${escapeHTML(cat.name)}</h3>
      <p class="cat__owner">додав(ла)
        <a href="https://github.com/${encodeURIComponent(cat.github)}">@${escapeHTML(cat.github)}</a>
      </p>
      <p class="cat__fact">${escapeHTML(cat.fact)}</p>
    </article>
  `).join("");
}

// Захист від випадкового HTML у даних учасників
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = String(text ?? "");
  return div.innerHTML;
}
