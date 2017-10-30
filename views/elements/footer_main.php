<footer class="nk-footer nk-footer-parallax nk-footer-parallax-opacity">

            <div class="bg-image">
                <div style="background-image: url('<?=Core\AssetMgr::load("images/bg-footer.jpg")?>')"></div>
            </div>


            <div class="container">
                <div class="nk-gap-4"></div>
                <div class="row align-items-center">
                    <div class="col-md-4 push-md-4">
                        <div class="nk-footer-logo">
                            <a href="#">
                                <img src="<?=Core\AssetMgr::load("shaiya_eu_small.png")?>" alt="" width="281">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 pull-md-4">
                        <div class="nk-gap-3 hidden-md-up"></div>
                        <div class="nk-footer-social">
                            <a href="#"><i class="ion-social-twitter"></i></a>
                            <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            <a href="#"><i class="ion-social-dribbble-outline"></i></a>
                            <a href="#"><i class="ion-social-pinterest"></i></a>
                        </div>
                        <div class="nk-gap-3 hidden-md-up"></div>
                    </div>
                    <div class="col-md-4">
                        <div class="nk-copyright-2">
                            <div class="container text-center text-md-right">
                                <a href="http://shaiya.eu">Shaiya Europe</a> &copy; 2017. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nk-gap-4"></div>
            </div>
        </footer>
        <!-- END: Footer -->


    </div>





    <!--
    START: Side Buttons
        .nk-side-buttons-visible
-->
    <div class="nk-side-buttons">
        <ul>
            <li>
                <a href="https://themeforest.net/item/khaki-multiconcept-bootstrap-4-html-template/16826910?ref=_nK" target="_blank">
                    <span class="ion-bag"></span>
                </a>
            </li>
            <li>
                <span class="nk-scroll-top">
                    <span class="ion-ios-arrow-up"></span>
                </span>
            </li>
        </ul>
    </div>
    <!-- END: Side Buttons -->



    <!--
    START: Search

    Additional Classes:
        .nk-search-light
-->
    <div class="nk-search">
        <div class="container">
            <form action="#">
                <fieldset class="form-group nk-search-field">
                    <input type="text" class="form-control" id="searchInput" placeholder="Search..." name="s">
                    <label for="searchInput"><i class="ion-ios-search"></i></label>
                </fieldset>
            </form>
        </div>
    </div>
    <!-- END: Search -->




    <!-- START: Scripts -->

    <!-- GSAP -->
    <script src="<?=Core\AssetMgr::load("bower_components/gsap/src/minified/TweenMax.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js")?>"></script>

    <!-- Bootstrap -->
    <script src="<?=Core\AssetMgr::load("bower_components/tether/dist/js/tether.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/bootstrap/dist/js/bootstrap.min.js")?>"></script>

    <!-- Sticky Kit -->
    <script src="<?=Core\AssetMgr::load("bower_components/sticky-kit/dist/sticky-kit.min.js")?>"></script>

    <!-- Jarallax -->
    <script src="<?=Core\AssetMgr::load("bower_components/jarallax/dist/jarallax.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/jarallax/dist/jarallax-video.min.js")?>"></script>

    <!-- imagesLoaded -->
    <script src="<?=Core\AssetMgr::load("bower_components/imagesloaded/imagesloaded.pkgd.min.js")?>"></script>

    <!-- Flickity -->
    <script src="<?=Core\AssetMgr::load("bower_components/flickity/dist/flickity.pkgd.min.js")?>"></script>

    <!-- Isotope -->
    <script src="<?=Core\AssetMgr::load("bower_components/isotope/dist/isotope.pkgd.min.js")?>"></script>

    <!-- Photoswipe -->
    <script src="<?=Core\AssetMgr::load("bower_components/photoswipe/dist/photoswipe.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/photoswipe/dist/photoswipe-ui-default.min.js")?>"></script>

    <!-- Typed.js -->
    <script src="<?=Core\AssetMgr::load("bower_components/typed.js/dist/typed.min.js")?>"></script>

    <!-- Jquery Form -->
    <script src="<?=Core\AssetMgr::load("bower_components/jquery-form/dist/jquery.form.min.js")?>"></script>

    <!-- Jquery Validation -->
    <script src="<?=Core\AssetMgr::load("bower_components/jquery-validation/dist/jquery.validate.min.js")?>"></script>

    <!-- Jquery Countdown + Moment -->
    <script src="<?=Core\AssetMgr::load("bower_components/jquery.countdown/dist/jquery.countdown.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/moment/min/moment.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("bower_components/moment-timezone/builds/moment-timezone-with-data.js")?>"></script>

    <!-- Hammer.js -->
    <script src="<?=Core\AssetMgr::load("bower_components/hammer.js/hammer.min.js")?>"></script>

    <!-- Social Likes -->
    <script src="<?=Core\AssetMgr::load("bower_components/social-likes/dist/social-likes.min.js")?>"></script>

    <!-- NanoSroller -->
    <script src="<?=Core\AssetMgr::load("bower_components/nanoscroller/bin/javascripts/jquery.nanoscroller.min.js")?>"></script>

    <!-- SoundManager2 -->
    <script src="<?=Core\AssetMgr::load("bower_components/SoundManager2/script/soundmanager2-nodebug-jsmin.js")?>"></script>

    <!-- DateTimePicker -->
    <script src="<?=Core\AssetMgr::load("bower_components/datetimepicker/build/jquery.datetimepicker.full.min.js")?>"></script>

    <!-- Keymaster -->
    <script src="<?=Core\AssetMgr::load("bower_components/keymaster/keymaster.js")?>"></script>

    <!-- Revolution Slider -->
    <script type="text/javascript" src="<?=Core\AssetMgr::load("plugins/revolution/js/jquery.themepunch.tools.min.js")?>"></script>
    <script type="text/javascript" src="<?=Core\AssetMgr::load("plugins/revolution/js/jquery.themepunch.revolution.min.js")?>"></script>

    <!-- Prism -->
    <script src="<?=Core\AssetMgr::load("bower_components/prism/prism.js")?>"></script>

    <!-- Khaki -->
    <script src="<?=Core\AssetMgr::load("js/khaki.min.js")?>"></script>
    <script src="<?=Core\AssetMgr::load("js/khaki-init.js")?>"></script>
    <!-- END: Scripts -->
