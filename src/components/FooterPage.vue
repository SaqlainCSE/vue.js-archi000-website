<template>
  <div id="FooterComponent">
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Contact</h3>
                    <p class="mb-2"><i class="fa fa-phone-alt text-primary me-3"></i>+88013-0858-6888</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>archi000bd@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-body me-1" href="https://www.youtube.com/@archithousand"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" href="https://www.facebook.com/archithousand"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" href="https://www.instagram.com/archithousand"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" href="https://wa.me/01308586888" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Services</h3>
                    <a class="btn btn-link" href="">Architecture</a>
                    <a class="btn btn-link" href="">3D Animation</a>
                    <a class="btn btn-link" href="">House Planning</a>
                    <a class="btn btn-link" href="">Interior Design</a>
                    <a class="btn btn-link" href="">Exterior Design</a>
                    <a class="btn btn-link" href="">Landscaping</a>
                    <a class="btn btn-link" href="">Restoration</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Quick Links</h3>
                    <router-link class="btn btn-link" to="about">About Us</router-link>
                    <router-link class="btn btn-link" to="contact">Contact Us</router-link>
                    <router-link class="btn btn-link" to="service">Our Services</router-link>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">Support</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Newsletter</h3>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <router-link to="/">ARCHITHOUSAND</router-link>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Developed By <a href="https://github.com/SaqlainCSE">Saqlain Mustak</a>
                        <br> Distributed By: <a class="border-bottom" href="https://github.com/SaqlainCSE" target="_blank">Tech000</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>

</style>
