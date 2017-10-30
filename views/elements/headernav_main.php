


    <?php $this->insert('elements/nk-share-place') ?>




    <!--
    Additional Classes:
        .nk-header-opaque
-->
    <header class="nk-header">


        <!--
        START: Navbar

        Additional Classes:
            .nk-navbar-sticky
            .nk-navbar-transparent
            .nk-navbar-autohide
            .nk-navbar-light
    -->
        <nav class="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-transparent nk-navbar-autohide">
            <div class="container">
                <div class="nk-nav-table">

                    <a href="index.html" class="nk-nav-logo">
                        <img src="<?=Core\AssetMgr::load("shaiya_eu_small.png")?>" alt="" width="231">
                    </a>

                    <?php $this->insert('elements/nk-top-menu') ?>

                   
                    <?php $this->insert('elements/nk-menu-icons') ?>



                </div>
            </div>
        </nav>
        <!-- END: Navbar -->

    </header>





    <?php $this->insert('elements/nk-nav-right') ?>



    <!--
    START: Navbar Mobile

    Additional Classes:
        .nk-navbar-left-side
        .nk-navbar-right-side
        .nk-navbar-lg
        .nk-navbar-overlay-content
        .nk-navbar-light
-->
    <div id="nk-nav-mobile" class="nk-navbar nk-navbar-side nk-navbar-left-side nk-navbar-overlay-content hidden-lg-up">
        <div class="nano">
            <div class="nano-content">
                <div class="nk-nav-table">
                    <div class="nk-nav-row">
                        <a href="index.html" class="nk-nav-logo">
                        <img src="<?=Core\AssetMgr::load("shaiya_eu_small.png")?>" alt="" width="281">
                        </a>
                    </div>
                    <div class="nk-nav-row nk-nav-row-full nk-nav-row-top">
                        <div class="nk-navbar-mobile-content">
                            <ul class="nk-nav">
                                <!-- Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END: Navbar Mobile -->