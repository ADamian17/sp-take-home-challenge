

 <section class="py-5 text-start container pb-0">
  <div class="hero">

    <!-- rigth side -->
    <div class="hero__rigth-side">

      <h1 class="fs-bold">
        Tools, guides, and <br/> 
        more to build your <br /> 
        best practice.
      </h1>

      <div class="hero__info">
        <!-- stars -->
        @include('partials.stars-icons')
        <p class="botes text-muted">2,361</p>
        <!-- captera logo -->
        @include('partials.captera-logo')
      </div>

    </div>


    <!-- left side -->
    <div class="hero__rigth-left">
      <p class="lead my-3">Our resources have helped thousands of your peers get better at their jobs. Get the latest in your inbox.</p>

      <form class="row g-3">
        <div class="col-6">
          <input id="email" type="email" class="form-control" placeholder="Enter your email to get started">
          <small class="text-muted">
            <svg class="check-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>check</title>
              <path d="M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"></path>
            </svg>
              Free, no spam, unsubcribe anytime.
          </small>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-danger shadow-sm mb-3">Join Our List Now →</button>
        </div>
      </form>
    </div>
  </div>
      
</section>
