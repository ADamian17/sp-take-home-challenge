 <!-- second nav -->
<nav class="navbar navbar-expand-lg border-top border-bottom p-0" id="secondary-nav">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-md-center">
      @if (has_nav_menu('secondary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => ' secondary-menu navbar-nav',
        'add_li_class' => 'nav-link'  
        ]) !!}
      @endif
    </div>
  </div>
</nav>