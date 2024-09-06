<template>
    <div id="HomePage">
      <!-- Carousel Start -->
      <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="headerCarousel" class="carousel slide" data-bs-ride="carousel">
          <!-- Indicators/Dots -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#headerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
  
          <!-- Carousel items -->
          <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
              <img class="img-fluid" src="/frontend/img/carousel-1.jpg" alt="Slide 1">
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-10 col-lg-8">
                      <h1 class="display-1 text-white">Best Architecture And Interior Design Services</h1>
                      <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href="#" class="btn btn-primary py-3 px-5">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
              <img class="img-fluid" src="/frontend/img/carousel-2.jpg" alt="Slide 2">
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-10 col-lg-8">
                      <h1 class="display-1 text-white">Best Architecture And Interior Design Services</h1>
                      <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href="#" class="btn btn-primary py-3 px-5">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Third Slide -->
            <div class="carousel-item">
              <img class="img-fluid" src="/frontend/img/carousel-3.jpg" alt="Slide 3">
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-10 col-lg-8">
                      <h1 class="display-1 text-white">Best Architecture And Interior Design Services</h1>
                      <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href="#" class="btn btn-primary py-3 px-5">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Controls/Arrows -->
          <button class="carousel-control-prev" type="button" data-bs-target="#headerCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#headerCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- Carousel End -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>

<style scoped>

.slideInLeft:hover {
  background-color: black;
  border-color: green;
}

</style>
  