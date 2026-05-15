const NavigationComponent = {
  props: ['isScrolled', 'menuOpen'],
  template: `
    <!-- ─── NAVIGATION ─── -->
    <nav :class="{ scrolled: isScrolled }">
        <a href="#hero" class="logo">
        <img src="./src/assets/Logo_Vollversion.png" alt="Firmenlogo">
        </a>

        <ul class="nav-links">
        <li><a href="index.html#features">Funktionen</a></li>
        <li><a href="index.html#bsp">Beispiele</a></li>
        <li><a href="index.html#pricing">Preise</a></li>
        <li><a href="index.html#contact">Kontakt</a></li>
        <li><a href="index.html#about">Über Uns</a></li>
        <li><a href="">Lizenz</a></li>
        <li><a href="">Datenschutzerklärung</a></li>
        <li><a href="">Impressum</a></li>
        </ul>

        <button class="burger" :class="{ open: menuOpen }" @click="$emit('toggle-menu')" aria-label="Menü">
        <span></span><span></span><span></span>
        </button>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
        <a href="index.html#features" @click="$emit('toggle-menu')">Funktionen</a>
        <a href="index.html#bsp"       @click="$emit('toggle-menu')">Beispiele</a>
        <a href="index.html#pricing"   @click="$emit('toggle-menu')">Preise</a>
        <a href="index.html#contact"   @click="$emit('toggle-menu')">Kontakt</a>
        <a href="index.html#about"     @click="$emit('toggle-menu')">Über Uns</a>
        <a href="" @click="menuOpen=false">Lizenz</a>
        <a href="" @click="menuOpen=false">Datenschutzerklärung</a>
        <a href="" @click="menuOpen=false">Impressum</a>
    </div>
  `
};