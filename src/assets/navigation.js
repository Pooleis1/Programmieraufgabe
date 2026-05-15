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
        <li><a href="">Barrierekeitserklärung</a></li>
        <li><a href="">Urherberrechtshinweise</a></li>
        <li><a href="">Lizenz</a></li>
        <li><a href="">Datenschutzerklärung</a></li>
        <li><a href="">Impressum</a></li>
        </ul>

        <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menü">
        <span></span><span></span><span></span>
        </button>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
        <a href="#features"  @click="menuOpen=false">Funktionen</a>
        <a href="#bsp"       @click="menuOpen=false">Beispiele</a>
        <a href="#pricing"   @click="menuOpen=false">Preise</a>
        <a href="#contact"   @click="menuOpen=false">Kontakt</a>
        <a href="" @click="menuOpen=false">Barrierekeitserklärung</a>
        <a href="" @click="menuOpen=false">Urherberrechtshinweise</a>
        <a href="" @click="menuOpen=false">Lizenz</a>
        <a href="" @click="menuOpen=false">Datenschutzerklärung</a>
        <a href="" @click="menuOpen=false">Impressum</a>
    </div>
  `
};