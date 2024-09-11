<template>
    <div id="ClientComponent">
    <!-- Page Header Start -->
        <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <h1 class="display-1 text-white animated slideInDown">Happy Clients</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb text-uppercase mb-0">
                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                        <li class="breadcrumb-item text-primary active" aria-current="page">Client</li>
                    </ol>
                </nav>
            </div>
        </div>
    <!-- Page Header End -->


    <!-- Testimonial Start -->
        <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h4 class="section-title">Happy Clients</h4>
                <h1 class="display-5 mb-4">Lots Of Customers Who Trust Us And Our Services</h1>
            </div>

            <!-- Testimonial Carousel -->
            <div class="testimonial-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                <!-- Testimonial 1 -->
                <div class="testimonial-item text-center">
                    <img class="img-fluid mb-3" src="/frontend/img/testimonial-1.jpg" alt="Client 1" style="width: 100px; border-radius: 50%;">
                    <p class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Allena Gomez</h3>
                    <span class="text-primary">Laywer</span>
                </div>

                <!-- Testimonial 2 -->
                <div class="testimonial-item text-center">
                    <img class="img-fluid mb-3" src="/frontend/img/testimonial-2.jpg" alt="Client 2" style="width: 100px; border-radius: 50%;">
                    <p class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Alex Botha</h3>
                    <span class="text-primary">Engineer</span>
                </div>

                <!-- Testimonial 3 -->
                <div class="testimonial-item text-center">
                    <img class="img-fluid mb-3" src="/frontend/img/testimonial-3.jpg" alt="Client 3" style="width: 100px; border-radius: 50%;">
                    <p class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Kane Willeamson</h3>
                    <span class="text-primary">Architect</span>
                </div>
            </div>
        </div>
        </div>
    <!-- Testimonial End -->
    </div>
</template>
  
<script>
  
export default {
    name: 'ClientComponent',
    data() {
      return {
        
      };
    }
  };
</script>
  
<style scoped>

</style>
  