
<div id="album-ajax" class="album bg-light" data-my_repeater_ajax_url="{{ admin_url('admin-ajax.php') }}" data-post-id="{{$post->ID}}" >
  <div class="container p-5 pb-0">
    <div id="cards-container" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
    @if (have_rows('cards'))
      @while (have_rows('cards')) @php the_row() @endphp
        <div class="col-sm-3">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#a1a2a7"></rect></svg>

          <div class="card-body">
            <h3>{{ the_sub_field('title') }} </h3>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      @endwhile
    @endif

  </div>

 @include('partials.banner')
</div>



