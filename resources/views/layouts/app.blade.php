<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body class="bg-light" @php body_class() @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap container-fluid p-0" role="document">
      <div class="content">
        <main class="main p-0">
          <!-- hero -->
          @include('partials.hero')
          <!-- secondary nav -->
          @include('partials.secondary-nav')
          @include('partials.cards')
          <!-- @yield('content') -->
        </main>
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
