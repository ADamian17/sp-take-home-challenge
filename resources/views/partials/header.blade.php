<header class="banner">
  <section class="container d-flex justify-content-between">
    <a 
      class="brand navbar-brand d-flex align-items-center" 
      href="{{ home_url('/') }}">
    
    <strong>{{ get_bloginfo('name', 'display') }}</strong>
    </a>

    <!-- top nav -->
    <nav class="navbar nav-primary">
      <!-- @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif -->

      @include('partials.top-navlink')
    </nav>
  </section>
</header>
