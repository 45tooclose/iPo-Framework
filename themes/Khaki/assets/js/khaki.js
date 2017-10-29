/*!-----------------------------------------------------------------
  Name: Khaki - HTML Multi-Concept Template
  Version: 1.4.1
  Author: _nK
  Website: https://nkdev.info
  Purchase: https://nkdev.info
  Support: https://nk.ticksy.com
  License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
  Copyright 2017.
-------------------------------------------------------------------*/
;(function() {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
    enableSearchAutofocus: true,
    enableActionLikeAnimation: true,
    enableShortcuts: true,
    enableMouseParallax: true,
    scrollToAnchorSpeed: 700,
    parallaxSpeed: 0.8,

    templates: {
        secondaryNavbarBackItem: 'Back',

        likeAnimationLiked: 'Liked!',
        likeAnimationDisliked: 'Disliked!',

        plainVideoIcon: '<span class="nk-video-icon"><i class="fa fa-play pl-5"></i></span>',
        plainVideoLoadIcon: '<span class="nk-loading-spinner"><i></i></span>',
        fullscreenVideoClose: '<span class="nk-icon-close"></span>',
        gifIcon: '<span class="nk-gif-icon"><i class="fa fa-hand-pointer-o"></i></span>',

        quickViewPortfolio: '<div class="nk-page-nav">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-left"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-right"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n            </div>',
        quickViewStore: '<div class="nk-page-nav-2">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-left"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-right"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n            </div>',
        quickViewCloseIcon: '<span class="nk-icon-close"></span>',

        audioPlaylistButton: '<div class="nk-audio-playlist-play-pause">\n                <span class="nk-audio-playlist-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-playlist-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',
        audioPlainButton: '<div class="nk-audio-plain-play-pause">\n                <span class="nk-audio-plain-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-plain-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',

        instagram: '<div class="col-4">\n                <a href="{{link}}" target="_blank">\n                    <img src="{{image}}" alt="{{caption}}" class="nk-img-stretch">\n                </a>\n            </div>',
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',
        instagramApiPath: 'php/instagram/instagram.php',

        twitter: '<div class="nk-twitter">\n                <span class="nk-twitter-icon fa fa-twitter"></span>\n                <div class="nk-twitter-date">\n                    <span>{{date}}</span>\n                </div>\n                <div class="nk-twitter-text">\n                   {{tweet}}\n                </div>\n            </div>',
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
        twitterApiPath: 'php/twitter/tweet.php',

        countdown: '<div>\n                <span>%D</span>\n                Days\n            </div>\n            <div>\n                <span>%H</span>\n                Hours\n            </div>\n            <div>\n                <span>%M</span>\n                Minutes\n            </div>\n            <div>\n                <span>%S</span>\n                Seconds\n            </div>'
    },

    shortcuts: {
        toggleSearch: 's',
        showSearch: '',
        closeSearch: 'esc',

        toggleShare: 'n',
        showShare: '',
        closeShare: 'esc',

        closeFullscreenVideo: 'esc',

        closeQuckView: 'esc',

        audioPlayerPlayPause: 'shift+p',
        audioPlayerPlay: '',
        audioPlayerPause: '',
        audioPlayerForward: 'shift+right',
        audioPlayerBackward: 'shift+left',
        audioPlayerVolumeUp: 'shift+up',
        audioPlayerVolumeDown: 'shift+down',
        audioPlayerMute: 'shift+m',
        audioPlayerLoop: 'shift+l',
        audioPlayerShuffle: 'shift+s',
        audioPlayerPlaylist: 'shift+a',
        audioPlayerPin: 'shift+r',

        postLike: 'l',
        postDislike: 'd',
        postScrollToComments: 'c',

        toggleSideLeftNavbar: 'alt+l',
        openSideLeftNavbar: '',
        closeSideLeftNavbar: 'esc',

        toggleSideRightNavbar: 'alt+r',
        openSideRightNavbar: '',
        closeSideRightNavbar: 'esc',

        toggleFullscreenNavbar: 'alt+f',
        openFullscreenNavbar: '',
        closeFullscreenNavbar: 'esc'
    },
    events: {
        actionHeart: function actionHeart(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var result = params.currentNum + (params.type === 'like' ? 1 : -1);
                params.updateNum(result);
            }, 300);
        },
        actionLike: function actionLike(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var additional = 0;
                if (params.type === 'like') {
                    if (params.isLiked) {
                        additional = -2;
                    }
                    if (params.isDisliked) {
                        additional = 1;
                    }
                }
                if (params.type === 'dislike') {
                    if (params.isLiked) {
                        additional = -1;
                    }
                    if (params.isDisliked) {
                        additional = 2;
                    }
                }
                var result = params.currentNum + (params.type === 'like' ? 1 : -1) + additional;
                params.updateNum(result);
            }, 300);
        },


        /* eslint no-unused-vars: 0 */
        quickViewOpen: function quickViewOpen($quickView) {},
        beforeQuickViewClose: function beforeQuickViewClose($quickView) {},
        quickViewClosed: function quickViewClosed($quickView) {},
        beforeQuickViewLoad: function beforeQuickViewLoad($frameDoc) {},
        quickViewLoad: function quickViewLoad($frameDoc) {},
        quickViewLoaded: function quickViewLoaded($frameDoc) {}
    }
};

/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/
var $ = jQuery;
var tween = window.TweenMax;
var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var isFireFox = typeof InstallTrigger !== 'undefined';
var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

// add 'is-mobile' or 'is-desktop' classname to html tag
$('html').addClass(isMobile ? 'is-mobile' : 'is-desktop');

/**
 * window size
 */
var $wnd = $(window);
var $doc = $(document);
var $body = $('body');
var wndW = 0;
var wndH = 0;
var docH = 0;
function getWndSize() {
    wndW = $wnd.width();
    wndH = $wnd.height();
    docH = $doc.height();
}
getWndSize();
$wnd.on('resize load orientationchange', getWndSize);

/**
 * Debounce resize
 */
var resizeArr = [];
var resizeTimeout = void 0;
$wnd.on('load resize orientationchange', function (e) {
    if (resizeArr.length) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            for (var k = 0; k < resizeArr.length; k++) {
                resizeArr[k](e);
            }
        }, 50);
    }
});
function _debounceResize(func) {
    if (typeof func === 'function') {
        resizeArr.push(func);
    } else {
        window.dispatchEvent(new Event('resize'));
    }
}

/**
 * page border size
 */
var $pageBorder = $('.nk-page-border .nk-page-border-t');
var pageBorderSize = $pageBorder.height() || 0;
_debounceResize(function () {
    pageBorderSize = $pageBorder.height() || 0;
});

/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */
var hideOnScrollList = [];
var didScroll = void 0;
var lastST = 0;

$wnd.on('scroll load resize orientationchange', function () {
    if (hideOnScrollList.length) {
        didScroll = true;
    }
});

function hasScrolled() {
    var ST = $wnd.scrollTop();

    var type = ''; // [up, down, end, start]

    if (ST > lastST) {
        type = 'down';
    } else if (ST < lastST) {
        type = 'up';
    } else {
        type = 'none';
    }

    if (ST === 0) {
        type = 'start';
    } else if (ST >= docH - wndH) {
        type = 'end';
    }

    hideOnScrollList.forEach(function (value) {
        if (typeof value === 'function') {
            value(type, ST, lastST, $wnd);
        }
    });

    lastST = ST;
}

setInterval(function () {
    if (didScroll) {
        didScroll = false;
        window.requestAnimationFrame(hasScrolled);
    }
}, 250);

function _throttleScroll(callback) {
    hideOnScrollList.push(callback);
}

/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */
var bodyOverflowEnabled = void 0;
var isBodyOverflowing = void 0;
var scrollbarWidth = void 0;
var originalBodyPadding = void 0;
var $headerContent = $('.nk-header > *');
function isBodyOverflowed() {
    return bodyOverflowEnabled;
}
function bodyGetScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'nk-body-scrollbar-measure';
    $body[0].appendChild(scrollDiv);
    var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    $body[0].removeChild(scrollDiv);
    return result;
}
function bodyCheckScrollbar() {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
    scrollbarWidth = bodyGetScrollbarWidth();
}
function bodySetScrollbar() {
    if (typeof originalBodyPadding === 'undefined') {
        originalBodyPadding = $body.css('padding-right') || '';
    }

    if (isBodyOverflowing) {
        $body.add($headerContent).css('paddingRight', scrollbarWidth + 'px');
    }
}
function bodyResetScrollbar() {
    $body.css('paddingRight', originalBodyPadding);
    $headerContent.css('paddingRight', '');
}
function _bodyOverflow(enable) {
    if (enable && !bodyOverflowEnabled) {
        bodyOverflowEnabled = 1;
        bodyCheckScrollbar();
        bodySetScrollbar();
        $body.css('overflow', 'hidden');
    } else if (!enable && bodyOverflowEnabled) {
        bodyOverflowEnabled = 0;
        $body.css('overflow', '');
        bodyResetScrollbar();
    }
}

/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */
function _isInViewport($item, returnRect) {
    var rect = $item[0].getBoundingClientRect();
    var result = 1;

    if (rect.right <= 0 || rect.left >= wndW) {
        result = 0;
    } else if (rect.bottom < 0 && rect.top <= wndH) {
        result = 0;
    } else {
        var beforeTopEnd = Math.max(0, rect.height + rect.top);
        var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
        var afterTop = Math.max(0, -rect.top);
        var beforeBottom = Math.max(0, rect.top + rect.height - wndH);
        if (rect.height < wndH) {
            result = 1 - (afterTop || beforeBottom) / rect.height;
        } else if (beforeTopEnd <= wndH) {
            result = beforeTopEnd / wndH;
        } else if (beforeBottomEnd <= wndH) {
            result = beforeBottomEnd / wndH;
        }
        result = result < 0 ? 0 : result;
    }
    if (returnRect) {
        return [result, rect];
    }
    return result;
}

/**
 * Scroll To
 */
function _scrollTo($to, callback) {
    var scrollPos = false;
    var speed = this.options.scrollToAnchorSpeed / 1000;

    if ($to === 'top') {
        scrollPos = 0;
    } else if ($to === 'bottom') {
        scrollPos = Math.max(0, docH - wndH);
    } else if (typeof $to === 'number') {
        scrollPos = $to;
    } else {
        scrollPos = $to.offset ? $to.offset().top : false;
    }

    if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
        tween.to($wnd, speed, {
            scrollTo: {
                y: scrollPos,

                // disable autokill on iOs (buggy scrolling)
                autoKill: !isIOs
            },
            ease: Power2.easeOut,
            overwrite: 5
        });
        if (callback) {
            tween.delayedCall(speed, callback);
        }
    } else if (typeof callback === 'function') {
        callback();
    }
}

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/
function _setOptions(newOpts) {
    var self = this;

    var optsTemplates = $.extend({}, this.options.templates, newOpts && newOpts.templates || {});
    var optsShortcuts = $.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
    var optsEvents = $.extend({}, this.options.events, newOpts && newOpts.events || {});

    self.options = $.extend({}, self.options, newOpts);
    self.options.templates = optsTemplates;
    self.options.shortcuts = optsShortcuts;
    self.options.events = optsEvents;
}

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

-------------------------------------------------------------------*/
function _key2(name, fn) {
    if (typeof window.key === 'undefined') {
        return;
    }
    name = this.options && this.options.shortcuts && this.options.shortcuts[name];

    if (name) {
        window.key(name, fn);
    }
}
function _initShortcuts() {
    if (typeof window.key === 'undefined' || !this.options.enableShortcuts) {
        return;
    }

    var self = this;

    // Search
    self.key('toggleSearch', function () {
        self.toggleSearch();
    });
    self.key('openSearch', function () {
        self.openSearch();
    });
    self.key('closeSearch', function () {
        self.closeSearch();
    });

    // Share
    self.key('toggleShare', function () {
        self.toggleShare();
    });
    self.key('openShare', function () {
        self.openShare();
    });
    self.key('closeShare', function () {
        self.closeShare();
    });

    // FullScreen Video
    self.key('closeFullscreenVideo', function () {
        if (self.closeFullScreenVideo) {
            self.closeFullScreenVideo();
        }
    });

    // quick view
    self.key('closeQuckView', function () {
        if (self.closeQuickView) {
            self.closeQuickView();
        }
    });

    // audio player
    self.key('audioPlayerPlayPause', function () {
        if (self.audioPlayer) {
            if (self.audioPlayer.playing) {
                self.audioPlayer.pause();
            } else {
                self.audioPlayer.play();
            }
        }
    });
    self.key('audioPlayerPlay', function () {
        if (self.audioPlayer) {
            self.audioPlayer.play();
        }
    });
    self.key('audioPlayerPause', function () {
        if (self.audioPlayer) {
            self.audioPlayer.pause();
        }
    });
    self.key('audioPlayerBackward', function () {
        if (self.audioPlayer) {
            self.audioPlayer.skip('prev');
        }
    });
    self.key('audioPlayerForward', function () {
        if (self.audioPlayer) {
            self.audioPlayer.skip('next');
        }
    });
    self.key('audioPlayerVolumeUp', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setVolume(self.audioPlayer.volume + 10);
        }
    });
    self.key('audioPlayerVolumeDown', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setVolume(self.audioPlayer.volume - 10);
        }
    });
    self.key('audioPlayerMute', function () {
        if (self.audioPlayer) {
            self.audioPlayer.mute(!self.audioPlayer.muted);
        }
    });
    self.key('audioPlayerLoop', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setLoop();
        }
    });
    self.key('audioPlayerShuffle', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setShuffle();
        }
    });
    self.key('audioPlayerPlaylist', function () {
        if (self.audioPlayer) {
            self.audioPlayer.showPlaylist();
        }
    });
    self.key('audioPlayerPin', function () {
        if (self.audioPlayer) {
            self.audioPlayer.pin(!self.audioPlayer.pinned);
        }
    });

    // post / portfolio single
    self.key('postLike', function () {
        $('.nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta').find('.nk-action-heart:not(.liked), .nk-action-like .like-icon').click();
    });
    self.key('postDislike', function () {
        $('.nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta').find('.nk-action-heart.liked, .nk-action-like .dislike-icon').click();
    });
    self.key('postScrollToComments', function () {
        var $comments = $('#comments');
        if ($comments.length) {
            self.scrollTo($comments);
        }
    });

    // Side Left Navbar
    var $leftSide = $('.nk-navbar-left-side');
    self.key('toggleSideLeftNavbar', function () {
        self.toggleSide($leftSide);
    });
    self.key('openSideLeftNavbar', function () {
        self.openSide($leftSide);
    });
    self.key('closeSideLeftNavbar', function () {
        self.closeSide($leftSide);
    });

    // Side Right Navbar
    var $rightSide = $('.nk-navbar-right-side');
    self.key('toggleSideRightNavbar', function () {
        self.toggleSide($rightSide);
    });
    self.key('openSideRightNavbar', function () {
        self.openSide($rightSide);
    });
    self.key('closeSideRightNavbar', function () {
        self.closeSide($rightSide);
    });

    // Fullscreen Navbar
    self.key('toggleFullscreenNavbar', function () {
        self.toggleFullscreenNavbar();
    });
    self.key('openFullscreenNavbar', function () {
        self.openFullscreenNavbar();
    });
    self.key('closeFullscreenNavbar', function () {
        self.closeFullscreenNavbar();
    });

    // ESC - use also inside form elements
    window.key.filter = function (event) {
        var tagName = (event.target || event.srcElement).tagName;
        var isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
        var isESC = window.key.isPressed('esc');
        return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
    };
}

/*------------------------------------------------------------------

  Init Link Effects

-------------------------------------------------------------------*/
function _initLinkEffects() {
    // add link effect for navbar
    $('.nk-navbar ul > li > a:not(.btn):not(.nk-btn):not(.no-link-effect)').addClass('link-effect-3');

    // Link Effect 1 (rotate all letters)
    $('.link-effect-1:not(.ready)').each(function eachLinkEffect() {
        $(this).addClass('ready');
        var itemText = $(this).text().replace(/([^\x00-\x80]|\w)/g, '<span>$&</span>');
        $(this).html(itemText);
    });
    function toggleClass($this, $span, type) {
        var $nextSpan = $span[type === 'add' ? 'next' : 'prev']();
        $span[type + 'Class']('active');

        var timeout = $this.data('timeout');
        clearTimeout(timeout);
        if ($nextSpan.length) {
            $this.data('timeout', setTimeout(function () {
                toggleClass($this, $nextSpan, type);
            }, 40));
        }
    }
    $doc.on('mouseover', '.link-effect-1.ready', function onMouseOverLink() {
        toggleClass($(this), $(this).children('span:not(.active):first'), 'add');
    }).on('mouseleave', '.link-effect-1.ready', function onMousLeaveLink() {
        toggleClass($(this), $(this).children('span.active:last'), 'remove');
    });

    // Link Effect 2 and 3 (color for letters from left to right and top to bottom)
    $('.link-effect-2:not(.ready), .link-effect-3:not(.ready)').each(function eachLinkEffect2() {
        $(this).addClass('ready');
        $(this).html(function (i, letters) {
            return $('<span>').html(letters).prepend($('<span class="link-effect-shade">').html(letters));
        });
    });
}

/*------------------------------------------------------------------

  Init Share Place

-------------------------------------------------------------------*/
function _initSharePlace() {
    var self = this;
    var $sharePlace = $('.nk-share-place');
    var $shareTitle = $sharePlace.find('.nk-share-place-title');
    var $shareIcons = $sharePlace.find('.nk-share-icons > .nk-share-icon');
    var $header = $('.nk-header');
    var $navbarTop = $header.find('.nk-navbar-top');
    var $main = $('.nk-main');
    var $overlay = $('<div class="nk-share-place-overlay">').appendTo($body);
    var isOpened = void 0;

    // thanks http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k/10600491
    function abbreviateNumber(number, decPlaces) {
        decPlaces = Math.pow(10, decPlaces);
        var abbrev = ['k', 'm', 'b', 't'];
        for (var _i = abbrev.length - 1; _i >= 0; _i--) {
            var size = Math.pow(10, (_i + 1) * 3);
            if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                if (number === 1000 && _i < abbrev.length - 1) {
                    number = 1;
                    _i++;
                }
                number += abbrev[_i];
                break;
            }
        }
        return number;
    }

    /* SocialityShare and SocialLikes support */
    if (typeof $.fn.socialityShare !== 'undefined') {
        $('.nk-share-icons').socialityShare().on('counter.sociality-share', function onCountSocialityShare(event, service, number) {
            $(this).find('[data-share="' + service + '"] .sociality-share-counter').html(abbreviateNumber(number, 1) || '');
        });
    } else if (typeof $.fn.socialLikes !== 'undefined') {
        $('.nk-share-icons').socialLikes().on('counter.social-likes', function onCountSocialLikes(event, service, number) {
            $(this).find('.social-likes__counter_' + service).html(abbreviateNumber(number, 1) || '');
        });
    }

    self.toggleShare = function () {
        if (isOpened) {
            self.closeShare();
        } else {
            self.openShare();
        }
    };

    self.openShare = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        var size = $sharePlace.height();

        $sharePlace.addClass('active');

        // move header
        if ($navbarTop.hasClass('nk-navbar-fixed')) {
            tween.to($navbarTop, 0.3, {
                top: size,
                delay: 0.3
            });
        } else {
            tween.to($header, 0.3, {
                top: size,
                delay: 0.3
            });
        }

        // move main content
        tween.to($main, 0.3, {
            y: size,
            delay: 0.3
        });

        // show share
        tween.to($sharePlace, 0.3, {
            y: '100%',
            delay: 0.3
        });

        // show overlay
        tween.to($overlay, 0.3, {
            opacity: 0.6,
            display: 'block',
            delay: 0.3
        });

        // show title
        tween.to($shareTitle, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        });

        // show icons
        tween.staggerTo($shareIcons, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        }, 0.1);

        // trigger event
        $wnd.trigger('nk-open-share-place', [$sharePlace]);
    };

    self.closeShare = function () {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        $sharePlace.removeClass('active');

        // move header
        if ($navbarTop.hasClass('nk-navbar-fixed')) {
            tween.to($navbarTop, 0.3, {
                top: 0
            });
        } else {
            tween.to($header, 0.3, {
                top: 0
            });
        }

        // move main content
        tween.to($main, 0.3, {
            y: 0,
            onComplete: function onComplete() {
                // remove transform property... bug with sticky sidebars
                $main.css('transform', '');
            }
        });

        // hide share
        tween.to($sharePlace, 0.3, {
            y: '0%'
        });

        // hide overlay
        tween.to($overlay, 0.3, {
            opacity: 0,
            display: 'none'
        });

        // hide title
        tween.to($shareTitle, 0.3, {
            y: 20,
            opacity: 0
        });

        // hide icons
        tween.to($shareIcons, 0.3, {
            y: 20,
            opacity: 0
        });

        // trigger event
        $wnd.trigger('nk-close-share-place', [$sharePlace]);
    };

    $doc.on('click', '.nk-share-toggle', function (e) {
        self.toggleShare();
        e.preventDefault();
    });
    $doc.on('click', '.nk-share-place-overlay', function () {
        self.closeShare();
    });

    $wnd.on('scroll resize', function () {
        self.closeShare();
    });
}

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/
function _initNavbar() {
    var self = this;
    var $navbarTop = $('.nk-navbar-top');
    var $contactsTop = $('.nk-contacts-top');
    var $navbarLeft = $('.nk-navbar-left');

    // add mobile navbar
    var $mobileNavItems = $('[data-nav-mobile]');
    if ($mobileNavItems.length) {
        $mobileNavItems.each(function eachMobileNavItems() {
            var $nav = $($(this).html());
            var $mobileNav = $($(this).attr('data-nav-mobile'));

            // insert into mobile nav
            $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav').append($nav);
        });

        var $nav = $('.nk-navbar-mobile-content > ul.nk-nav');

        // remove background images
        $nav.find('.bg-image, .bg-video').remove();

        // remove mega menus
        $nav.find('.nk-mega-item > .dropdown').each(function eachMegaMenus() {
            var $drop = $(this).children('ul').addClass('dropdown');

            // fix mega menu columns
            $drop.find('> li > label').each(function eachMegaMenuLabels() {
                $(this).next().addClass('dropdown');
                $(this).parent().addClass('nk-drop-item');
                $(this).replaceWith($('<a href="#"></a>').html($(this).html()));
            });

            $(this).replaceWith($drop);
        });
        $nav.find('.nk-mega-item').removeClass('nk-mega-item');
    }

    // sticky navbar
    var navbarTop = $navbarTop.length ? $navbarTop.offset().top - pageBorderSize : 0;
    // fake hidden navbar to prevent page jumping on stick
    var $navbarFake = $('<div>').hide();
    function onScrollNav() {
        var stickyOn = $wnd.scrollTop() >= navbarTop;

        if (stickyOn) {
            $navbarTop.addClass('nk-navbar-fixed');
            $navbarFake.show();
        } else {
            $navbarTop.removeClass('nk-navbar-fixed');
            $navbarFake.hide();
        }
    }
    if ($navbarTop.hasClass('nk-navbar-sticky')) {
        $wnd.on('scroll resize', onScrollNav);
        onScrollNav();

        $navbarTop.after($navbarFake);
        self.debounceResize(function () {
            $navbarFake.height($navbarTop.innerHeight());
        });
    }

    // correct dropdown position
    function correctDropdown($item) {
        if ($item.parent().is('.nk-nav')) {
            var $dropdown = $item.children('.dropdown');
            var $parent = $item.parents('.nk-navbar:eq(0)');
            var $parentContainer = $parent.children('.container');
            $parentContainer = $parentContainer.length ? $parentContainer : $parent;

            // fix right value when sub menu is not hidden
            $dropdown.css('display', 'none');
            var isRight = $dropdown.css('right') !== 'auto';
            var $contacts = $item.parents('.nk-contacts-top:eq(0)');
            var css = {
                marginLeft: '',
                marginRight: '',
                marginTop: 0,
                display: 'block'
            };

            $dropdown.css(css);

            var rect = $dropdown[0].getBoundingClientRect();
            var rectContainer = $parentContainer[0].getBoundingClientRect();
            var itemRect = $item[0].getBoundingClientRect();

            // move dropdown from right corner (right corner will check in nav container)
            if (rect.right > rectContainer.right) {
                css.marginLeft = rectContainer.right - rect.right;
                $dropdown.css(css);
                rect = $dropdown[0].getBoundingClientRect();
            }

            // move dropdown from left corner
            if (rect.left - pageBorderSize < 0) {
                css.marginLeft = pageBorderSize - rect.left;
                $dropdown.css(css);
                rect = $dropdown[0].getBoundingClientRect();
            }

            // check if dropdown not under item
            var currentLeftPost = rect.left + (css.marginLeft || 0);
            if (currentLeftPost > itemRect.left) {
                css.marginLeft = (css.marginLeft || 0) - (currentLeftPost - itemRect.left);
            }

            // change to margin-right. In some cases left margin isn't working, for ex. in mega menu
            if (isRight) {
                css.marginRight = -1 * css.marginLeft;
                css.marginLeft = '';
            }

            // correct top position
            css.marginTop = $parent.innerHeight() - $dropdown.offset().top + $parent.offset().top;

            // add offset if contacts
            if ($contacts.length) {
                css.marginTop += parseFloat($contacts.css('padding-bottom') || 0);
            }

            // hide menu
            css.display = 'none';

            $dropdown.css(css);
        }
    }

    // toggle dropdown
    function closeSubmenu($item) {
        if ($item.length) {
            $item.removeClass('open');
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 0,
                display: 'none',
                onComplete: function onComplete() {
                    self.parallaxMouseInit();
                }
            });
            $wnd.trigger('nk-closed-submenu', [$item]);
        }
    }
    function openSubmenu($item) {
        if (!$item.hasClass('open')) {
            correctDropdown($item);
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 1,
                display: 'block'
            });
            $item.addClass('open');
            self.parallaxMouseInit();
            $wnd.trigger('nk-opened-submenu', [$item]);
        }
    }

    var dropdownTimeout = void 0;

    // show dropdowns in left menu icons
    $navbarLeft.find('.nk-nav-icons').on('click', 'li.nk-drop-item', function onClickLeftNavDropdown(e) {
        e.preventDefault();

        var $item = $(this);
        var $openedSiblings = $item.siblings('.open').add($item.siblings().find('.open'));

        clearTimeout(dropdownTimeout);
        closeSubmenu($openedSiblings);
        openSubmenu($item);
    });
    $navbarLeft.on('mouseenter', 'li.nk-drop-item', function () {
        clearTimeout(dropdownTimeout);
    });

    // show dropdowns in main menu
    $navbarTop.add($contactsTop).on('mouseenter', 'li.nk-drop-item', function onMouseEnterNavDropdown() {
        var $item = $(this);
        var $otherDropdown = $item.closest($contactsTop).length ? $navbarTop : $contactsTop;
        var $openedSiblings = $item.siblings('.open').add($item.siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings('.open')).add($item.parents('.nk-nav:eq(0)').parent().siblings().find('.open')).add($otherDropdown.find('.open'));

        clearTimeout(dropdownTimeout);
        closeSubmenu($openedSiblings);
        openSubmenu($item);
    }).on('mouseleave', 'li.nk-drop-item', function onMouseLeaveNavDropdown() {
        var $item = $(this);
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($item);
        }, 200);
    });

    // hide dropdowns
    $navbarTop.add($contactsTop).add($navbarLeft).on('mouseleave', function () {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($navbarTop.add($contactsTop).add($navbarLeft.find('.nk-nav-icons')).find('.open'));
        }, 400);
    });

    // hide / show
    // add / remove solid color
    var $autohideNav = $navbarTop.filter('.nk-navbar-autohide');
    self.throttleScroll(function (type, scroll) {
        var start = 400;
        var hideClass = 'nk-onscroll-hide';
        var showClass = 'nk-onscroll-show';

        // hide / show
        if (type === 'down' && scroll > start) {
            $autohideNav.removeClass(showClass).addClass(hideClass);
        } else if (type === 'up' || type === 'end' || type === 'start') {
            $autohideNav.removeClass(hideClass).addClass(showClass);
        }

        // add solid color
        if ($navbarTop.hasClass('nk-navbar-transparent')) {
            $navbarTop[(scroll > 70 ? 'add' : 'remove') + 'Class']('nk-navbar-solid');
        }
    });
}

/*------------------------------------------------------------------

  Init Navbar Side

-------------------------------------------------------------------*/
function _initNavbarSide() {
    var self = this;
    var $overlay = $('<div class="nk-navbar-overlay">').appendTo($body);

    // side navbars
    var $leftSide = $('.nk-navbar-left-side');
    var $rightSide = $('.nk-navbar-right-side');
    var $sideNavs = $('.nk-navbar-side');

    // toggle navbars
    function updateTogglers() {
        $('[data-nav-toggle]').each(function eachNavTogglers() {
            var active = $($(this).attr('data-nav-toggle')).hasClass('open');
            $(this)[(active ? 'add' : 'remove') + 'Class']('active');
        });
    }
    self.toggleSide = function ($side, speed) {
        self[$side.hasClass('open') ? 'closeSide' : 'openSide']($side, speed);
    };
    self.openSide = function ($side, speed) {
        if ($side.css('display') === 'none') {
            return;
        }

        $side.addClass('open');

        // show sidebar
        tween.to($side, speed || 0.4, {
            x: $side.hasClass('nk-navbar-left-side') ? '100%' : '-100%',
            onComplete: function onComplete() {
                self.parallaxMouseInit();
            }
        });

        // show overlay
        if ($side.hasClass('nk-navbar-overlay-content')) {
            tween.to($overlay, 0.3, {
                opacity: 0.6,
                display: 'block'
            });
        }

        updateTogglers();
    };
    self.closeSide = function ($side, speed) {
        $side.each(function eachSideNavs() {
            $(this).removeClass('open');

            // hide sidebar
            tween.to(this, speed || 0.4, {
                x: '0%'
            });

            self.parallaxMouseInit();
            updateTogglers();
        });

        if (!$sideNavs.filter('.nk-navbar-overlay-content.open').length) {
            // hide overlay
            tween.to($overlay, 0.3, {
                opacity: 0,
                display: 'none'
            });
        }
    };
    $doc.on('click', '[data-nav-toggle]', function onClickNavToggler(e) {
        var $nav = $($(this).attr('data-nav-toggle'));
        if ($nav.hasClass('open')) {
            self.closeSide($nav);
        } else {
            // hide another navigations
            $('[data-nav-toggle]').each(function eachNavToggle() {
                self.closeSide($($(this).attr('data-nav-toggle')));
            });

            self.openSide($nav);
        }
        e.preventDefault();
    });

    // overlay
    $doc.on('click', '.nk-navbar-overlay', function () {
        self.closeSide($sideNavs);
    });

    // hide sidebar if it invisible
    self.debounceResize(function () {
        $sideNavs.filter('.open').each(function eachOpenedSideNav() {
            if (!$(this).is(':visible')) {
                self.closeSide($(this));
            }
        });
    });

    // swipe side navbars
    if (!isTouch || typeof Hammer === 'undefined') {
        return;
    }
    var swipeStartSize = 50;
    var $swipeItem = void 0;
    var navSize = void 0;
    var openNav = void 0;
    var closeNav = void 0;
    var isRightSide = void 0;
    var isLeftSide = void 0;
    var isScrolling = 0;
    var swipeDir = void 0;
    var sidePos = false;
    var startSwipe = false;
    var endSwipe = false;

    // strange solution to fix pan events on the latest Chrome
    // https://github.com/hammerjs/hammer.js/issues/1065
    var mc = new Hammer.Manager(document, {
        touchAction: 'auto',
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
        recognizers: [[Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]]
    });

    // If we detect a scroll before a panleft/panright, disable panning
    // thanks: https://github.com/hammerjs/hammer.js/issues/771
    mc.on('panstart', function (e) {
        if (e.additionalEvent === 'panup' || e.additionalEvent === 'pandown') {
            isScrolling = 1;
        }
    });
    // Reenable panning
    mc.on('panend', function (e) {
        if (!isScrolling) {
            if ($swipeItem) {
                var swipeSize = void 0;
                if (sidePos) {
                    if (openNav) {
                        swipeSize = sidePos;
                    } else if (closeNav) {
                        swipeSize = navSize - sidePos;
                    } else {
                        swipeSize = 0;
                    }
                } else {
                    swipeSize = 0;
                }

                var transitionTime = Math.max(0.15, 0.4 * (navSize - swipeSize) / navSize);
                var swiped = 0;

                if (swipeSize && swipeSize > 10) {
                    var velocityTest = Math.abs(e.velocityX) > 0.7;
                    if (swipeSize >= navSize / 3 || velocityTest) {
                        swiped = 1;
                        if (openNav) {
                            self.openSide($swipeItem, transitionTime);
                        } else {
                            self.closeSide($swipeItem, transitionTime);
                        }
                    }
                }
                if (!swiped) {
                    if (openNav) {
                        self.closeSide($swipeItem, transitionTime);
                    } else {
                        self.openSide($swipeItem, transitionTime);
                    }
                }
            }
            openNav = false;
            closeNav = false;
            isRightSide = false;
            isLeftSide = false;
            swipeDir = false;
            sidePos = false;
            $swipeItem = false;
            startSwipe = false;
            endSwipe = false;
        }
        isScrolling = 0;
    });
    mc.on('panleft panright panup pandown', function (e) {
        if (isScrolling) {
            return;
        }

        var isFirst = false;
        var isFinal = e.isFinal;

        if (startSwipe === false) {
            startSwipe = e.center.x;
            isFirst = true;
        }
        endSwipe = e.center.x;

        // init
        if (isFirst) {
            if (e.direction === 2) {
                swipeDir = 'left';
            } else if (e.direction === 4) {
                swipeDir = 'right';
            } else {
                swipeDir = false;
            }

            // right side
            if ($rightSide && $rightSide.length) {
                navSize = $rightSide.width();

                // open
                if (wndW - startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = 1;
                    isRightSide = 1;

                    // close
                } else if (wndW - startSwipe >= navSize - 100 && $rightSide.hasClass('open')) {
                    closeNav = 1;
                    isRightSide = 1;
                }
            }

            // left side
            if ($leftSide && $leftSide.length && !isRightSide && $leftSide.is(':visible')) {
                navSize = $leftSide.width();

                // open
                if (startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = 1;
                    isLeftSide = 1;

                    // close
                } else if (startSwipe >= navSize - 100 && $leftSide.hasClass('open')) {
                    closeNav = 1;
                    isLeftSide = 1;
                }
            }

            // swipe item
            if (isLeftSide) {
                $swipeItem = $leftSide;
            } else if (isRightSide) {
                $swipeItem = $rightSide;
            } else {
                $swipeItem = false;
            }

            // move
        } else if (!isFinal && $swipeItem) {
            if (isRightSide && (openNav && swipeDir === 'left' || closeNav && swipeDir === 'right')) {
                // open side navbar
                if (openNav) {
                    sidePos = Math.min(navSize, Math.max(0, startSwipe - endSwipe));
                }

                // close side navbar
                if (closeNav) {
                    var curPos = startSwipe - endSwipe;
                    if (startSwipe < wndW - navSize) {
                        curPos = wndW - navSize - endSwipe;
                    }
                    sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos)));
                }

                tween.set($swipeItem, {
                    x: -100 * sidePos / navSize + '%'
                });
            } else if (isLeftSide && (openNav && swipeDir === 'right' || closeNav && swipeDir === 'left')) {
                // open mobile navbar
                if (openNav) {
                    sidePos = Math.min(navSize, Math.max(0, endSwipe - startSwipe));
                }

                // close mobile navbar
                if (closeNav) {
                    var curPos2 = endSwipe - startSwipe;
                    if (startSwipe > navSize) {
                        curPos2 = endSwipe - navSize;
                    }
                    sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos2)));
                }

                tween.set($swipeItem, {
                    x: 100 * sidePos / navSize + '%'
                });
            }
        }
    });

    // prevent scrolling when opening/hiding navigation
    addEventListener('touchmove', function (e) {
        if (isRightSide || isLeftSide) {
            e.preventDefault();
        }
    }, { passive: false });
}

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/
function _initNavbarFullscreen() {
    var self = this;
    var $navbar = $('.nk-navbar-full');
    var $navbarTop = $('.nk-navbar-top');
    var $navbarSocial = $navbar.find('.nk-nav-social');
    var navTransparent = void 0;
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleFullscreenNavbar = function () {
        self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
    };
    self.openFullscreenNavbar = function () {
        if (isOpened || !$navbar.length) {
            return;
        }
        isOpened = 1;

        var $navbarMenuItems = $navbar.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a');
        if (!$navbarMenuItems.length) {
            $navbarMenuItems = $navbar.find('.nk-nav > li > a');
        }

        // active all togglers
        $('.nk-navbar-full-toggle').addClass('active');

        // padding bottom if there is social block
        var paddingBottom = $navbar.find('.nk-nav-social').innerHeight();

        // add navbar top position
        navTransparent = $navbarTop.length ? $navbarTop.hasClass('nk-navbar-transparent') && !$navbarTop.hasClass('nk-navbar-solid') : 1;
        navRect = $navbarTop[0] ? $navbarTop[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($navbar, {
            top: navRect ? navRect.top + (navTransparent ? 0 : navRect.height) : 0,
            paddingTop: navRect && navTransparent ? navRect.height : 0,
            paddingBottom: paddingBottom
        });
        tween.set($navbarMenuItems, {
            y: -10,
            opacity: 0
        });
        tween.set($navbarSocial, {
            y: 10,
            opacity: 0
        });
        tween.to($navbar, 0.5, {
            opacity: 1,
            display: 'block',
            onComplete: function onComplete() {
                self.initPluginNano($navbar);
            }
        });
        tween.staggerTo($navbarMenuItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        }, 0.1);
        tween.to($navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        });

        $navbar.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-full-navbar', [$navbar]);
    };

    self.closeFullscreenNavbar = function (dontTouchBody) {
        if (!isOpened || !$navbar.length) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-navbar-full-toggle').removeClass('active');

        // set top position and animate
        tween.to($navbar, 0.5, {
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open navbar block
        $navbar.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-full-navbar', [$navbar]);
    };

    $doc.on('click', '.nk-navbar-full-toggle', function (e) {
        self.toggleFullscreenNavbar();
        e.preventDefault();
    });

    $wnd.on('nk-open-search-block', function () {
        self.closeFullscreenNavbar(1);
    });
    $wnd.on('nk-open-share-place', self.closeFullscreenNavbar);
}

/*------------------------------------------------------------------

  Init Dropdown Effect 1 for side navbars and fullscreen

-------------------------------------------------------------------*/
function _initNavbarDropEffect() {
    var self = this;
    var $navbars = $('.nk-navbar-side, .nk-navbar-full').find('.nk-nav');

    // add back item for dropdowns
    $navbars.find('.dropdown').prepend('<li class="bropdown-back"><a href="#">' + self.options.templates.secondaryNavbarBackItem + '</a></li>');

    // change height of opened dropdown
    function updateSideNavDropdown($item) {
        var $nav = $item.parents('.nk-navbar:eq(0)');
        var $khNav = $nav.find('.nk-nav');
        var $nanoCont = $khNav.children('.nano-content');
        var $khNavRow = $khNav.parent();
        var $drop = $nav.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed)');

        if ($drop.length) {
            var dropHeight = $drop.innerHeight();

            // vertical center for dropdown
            if ($khNavRow.hasClass('nk-nav-row-center')) {
                $drop.css({
                    top: 0
                });

                $khNav.hide();
                var nanoHeight = $khNavRow.innerHeight();
                $khNav.show();
                var nanoNavRowHeight = nanoHeight;
                var nanoTop = $khNavRow.offset().top;
                var dropTop = $drop.offset().top;

                var top = nanoTop - dropTop;
                if (dropHeight < nanoNavRowHeight) {
                    top += (nanoHeight - dropHeight) / 2;
                }

                $drop.css({
                    top: top
                });
            }

            $khNav.css('height', dropHeight);
            self.initPluginNano($nav);

            // scroll to top
            tween.to($nanoCont, 0.3, {
                scrollTo: { y: 0 },
                delay: 0.2
            });
        } else {
            $khNav.css('height', '');
        }
        self.initPluginNano($nav);
    }

    // open / close submenu
    function toggleSubmenu(open, $drop) {
        var $newItems = $drop.find('> .dropdown > li > a');
        var $oldItems = $drop.parent().find('> li > a');

        if (open) {
            $drop.addClass('open').parent().addClass('closed');
        } else {
            $drop.removeClass('open').parent().removeClass('closed');

            var tmp = $newItems;
            $newItems = $oldItems;
            $oldItems = tmp;
        }

        // show items
        tween.set($newItems, {
            x: open ? '20%' : '-20%',
            opacity: 0,
            display: 'block'
        }, 0.1);
        tween.staggerTo($newItems, 0.2, {
            x: '0%',
            opacity: 1,
            delay: 0.1
        }, 0.05);

        // hide items
        tween.staggerTo($oldItems, 0.2, {
            x: open ? '-20%' : '20%',
            opacity: 0
        }, 0.05, function () {
            $oldItems.css('display', 'none');
        });
    }

    $navbars.on('click', '.nk-drop-item > a', function onClickDropItem(e) {
        toggleSubmenu(true, $(this).parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
    $navbars.on('click', '.bropdown-back > a', function onClickDropItemBack(e) {
        toggleSubmenu(false, $(this).parent().parent().parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
}

/*------------------------------------------------------------------

  Init Search Block

-------------------------------------------------------------------*/
function _initSearchBlock() {
    var self = this;
    var $search = $('.nk-search');
    var $searchField = $search.find('.nk-search-field');
    var $nav = $('.nk-navbar-top');
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleSearch = function () {
        self[(isOpened ? 'close' : 'open') + 'Search']();
    };

    self.openSearch = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $('.nk-search-toggle').addClass('active');

        // add search top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($search, {
            paddingTop: navRect ? navRect.bottom : 0
        });
        tween.set($searchField, {
            y: -10,
            opacity: 0
        });
        tween.to($search, 0.5, {
            opacity: 1,
            display: 'block'
        });
        tween.to($searchField, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        });

        // open search block
        $search.addClass('open');

        // focus search input
        if (self.options.enableSearchAutofocus) {
            setTimeout(function () {
                $search.find('.nk-search-field input').focus();
            }, 100);
        }

        // trigger event
        $wnd.trigger('nk-open-search-block', [$search]);
    };

    self.closeSearch = function () {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-search-toggle').removeClass('active');

        tween.to($search, 0.5, {
            opacity: 0,
            display: 'none'
        });

        // open search block
        $search.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-search-block', [$search]);
    };

    $doc.on('click', '.nk-search-toggle', function (e) {
        self.toggleSearch();

        e.preventDefault();
    });
    $wnd.on('nk-open-full-navbar', function () {
        self.closeSearch();
    });
    $wnd.on('nk-open-share-place', function () {
        self.closeSearch();
    });
    $wnd.on('scroll', function () {
        self.closeSearch();
    });
}

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/
function _initHeaderTitle() {
    var self = this;
    var $navbarHeader = $('.nk-header');
    var isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
    var isNavbarTransparent = $('.nk-navbar-top').hasClass('nk-header-transparent');
    var $headerTitle = $('.nk-header-title > .nk-header-table');
    var $fullHeaderTitle = $('.nk-header-title-full > .nk-header-table');

    // remove header title padding if navbar opaque
    if (isNavbarOpaque) {
        $headerTitle.css('padding-top', 0);
    }

    self.debounceResize(function () {
        if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
            return;
        }

        var navH = $navbarHeader.outerHeight() || 0;

        // add header title padding
        if (!isNavbarTransparent && !isNavbarOpaque) {
            $headerTitle.css('padding-top', navH);
        }

        // fix header title height
        if ($fullHeaderTitle.length) {
            var headerH = '100vh';

            if (isNavbarOpaque) {
                headerH = 'calc(100vh - ' + navH + 'px)';
            }

            $fullHeaderTitle.css('min-height', headerH);
        }
    });
}

/*------------------------------------------------------------------

  Init Counters

-------------------------------------------------------------------*/
function _initCounters() {
    var self = this;
    var $progressCount = $('.nk-progress.nk-count');
    var $numberCount = $('.nk-count:not(.nk-progress)');

    // set default progress
    $progressCount.each(function eachProgressCount() {
        $(this).attr('data-nk-count', $(this).attr('data-progress')).attr('data-nk-mask', $(this).attr('data-progress-mask')).find('.nk-progress-line > div').css('width', ($(this).attr('data-nk-count-from') || '0') + '%').find('.nk-progress-percent').html('');
    });

    // set default numbers
    $numberCount.each(function eachNumberCount() {
        $(this).attr('data-nk-count', $(this).attr('data-nk-count') || parseInt($(this).text(), 10)).html($(this).attr('data-nk-count-from') || '0');
    });

    var countersNum = 1;
    function runCounters() {
        if (!countersNum) {
            return;
        }

        var progress = $progressCount.filter('[data-nk-count]');
        var numbers = $numberCount.filter('[data-nk-count]');
        countersNum = progress.length + numbers.length;

        // progress
        $progressCount.filter('[data-nk-count]').each(function eachProgressCount() {
            var $item = $(this);
            if (self.isInViewport($item)) {
                var count = {
                    curr: $item.attr('data-nk-count-from') || '0',
                    to: $item.attr('data-nk-count'),
                    mask: $item.attr('data-nk-mask') || '{$}%'
                };
                var $itemLine = $item.find('.nk-progress-line > div');
                var $itemLabel = $item.find('.nk-progress-percent');

                tween.to($itemLine, 1, {
                    width: count.to + '%'
                });
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate: function onUpdate() {
                        $itemLabel.text(count.mask.replace('{$}', count.curr));
                    }
                });
                $item.removeAttr('data-nk-count');
            }
        });

        // number
        $numberCount.filter('[data-nk-count]').each(function eachNumberCount() {
            var $item = $(this);
            if (self.isInViewport($item)) {
                var count = {
                    curr: $item.text(),
                    to: $item.attr('data-nk-count')
                };
                $item.removeAttr('data-nk-count data-nk-count-from');
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate: function onUpdate() {
                        $item.text(count.curr);
                    }
                });
            }
        });
    }

    self.throttleScroll(runCounters);
    runCounters();
}

/*------------------------------------------------------------------

  Init Side Buttons

-------------------------------------------------------------------*/
function _initSideButtons() {
    var self = this;
    var $sideButtons = $('.nk-side-buttons');

    // hide on scroll
    self.throttleScroll(function (type, scroll) {
        var start = 400;

        if (scroll > start) {
            $sideButtons.addClass('nk-side-buttons-show-scroll-top');
        } else {
            $sideButtons.removeClass('nk-side-buttons-show-scroll-top');
        }
    });

    // scroll top
    $doc.on('click', '.nk-scroll-top', function (e) {
        e.preventDefault();
        self.scrollTo('top');
    });
}

/*------------------------------------------------------------------

  Init Actions Like and Heart

-------------------------------------------------------------------*/
function _initActionsLike() {
    var self = this;

    // like / dislike animation init
    var $likeAnimation = void 0;
    var $dislikeAnimation = void 0;
    if (self.options.enableActionLikeAnimation) {
        $likeAnimation = $('<div class="nk-like-animation">' + self.options.templates.likeAnimationLiked + '</div>').appendTo($body);
        $dislikeAnimation = $('<div class="nk-dislike-animation">' + self.options.templates.likeAnimationDisliked + '</div>').appendTo($body);
    }
    function runLikeAnimation(type) {
        var $animateItem = type === 'like' ? $likeAnimation : $dislikeAnimation;
        tween.set($animateItem, {
            scale: 1,
            opacity: 0
        });
        tween.to($animateItem, 0.3, {
            scale: 1.1,
            opacity: 0.5,
            display: 'block',
            ease: Power2.easeIn,
            onComplete: function onComplete() {
                tween.to($animateItem, 0.3, {
                    scale: 1.2,
                    opacity: 0,
                    display: 'none',
                    ease: Power2.easeOut
                });
            }
        });
    }

    // heart action
    $doc.on('click', '.nk-action-heart', function heartClick(e) {
        e.preventDefault();
        var $like = $(this);

        if ($like.hasClass('busy')) {
            return;
        }

        var $num = $like.find('.num');
        var type = $like.hasClass('liked') ? 'dislike' : 'like';
        var $parent = $like.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $like.addClass('busy');
        self.options.events.actionHeart({
            $dom: $like,
            $parent: $parent,
            type: type,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text(num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $like[type === 'like' ? 'addClass' : 'removeClass']('liked');
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    runLikeAnimation(type);
                }
            }
        });
    });

    // like action
    $doc.on('click', '.nk-action-like .like-icon, .nk-action-like .dislike-icon', function likeClick(e) {
        e.preventDefault();
        var $like = $(this);
        var $parentLike = $like.parent();

        if ($parentLike.hasClass('busy')) {
            return;
        }

        var isLiked = $parentLike.hasClass('liked');
        var isDisliked = $parentLike.hasClass('disliked');
        var isDislike = $like.hasClass('dislike-icon');

        var $num = $parentLike.find('.num');
        var $parent = $parentLike.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var type = isDislike ? 'dislike' : 'like';
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $parentLike.addClass('busy');
        self.options.events.actionLike({
            $dom: $like,
            $parent: $parent,
            type: type,
            isLiked: isLiked,
            isDisliked: isDisliked,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text((num > 0 ? '+' : '') + num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $parentLike.removeClass('liked disliked');
                if (!(isLiked && !isDislike || isDisliked && isDislike)) {
                    $parentLike.addClass(type === 'like' ? 'liked' : 'disliked');
                }
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    if (type === 'like' && !isLiked || type === 'dislike' && !isDisliked) {
                        runLikeAnimation(type);
                    }
                }
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Store

-------------------------------------------------------------------*/
function _initStore() {
    var self = this;

    // scroll to ratings
    $doc.on('click', 'a.nk-product-rating', function onClickProductRating(e) {
        var isHash = this.hash;
        if (isHash) {
            var $hashBlock = $(isHash).parents('.nk-tabs:eq(0)');
            if ($hashBlock.length) {
                self.scrollTo($hashBlock);
            }
            $('.nk-tabs').find('[data-toggle="tab"][href="' + isHash + '"]').click();
        }
        e.preventDefault();
    });

    // carousel for products
    $('.nk-product-carousel').each(function eachProductCarousel() {
        var $carousel = $(this).find('.nk-carousel-inner');
        var $thumbs = $(this).find('.nk-product-carousel-thumbs');
        var $thumbsCont = $thumbs.children();
        var curY = 0;
        var thumbsH = 0;
        var thumbsContH = 0;

        function updateValues() {
            if ($thumbsCont[0]._gsTransform && $thumbsCont[0]._gsTransform.y) {
                curY = $thumbsCont[0]._gsTransform.y;
            } else {
                curY = 0;
            }
            thumbsH = $thumbs.height();
            thumbsContH = $thumbsCont.height();
        }

        $thumbsCont.on('click', '> div', function onClickThumb() {
            var index = $(this).index();
            $carousel.flickity('select', index);
        });

        $carousel.on('select.flickity', function () {
            var api = $carousel.data('flickity');
            if (!api) {
                return;
            }
            // set selected nav cell
            var $selected = $thumbsCont.children().removeClass('active').eq(api.selectedIndex).addClass('active');

            // scroll nav
            updateValues();
            var selectedTop = $selected.position().top;
            if (selectedTop < 0) {
                tween.to($thumbsCont, 0.2, {
                    y: curY - selectedTop
                });
            } else {
                var selectedH = $selected.height();
                if (selectedTop + selectedH > thumbsH) {
                    tween.to($thumbsCont, 0.2, {
                        y: curY - (selectedTop + selectedH - thumbsH)
                    });
                }
            }
        });

        var startY = false;
        var mc = new Hammer.Manager($thumbs[0]);
        mc.add(new Hammer.Pan({
            pointers: 1,
            threshold: 0
        }));
        mc.on('pan press', function (e) {
            e.preventDefault();

            // init
            if (startY === false) {
                updateValues();
                startY = curY;
            }

            // move
            if (thumbsContH > thumbsH) {
                curY = Math.min(0, Math.max(e.deltaY + startY, thumbsH - thumbsContH));
                tween.set($thumbsCont, {
                    y: curY
                });
            }
            if (e.isFinal) {
                startY = false;
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Background Images Parallax

-------------------------------------------------------------------*/
function _initBackgroundImages() {
    var self = this;

    if (!self.options.enableMouseParallax) {
        return;
    }

    var $parallaxImages = $('.nk-main .bg-image').parent().add($('.nk-main .bg-image'));

    // fix for Jarallax
    $parallaxImages.css('transform', 'translate3d(0,0,0)');

    self.parallaxMouseInit();
    $wnd.on('resize scroll load', function () {
        self.parallaxMouseInit();
    });
}

/*------------------------------------------------------------------

  Mouse Parallax

-------------------------------------------------------------------*/
var $parallaxMouseList = false;
var parallaxMouseTimeout = void 0;
var parallaxMouseFirstRun = 1;
// run parallax animation
function parallaxMouseRun(x, y, deviceOrientation) {
    var maxOffset = 30;
    var data = void 0;
    var itemX = void 0;
    var itemY = void 0;
    $parallaxMouseList.each(function eachParallaxMouse() {
        data = $(this).data('nk-parallax-mouse-data');

        // don't animate if block isn't in viewport
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || !data.isInViewport && !(deviceOrientation && parallaxMouseFirstRun)) {
            return;
        }

        // device acceleration calculate
        if (deviceOrientation) {
            itemX = -maxOffset * x;
            itemY = -maxOffset * y;

            // mouse calculate
        } else {
            itemX = (data.rect.width - (x - data.rect.left)) / data.rect.width;
            itemY = (data.rect.height - (y - data.rect.top)) / data.rect.height;
            if (itemX > 1 || itemX < 0 || itemY > 1 || itemY < 0) {
                itemX = 0.5;
                itemY = 0.5;
            }
            itemX = maxOffset * (itemX - 0.5) * 2;
            itemY = maxOffset * (itemY - 0.5) * 2;
        }

        // if first run orientation on device, set default values without animation
        if (deviceOrientation && parallaxMouseFirstRun) {
            tween.set(this, {
                x: itemX,
                y: itemY
            });
        } else {
            tween.to(this, deviceOrientation ? 2 : 20, {
                x: itemX,
                y: itemY
            });
        }
    });
    parallaxMouseFirstRun = 0;
}

function _parallaxMouseInit() {
    var self = this;
    if (!self.options.enableMouseParallax) {
        return;
    }

    clearTimeout(parallaxMouseTimeout);
    parallaxMouseTimeout = setTimeout(function () {
        var $newParallax = $('.bg-image:not(.bg-parallaxed)').addClass('bg-parallaxed');
        if ($newParallax.length) {
            // add new parallax blocks
            if ($parallaxMouseList) {
                $parallaxMouseList = $parallaxMouseList.add($newParallax);

                // first init parallax
            } else {
                $parallaxMouseList = $newParallax;
                if (isMobile && window.DeviceOrientationEvent) {
                    $wnd.on('deviceorientation', function () {
                        parallaxMouseRun(event.gamma / 90, event.beta / 180, true);
                    });

                    // no smooth on firefox
                } else if (!isFireFox) {
                    $wnd.on('mousemove', function (event) {
                        parallaxMouseRun(event.clientX, event.clientY);
                    });
                }
            }
        }

        // update data for parallax blocks
        if ($parallaxMouseList) {
            $parallaxMouseList.each(function eachParallaxMouse() {
                var $parent = $(this).parent();
                $(this).data('nk-parallax-mouse-data', {
                    isInViewport: self.isInViewport($parent) ? $parent.is(':visible') : 0,
                    rect: $parent[0].getBoundingClientRect()
                });
            });
        }
    }, 100);
}

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/
function _initAnchors() {
    var self = this;

    // click on anchors
    var $leftSideNav = $('.nk-navbar-left-side');
    var $rightSideNav = $('.nk-navbar-right-side');
    function closeNavs() {
        self.closeSide($leftSideNav);
        self.closeSide($rightSideNav);
        self.closeFullscreenNavbar();
    }
    $doc.on('click', '.navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor', function clickAnchor(e) {
        var isHash = this.hash;
        var isURIsame = this.baseURI === window.location.href;

        if (isHash && isURIsame) {
            // sometimes hashs have no valid selector like ##hash, it will throw errors
            try {
                var $hashBlock = $(isHash);
                var hash = isHash.replace(/^#/, '');
                if ($hashBlock.length || hash === 'top' || hash === 'bottom') {
                    // close navigations
                    closeNavs();

                    // add hash to address bar
                    if ($hashBlock.length) {
                        $hashBlock.attr('id', '');
                        document.location.hash = hash;
                        $hashBlock.attr('id', hash);
                    }

                    // scroll to block
                    self.scrollTo($hashBlock.length ? $hashBlock : hash);

                    e.preventDefault();
                }
            } catch (ev) {
                // console.error(e);
            }
        }
    });

    // add active class on navbar items
    var $anchorItems = $('.nk-navbar .nk-nav > li > a[href*="#"]');
    var anchorBlocks = [];
    function hashInArray(item) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            if (anchorBlocks[k].hash === item) {
                return k;
            }
        }
        return false;
    }
    // get all anchors + blocks on the page
    $anchorItems.each(function eachAnchorItems() {
        var hash = this.hash.replace(/^#/, '');
        if (!hash) {
            return;
        }

        var $item = $(this).parent();
        var $block = $('#' + hash);

        if (hash && $block.length || hash === 'top') {
            var inArray = hashInArray(hash);
            if (inArray === false) {
                anchorBlocks.push({
                    hash: hash,
                    $item: $item,
                    $block: $block
                });
            } else {
                anchorBlocks[inArray].$item = anchorBlocks[inArray].$item.add($item);
            }
        }
    });
    // prepare anchor list and listen for scroll to activate items in navbar
    function updateAnchorItemsPositions() {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var blockTop = 0;
            var blockH = wndH;
            if (item.$block.length) {
                blockTop = item.$block.offset().top;
                blockH = item.$block.innerHeight();
            }
            item.activate = blockTop - wndH / 2;
            item.deactivate = blockTop + blockH - wndH / 2;
        }
    }
    function setAnchorActiveItem(type, ST) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var active = ST >= item.activate && ST < item.deactivate;
            item.$item[active ? 'addClass' : 'removeClass']('active');
        }
    }
    if (anchorBlocks.length) {
        updateAnchorItemsPositions();
        setAnchorActiveItem('static', $wnd.scrollTop());
        self.throttleScroll(setAnchorActiveItem);
        self.debounceResize(updateAnchorItemsPositions);
    }
}

/*------------------------------------------------------------------

  Init Line For Boxes
  <div class="nk-box nk-box-line"></div>

-------------------------------------------------------------------*/
function _initLinesForBoxes() {
    var self = this;
    var $rowsWithBoxes = void 0;

    $('.row').each(function eachRows() {
        if ($(this).find('> * > .nk-box-line').length) {
            $rowsWithBoxes = $rowsWithBoxes ? $rowsWithBoxes.add($(this)) : $(this);
        }
    });

    // support for VC
    $('.vc_row').each(function eachVCRows() {
        if ($(this).find('> div > div > div > .nk-box-line').length) {
            $rowsWithBoxes = $rowsWithBoxes ? $rowsWithBoxes.add($(this)) : $(this);
        }
    });

    if (!$rowsWithBoxes) {
        return;
    }

    function calculate() {
        $rowsWithBoxes.each(function eachRowsWithBoxes() {
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var $this = $(this);

            // check all rows and add in array
            $this.children('*').each(function eachRowChildrens() {
                topPosition = $(this).position().top;
                if (currentRowStart !== topPosition) {
                    currentRowStart = topPosition;
                    rowDivs.push($(this));
                } else if (rowDivs[rowDivs.length - 1]) {
                    rowDivs[rowDivs.length - 1] = rowDivs[rowDivs.length - 1].add($(this));
                } else {
                    rowDivs[(rowDivs.length || 1) - 1] = $(this);
                }
            });

            // support for VC
            if ($this.hasClass('vc_row')) {
                // remove additional classnames
                $(this).find('> div > div > div > .nk-box-line').removeClass('nk-box-line-top nk-box-last');

                // add new classnames
                for (var k = 0; k < rowDivs.length; k++) {
                    rowDivs[k].last().find('> div > div > .nk-box-line').addClass('nk-box-last');
                    if (k > 0) {
                        rowDivs[k].find('> div > div > .nk-box-line').addClass('nk-box-line-top');
                    }
                }

                // bootstrap
            } else {
                // remove additional classnames
                $this.find('> * > .nk-box-line').removeClass('nk-box-line-top nk-box-last');

                // add new classnames
                for (var _k = 0; _k < rowDivs.length; _k++) {
                    rowDivs[_k].last().children('.nk-box-line').addClass('nk-box-last');
                    if (_k > 0) {
                        rowDivs[_k].children('.nk-box-line').addClass('nk-box-line-top');
                    }
                }
            }
        });
    }

    calculate();
    self.debounceResize(calculate);
}

/*------------------------------------------------------------------

  Init Image Boxes

-------------------------------------------------------------------*/
function _initImageBoxes() {
    var $imgBox = void 0;
    var $img = void 0;
    var rect = void 0;
    var fromCenter = void 0;
    var run = void 0;
    var scaleFrom = void 0;
    var scaleTo = void 0;
    var allBoxesSelector = '.nk-image-box-1:not(.nk-no-effect), .nk-image-box-1-a:not(.nk-no-effect), .nk-image-box-2:not(.nk-no-effect), .nk-image-box-3:not(.nk-no-effect), .nk-image-box-4:not(.nk-no-effect), .nk-image-box-5:not(.nk-no-effect)';

    // image animation
    $(allBoxesSelector).each(function eachImageBoxes() {
        $img = $(this).find('img, div.nk-portfolio-image');
        if ($img.attr('data-from')) {
            tween.to($img, 2, {
                scale: $img.attr('data-from')
            });
        }
    });
    $doc.on('mouseenter', allBoxesSelector, function onMouseEnterImageBoxes() {
        $imgBox = $(this);
        $img = $imgBox.find('img, div.nk-portfolio-image');
        scaleFrom = $img.attr('data-from') || 1;
        scaleTo = $img.attr('data-to') || 1.05;
        tween.to($img, 1, {
            scale: scaleTo
        });
        run = 1;
    }).on('mouseleave', allBoxesSelector, function () {
        run = 0;
        tween.to($img, 1, {
            scale: scaleFrom,
            x: 0,
            y: 0
        });
    }).on('mousemove', allBoxesSelector, function (e) {
        window.requestAnimationFrame(function () {
            if (run) {
                rect = $imgBox[0].getBoundingClientRect();
                fromCenter = [(rect.width / 2 - e.clientX + rect.left) / (rect.width / 2), (rect.height / 2 - e.clientY + rect.top) / (rect.height / 2)];
                tween.to($img, 7, {
                    x: rect.width * (scaleTo - 1) * fromCenter[0] / 2,
                    y: rect.height * (scaleTo - 1) * fromCenter[1] / 2
                });
            }
        });
    });

    // overlay smart show
    $doc.on('mouseenter mouseleave', '.nk-image-box-5', function onMouseEnterImageBoxe5(e) {
        var $overlay = $(this).find('.nk-image-box-overlay');
        var itemRect = $imgBox[0].getBoundingClientRect();

        // detect mouse enter or leave
        var x = (itemRect.width / 2 - e.clientX + itemRect.left) / (itemRect.width / 2);
        var y = (itemRect.height / 2 - e.clientY + itemRect.top) / (itemRect.height / 2);
        var enter = e.type === 'mouseenter';
        var endX = '0%';
        var endY = '0%';
        if (Math.abs(x) > Math.abs(y)) {
            endX = (x > 0 ? '-10' : '10') + endX;
        } else {
            endY = (y > 0 ? '-10' : '10') + endY;
        }

        if (enter) {
            tween.set($overlay, {
                x: endX,
                y: endY
            });
        }
        tween.to($overlay, 0.25, {
            x: enter ? '0%' : endX,
            y: enter ? '0%' : endY,
            display: enter ? 'flex' : 'none',
            ease: Power1.easeInOut
        });
    });
}

/*------------------------------------------------------------------

 Init Fullscreen Video

 -------------------------------------------------------------------*/
function _initVideoFullscreen() {
    if (typeof window.VideoWorker === 'undefined') {
        return;
    }
    var self = this;

    // open fullscreen videos
    var openedFSVideo = void 0;
    self.openFullScreenVideo = function (url) {
        if (openedFSVideo) {
            return;
        }
        openedFSVideo = 1;

        // get api for this video
        self.FullScreenVideoApi = new VideoWorker(url, {
            autoplay: 1,
            loop: 0,
            mute: 0,
            controls: 1
        });

        // set video size
        function setVideoSize() {
            var ratio = 16 / 9;
            var resultW = void 0;
            var resultH = void 0;

            if (ratio > wndW / wndH) {
                resultW = wndW * 0.9;
                resultH = resultW / ratio;
            } else {
                resultH = wndH * 0.9;
                resultW = resultH * ratio;
            }
            self.FullScreenVideoWrapper.css({
                width: resultW,
                height: resultH,
                top: (wndH - resultH) / 2,
                left: (wndW - resultW) / 2
            });
        }

        // create fullscreen video wrapper if doesn't exist
        if (!self.FullScreenVideo) {
            self.FullScreenVideo = $('<div class="nk-video-fullscreen"></div>').appendTo($body);

            self.closeFullScreenVideo = function () {
                if (openedFSVideo) {
                    openedFSVideo = 0;

                    self.FullScreenVideoApi.pause();

                    // hide animation
                    tween.to(self.FullScreenVideo, 0.4, {
                        opacity: 0,
                        display: 'none',
                        onComplete: function onComplete() {
                            self.FullScreenVideoWrapper.html('');
                        }
                    });
                    tween.to(self.FullScreenVideoWrapper, 0.4, {
                        scale: 0.9
                    });

                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            };

            // close icon
            $('<div class="nk-video-fullscreen-close">' + self.options.templates.fullscreenVideoClose + '</div>').on('click', self.closeFullScreenVideo).appendTo(self.FullScreenVideo);

            // video container
            self.FullScreenVideoWrapper = $('<div class="nk-video-fullscreen-cont"></div>').appendTo(self.FullScreenVideo);

            setVideoSize();
            self.debounceResize(setVideoSize);
        }

        // check api and run fullscreen
        if (self.FullScreenVideoApi && self.FullScreenVideoApi.isValid()) {
            self.FullScreenVideoApi.getIframe(function (iframe) {
                var $parent = $(iframe).parent();
                self.FullScreenVideoWrapper.append(iframe);
                $parent.remove();

                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }

                // show animation
                tween.fromTo(self.FullScreenVideo, 0.4, {
                    opacity: 0
                }, {
                    opacity: 1,
                    display: 'block'
                });
                tween.fromTo(self.FullScreenVideoWrapper, 0.4, {
                    opacity: 0,
                    scale: 0.9
                }, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.3
                });

                // prevent body scrolling
                self.bodyOverflow(1);
            });
        }
    };
    $doc.on('click', '.nk-video-fullscreen-toggle', function onClickVideoFullscreen(e) {
        e.preventDefault();
        self.openFullScreenVideo($(this).attr('href'));
    });
}

/*------------------------------------------------------------------

 Init Video Blocks

 -------------------------------------------------------------------*/
function _initVideoBlocks() {
    if (typeof window.VideoWorker === 'undefined') {
        return;
    }
    var self = this;

    // init plain video
    function addPlainPlayButton($plainCont) {
        $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoIcon);
    }
    function addPlainLoadButton($plainCont) {
        $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoLoadIcon || self.options.templates.plainVideoIcon);
    }
    $('.nk-plain-video[data-video]:not(.nk-plain-video-enabled)').addClass('nk-plain-video-enabled').each(function eachPlainVideo() {
        var $plainCont = $(this);
        var $plainIframe = void 0;
        var url = $(this).attr('data-video');
        var thumb = $(this).attr('data-video-thumb');
        var api = new VideoWorker(url, {
            autoplay: 0,
            loop: 0,
            mute: 0,
            controls: 1
        });

        if (api && api.isValid()) {
            var loaded = 0;
            api.getIframe(function (iframe) {
                // add iframe
                $plainIframe = $(iframe);
                var $parent = $plainIframe.parent();
                tween.set(iframe, {
                    opacity: 0,
                    visibility: 'hidden'
                });
                $plainIframe.appendTo($plainCont);
                $parent.remove();

                // add play button
                $plainCont.append('<span class="nk-video-plain-toggle"></span>');
                addPlainPlayButton($plainCont);

                // add play event
                $plainCont.on('click', function () {
                    if (isMobile) {
                        window.open(api.url);
                        return;
                    }

                    api.play();

                    // add loading button
                    if (!loaded) {
                        addPlainLoadButton($plainCont);
                    }
                });
            });
            // set thumb
            if (thumb) {
                $plainCont.css('background-image', 'url("' + thumb + '")');
            } else {
                api.getImageURL(function (imgSrc) {
                    $plainCont.css('background-image', 'url("' + imgSrc + '")');
                });
            }
            if (isMobile) {
                return;
            }
            api.on('play', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 1,
                    visibility: 'visible',
                    onComplete: function onComplete() {
                        // add play button
                        if (!loaded) {
                            addPlainPlayButton($plainCont);
                            loaded = 1;
                        }
                    }
                });

                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }
            });
            api.on('pause', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 0,
                    onComplete: function onComplete() {
                        tween.set($plainIframe, {
                            visibility: 'hidden'
                        });
                    }
                });
            });
        }
    });
}

/*------------------------------------------------------------------

  Init GIFs

-------------------------------------------------------------------*/
function _initGIF() {
    var self = this;

    // load gif in background
    function loadGif(url, cb) {
        var temp = new Image();
        temp.onload = function () {
            cb();
        };
        temp.src = url;
    }

    // play gif
    function playGif(item) {
        var $item = $(item);
        if (!item.gifPlaying) {
            item.gifPlaying = true;
            if (item.khGifLoaded) {
                $item.addClass('nk-gif-playing');
                $item.find('img').attr('src', $item.find('img').attr('data-gif'));
            } else if (!item.khGifLoading) {
                item.khGifLoading = 1;
                $item.addClass('nk-gif-loading');
                loadGif($item.find('img').attr('data-gif'), function () {
                    item.khGifLoaded = 1;
                    $item.removeClass('nk-gif-loading');
                    if (item.gifPlaying) {
                        item.gifPlaying = false;
                        playGif(item);
                    }
                });
            }
        }
    }

    // stop playing gif
    function stopGif(item) {
        var $item = $(item);
        if (item.gifPlaying) {
            item.gifPlaying = false;
            $item.removeClass('nk-gif-playing');
            $item.find('img').attr('src', $item.find('img').attr('data-gif-static'));
        }
    }

    // prepare gif containers
    $('.nk-gif').each(function eachGif() {
        var $this = $(this);
        // add toggle button
        $this.append('<a class="nk-gif-toggle">' + self.options.templates.gifIcon + '</a>');

        // add loading circle
        $this.append('<div class="nk-loading-spinner"><i></i></div>');

        $this.find('img').attr('data-gif-static', $this.find('img').attr('src'));
    });

    // hover gif
    $('.nk-gif-hover').on('mouseenter', function onMouseEnterGif() {
        $(this).addClass('hover');
        playGif(this);
    }).on('mouseleave', function onMouseLeaveGif() {
        $(this).removeClass('hover');
        stopGif(this);
    });

    // click gif
    $('.nk-gif-click').on('click', function onGifClick() {
        if (this.gifPlaying) {
            $(this).removeClass('hover');
            stopGif(this);
        } else {
            $(this).addClass('hover');
            playGif(this);
        }
    });

    // autoplay in viewport
    var $gifVP = $('.nk-gif-viewport');
    if ($gifVP.length) {
        self.throttleScroll(function () {
            $gifVP.each(function eachFifVP() {
                var inVP = self.isInViewport($(this), 1);
                if (inVP[0]) {
                    if (inVP[1].height / wndH < 0.7) {
                        if (inVP[0] === 1) {
                            playGif(this);
                        } else {
                            stopGif(this);
                        }
                    } else if (inVP[0] >= 0.7) {
                        playGif(this);
                    } else {
                        stopGif(this);
                    }
                } else {
                    stopGif(this);
                }
            });
        });
    }

    // autoplay gif
    $('.nk-gif:not(.nk-gif-click):not(.nk-gif-hover):not(.nk-gif-viewport)').each(function eachGifAutoplay() {
        playGif(this);
    });
}

/*------------------------------------------------------------------

  Init Fullpage

-------------------------------------------------------------------*/
function _initFullPage() {
    var $fullPage = $('.nk-fullpage:eq(0)');
    var $eachItems = $fullPage.find('.nk-fullpage-item');
    if (!$fullPage.length || !$eachItems.length) {
        return;
    }

    var self = this;

    // set items height
    function resizeItems() {
        $eachItems.css('height', wndH);
    }
    resizeItems();
    self.debounceResize(resizeItems);

    // add navigation
    var $nav = '<ul class="nk-fullpage-nav">';
    for (var k = 0; k < $eachItems.length; k++) {
        $nav += '<li>' + (k + 1) + '</li>';
    }
    $nav += '</ul>';
    $nav = $($nav);
    var $navItems = $nav.children('li');
    $body.append($nav);

    function setActiveNavItem(num) {
        $navItems.removeClass('active');
        $navItems.eq(num).addClass('active');
    }
    function showNav() {
        $nav.addClass('active');
    }
    function hideNav() {
        $nav.removeClass('active');
    }

    if (self.isInViewport($fullPage) === 1 && $wnd.scrollTop() === 0) {
        setActiveNavItem(0);
        showNav();
    }

    // check for active item
    var isBusy = void 0;
    var $activeItem = void 0;
    var $nextItem = void 0;
    var $prevItem = void 0;
    function getActiveItem(sibling) {
        // if no active items - detect it
        var firstCheck = !$activeItem && !$nextItem && !$prevItem;
        if (firstCheck) {
            var inViewport = self.isInViewport($fullPage, 1);
            if (inViewport[0]) {
                var $itemInVP = void 0;
                $eachItems.each(function eachItems() {
                    var visible = self.isInViewport($(this));
                    if (visible) {
                        $itemInVP = $(this);
                        if (visible < 0.5 && $itemInVP.next('.nk-fullpage-item').length) {
                            $itemInVP = $itemInVP.next('.nk-fullpage-item');
                        }
                        return false;
                    }
                    return true;
                });

                // center
                if (inViewport[0] === 1) {
                    $activeItem = $itemInVP;
                    $nextItem = $activeItem.next('.nk-fullpage-item');
                    $prevItem = $activeItem.prev('.nk-fullpage-item');

                    // top
                } else if (inViewport[1].top > 0) {
                    $nextItem = $itemInVP;

                    // bottom
                } else {
                    $prevItem = $itemInVP;
                }
            }
        }

        if (!firstCheck) {
            var temp = $activeItem;
            if (sibling > 0) {
                $activeItem = $nextItem;
                $prevItem = temp;
                $nextItem = $activeItem.next('.nk-fullpage-item');
            } else if (sibling < 0) {
                $activeItem = $prevItem;
                $nextItem = temp;
                $prevItem = $activeItem.prev('.nk-fullpage-item');
            }
        }

        return $activeItem && $activeItem.length ? $activeItem : false;
    }

    // Check for prevent default scroll
    function preventScroll(delta) {
        var prev = $prevItem && $prevItem.length;
        var next = $nextItem && $nextItem.length;
        if (!prev && !next) {
            getActiveItem();
            prev = $prevItem && $prevItem.length;
            next = $nextItem && $nextItem.length;
        }
        if (prev && next || isBusy) {
            return true;
        }
        var visible = self.isInViewport($fullPage);
        if (visible > 0.5) {
            $activeItem = false;
            $nextItem = false;
            $prevItem = false;

            getActiveItem();
            prev = $prevItem && $prevItem.length;
            next = $nextItem && $nextItem.length;
            if (!prev && delta < 0 && visible === 1 && $wnd.scrollTop() === 0) {
                return true;
            }
            return prev && delta < 0 || next && delta > 0;
        }
        return false;
    }

    // scroll to item
    function scrollToItem($item, callback) {
        if ($item && !isBodyOverflowed()) {
            isBusy = 1;
            self.scrollTo($item, function () {
                isBusy = 0;

                if (callback) {
                    callback();
                }
            });
            setActiveNavItem($item.index());
            showNav();
        }
    }
    $nav.on('click', '> li', function onItemClick() {
        $activeItem = false;
        $nextItem = false;
        $prevItem = false;
        scrollToItem($eachItems.eq($(this).index()));
    });

    // scroll to next fullscreen item
    function onScroll(delta, callback) {
        // scroll to active item
        if (!isBusy) {
            scrollToItem(getActiveItem(delta), callback);
        }
    }

    var updateDefaultScroll = void 0;
    var wheelEvent = void 0;
    if ('onwheel' in document.createElement('div')) {
        wheelEvent = 'wheel';
    } else if ('onmousewheel' in document.createElement('div')) {
        wheelEvent = 'mousewheel';
    }
    if (wheelEvent) {
        // mouse wheel scroll
        $wnd.on(wheelEvent, function (e) {
            if (preventScroll(e.originalEvent.deltaY) === true) {
                onScroll(e.originalEvent.deltaY, function () {
                    updateDefaultScroll = 0;
                });
                e.preventDefault();
            } else {
                hideNav();
            }
        });
    }

    // touch swipe
    var touchStart = 0;
    var touchDelta = 0;
    $wnd.on('touchstart', function (e) {
        touchStart = e.originalEvent.touches[0].screenY;
        touchDelta = 0;
    });
    $wnd.on('touchmove touchend', function (e) {
        var y = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenY : false;
        touchDelta = y === false ? touchDelta : touchStart - y;

        if (preventScroll(touchDelta) === true) {
            if (e.type === 'touchend') {
                onScroll(touchDelta, function () {
                    updateDefaultScroll = 0;
                });
            }
            e.preventDefault();
        } else {
            hideNav();
        }
    });

    // default scroll
    var defaultScrollTimeout = void 0;
    $wnd.on('scroll resize', function () {
        updateDefaultScroll = 1;
        clearTimeout(defaultScrollTimeout);
        defaultScrollTimeout = setTimeout(function () {
            if (updateDefaultScroll) {
                $activeItem = false;
                $nextItem = false;
                $prevItem = false;
                onScroll();
            }
        }, 1000);
    });

    // on resize - save active item position
    self.debounceResize(function () {
        if ($activeItem && $activeItem.length) {
            if (!isBusy) {
                scrollToItem($activeItem);
            }
        }
    });
}

/*------------------------------------------------------------------

  Init Quick View for Portfolio

-------------------------------------------------------------------*/
function _initQuickView() {
    var $quickViewLinks = $('.nk-portfolio-quick-view, .nk-product-quick-view');
    if (!$quickViewLinks.length) {
        return;
    }

    var self = this;

    var portfolioNavTemplate = self.options.templates.quickViewPortfolio;
    var storeNavTemplate = self.options.templates.quickViewStore;

    var isStoreClass = 'is-store-qv-nav';
    var isProductClass = 'is-portfolio-qv-nav';

    var opened = false;
    var siblingsLinks = false;

    // create quick view container
    var $quickView = $('<div class="nk-quick-view"></div>').appendTo($body);

    // content
    var $quickViewCont = $('<div class="nk-quick-view-cont"></div>').appendTo($quickView);

    // nav
    var $quickViewNav = $('<div class="nk-quick-view-nav"></div>').appendTo($quickView);

    // load quick view content
    function loadQuickViewCont(url) {
        // add loading spinner
        $quickViewCont.html('<div class="nk-loading-spinner mauto"><i></i></div>');

        var $iframe = $('<iframe>').css('opacity', 0).appendTo($quickViewCont);
        $iframe.on('load', function onQuickViewIframeLoad() {
            var $frameDoc = $(this.contentDocument);

            self.options.events.beforeQuickViewLoad($frameDoc);

            // remove all layout items
            $frameDoc.find('.nk-portfolio-item-single').siblings('*:not(.nk-header-title)').remove();
            $frameDoc.find('.nk-product-quick-view, .nk-portfolio-quick-view, .nk-share-place, .nk-share-place-overlay, .nk-header,' + '.nk-navbar, .nk-navbar-overlay, .nk-page-nav, .nk-page-nav-2, .nk-page-nav-3, .nk-side-buttons, .nk-search, .nk-footer').remove();

            // change all links to target _parent
            $frameDoc.find('a').each(function eachQuickViewLinks() {
                if (this.target !== '_blank') {
                    this.target = '_parent';
                }
            });

            self.options.events.quickViewLoad($frameDoc);

            // show iframe
            tween.set($iframe, {
                opacity: 0
            });
            tween.to($iframe, 0.4, {
                opacity: 1,
                onComplete: function onComplete() {
                    self.options.events.quickViewLoaded($frameDoc);
                    $quickViewCont.find('.nk-loading-spinner').remove();
                }
            });
        });
        $iframe.attr('src', url);

        // navigation
        if (siblingsLinks) {
            var prevItem = void 0;
            var nextItem = void 0;
            var tempPrev = void 0;
            for (var k = 0; k < siblingsLinks.length; k++) {
                if (siblingsLinks[k].url === url) {
                    prevItem = tempPrev;
                    nextItem = siblingsLinks[k + 1];
                }
                tempPrev = siblingsLinks[k];
            }

            var $prev = $quickViewNav.find('.nk-page-nav-prev');
            var $next = $quickViewNav.find('.nk-page-nav-next');
            var withCategory = $next.find('.nk-page-nav-title > .nk-product-category').length;

            $prev[(prevItem ? 'remove' : 'add') + 'Class']('disabled');
            $prev.attr('href', prevItem && prevItem.url || 'javascript:void(0)');
            $prev.find('.nk-page-nav-img > div').css('background-image', 'url("' + (prevItem && prevItem.image || '') + '")');
            $prev.find('.nk-page-nav-img > img').attr('src', prevItem && prevItem.image || '');
            if (withCategory) {
                $prev.find('.nk-page-nav-title > .nk-product-title').html(prevItem && prevItem.title || '');
                $prev.find('.nk-page-nav-title > .nk-product-category').html(prevItem && prevItem.category || '');
            } else {
                $prev.find('.nk-page-nav-title').html(prevItem && prevItem.title || '');
            }

            $next[(nextItem ? 'remove' : 'add') + 'Class']('disabled');
            $next.attr('href', nextItem && nextItem.url || 'javascript:void(0)');
            $next.find('.nk-page-nav-img > div').css('background-image', 'url("' + (nextItem && nextItem.image || '') + '")');
            $next.find('.nk-page-nav-img > img').attr('src', nextItem && nextItem.image || '');
            if (withCategory) {
                $next.find('.nk-page-nav-title > .nk-product-title').html(nextItem && nextItem.title || '');
                $next.find('.nk-page-nav-title > .nk-product-category').html(nextItem && nextItem.category || '');
            } else {
                $next.find('.nk-page-nav-title').html(nextItem && nextItem.title || '');
            }
        }
    }

    // open quick view
    self.openQuickView = function (item) {
        if (opened || !item || !item.href) {
            return;
        }
        opened = true;

        var url = item.href;
        var isStore = $(item).hasClass('nk-product-quick-view');

        self.options.events.quickViewOpen($quickView);

        if (!siblingsLinks) {
            var $siblings = void 0;
            if (isStore) {
                $siblings = $(item).parents('.nk-store:eq(0)').find('.nk-product').find('.nk-product-quick-view:eq(0)');
            } else {
                $siblings = $(item).parents('.nk-isotope, [class*="nk-carousel"]').eq(0).find('.nk-isotope-item').find('.nk-portfolio-quick-view:eq(0)');
            }
            siblingsLinks = [];

            $siblings.each(function eachSiblings() {
                var $qvItem = $(this).parents(isStore ? '.nk-product:eq(0)' : '.nk-isotope-item:eq(0)');
                var title = '';
                var category = '';
                var image = '';
                if (isStore) {
                    title = $qvItem.find('.nk-product-title').text() || '';
                    category = $qvItem.find('.nk-product-category').html() || '';
                    image = $qvItem.find('.nk-product-image > img').attr('src') || '';
                } else {
                    title = $qvItem.find('.nk-portfolio-title').text() || '';
                    category = $qvItem.find('.nk-portfolio-category').html() || '';
                    image = $qvItem.find('img.nk-portfolio-image').attr('src') || '';
                }
                siblingsLinks.push({
                    url: this.href,
                    title: title,
                    category: category,
                    image: image,
                    item: this
                });
            });
        }

        // show quick view
        tween.fromTo($quickView, 0.4, {
            opacity: 0
        }, {
            opacity: 1,
            display: 'block'
        });
        tween.fromTo($quickViewCont, 0.4, {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            delay: 0.3
        });

        // add navigation skeleton
        $quickViewNav.html(isStore ? storeNavTemplate : portfolioNavTemplate).removeClass(isStoreClass + ' ' + isProductClass).addClass(isStore ? isStoreClass : isProductClass);

        // prevent body scrolling
        self.bodyOverflow(1);

        // load content
        loadQuickViewCont(url);
    };

    // close quick view
    self.closeQuickView = function () {
        self.options.events.beforeQuickViewClose($quickView);

        // hide animation
        tween.to($quickView, 0.4, {
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
                $quickViewCont.html('');
                self.options.events.quickViewClosed($quickView);
            }
        });
        tween.to($quickViewCont, 0.4, {
            scale: 0.9
        });

        // restore body scrolling
        self.bodyOverflow(0);

        siblingsLinks = false;
        opened = false;
    };

    // close icon
    $('<div class="nk-quick-view-close">' + self.options.templates.quickViewCloseIcon + '</div>').on('click', self.closeQuickView).appendTo($quickView);

    // prev / next quick view click
    $quickViewNav.on('click', '.nk-page-nav .nk-page-nav-prev:not(.disabled), .nk-page-nav .nk-page-nav-next:not(.disabled),' + '.nk-page-nav-2 .nk-page-nav-prev:not(.disabled), .nk-page-nav-2 .nk-page-nav-next:not(.disabled)', function onClickQuickViewNav(e) {
        e.preventDefault();
        loadQuickViewCont(this.href);
    });

    // open quick view event
    $body.on('click', '.nk-portfolio-quick-view, .nk-product-quick-view', function onClickQuickViewItem(e) {
        e.preventDefault();
        self.openQuickView(this);
    });
}

/*------------------------------------------------------------------

  Init Info Boxes / Alerts

-------------------------------------------------------------------*/
function _initInfoBoxes() {
    var self = this;

    // close
    $doc.on('click', '.nk-info-box .nk-info-box-close', function onClickInfoboxClose(e) {
        e.preventDefault();
        var $box = $(this).parents('.nk-info-box:eq(0)');
        tween.to($box, 0.3, {
            opacity: 0,
            onComplete: function onComplete() {
                tween.to($box, 0.3, {
                    height: 0,
                    padding: 0,
                    margin: 0,
                    display: 'none',
                    onComplete: function onComplete() {
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Forms

-------------------------------------------------------------------*/
function _initForms() {
    var self = this;

    // Create Spinners in input number
    $('<span class="nk-form-control-number-up"></span>').insertAfter('.nk-form-control-number input');
    $('<span class="nk-form-control-number-down"></span>').insertAfter('.nk-form-control-number input');
    $doc.on('click', '.nk-form-control-number-up', function onSpinnerClickUp() {
        var $input = $(this).siblings('input');
        var max = $input.attr('max') || 9999999;
        var newVal = void 0;

        var oldValue = parseFloat($input.val());
        if (oldValue >= max) {
            newVal = oldValue;
        } else {
            newVal = oldValue + 1;
        }
        $input.val(newVal);
        $input.trigger('change');
    });
    $doc.on('click', '.nk-form-control-number-down', function onSpinnerClickDown() {
        var $input = $(this).siblings('input');
        var min = $input.attr('min') || -9999999;
        var newVal = void 0;

        var oldValue = parseFloat($input.val());
        if (oldValue <= min) {
            newVal = oldValue;
        } else {
            newVal = oldValue - 1;
        }
        $input.val(newVal);
        $input.trigger('change');
    });

    // Sign Forms
    var $signForm = $('.nk-sign-form');
    var $formLost = $signForm.find('.nk-sign-form-lost');
    var $formLogin = $signForm.find('.nk-sign-form-login');
    var $formRegister = $signForm.find('.nk-sign-form-register');
    var $toggleLost = $signForm.find('.nk-sign-form-lost-toggle');
    var $toggleLogin = $signForm.find('.nk-sign-form-login-toggle');
    var $toggleRegister = $signForm.find('.nk-sign-form-register-toggle');

    function animateForms($showItems) {
        var inverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        tween.set($signForm, {
            height: 'auto'
        });
        tween.set($signForm, {
            height: $signForm.outerHeight(true)
        });

        var $hideItems = $formLost.filter('.active').add($formRegister.filter('.active')).add($formLogin.filter('.active'));
        tween.set($hideItems, {
            position: 'absolute',
            display: 'block',
            x: 0
        });
        tween.set($showItems, {
            position: 'absolute',
            display: 'none',
            x: inverse ? '-60%' : '60%'
        });
        tween.to($hideItems, 0.2, {
            opacity: 0,
            x: inverse ? '60%' : '-60%',
            display: 'none',
            force3D: true
        });
        tween.to($showItems, 0.2, {
            opacity: 1,
            display: 'block',
            x: '0%',
            force3D: true,
            onComplete: function onComplete() {
                tween.set($showItems, {
                    position: 'relative'
                });

                var formHeight = $signForm.outerHeight(true);
                tween.set($signForm, {
                    height: 'auto'
                });
                var formNewHeight = $signForm.outerHeight(true);
                tween.set($signForm, {
                    height: formHeight
                });
                tween.to($signForm, 0.2, {
                    height: formNewHeight
                });
            }
        });
        $hideItems.removeClass('active');
        $showItems.addClass('active');
    }
    function showLoginForm() {
        animateForms($formLogin, true);
        $toggleLost.removeClass('active');
        $toggleLogin.addClass('active');
        $toggleRegister.removeClass('active');
    }
    function showLostForm() {
        animateForms($formLost);
        $toggleLost.addClass('active');
        $toggleLogin.removeClass('active');
        $toggleRegister.removeClass('active');
    }
    function showRegisterForm() {
        animateForms($formRegister);
        $toggleLost.removeClass('active');
        $toggleLogin.removeClass('active');
        $toggleRegister.addClass('active');
    }

    $signForm.on('click', '.nk-sign-form-login-toggle:not(.active)', function (e) {
        e.preventDefault();
        showLoginForm();
    });
    $signForm.on('click', '.nk-sign-form-lost-toggle:not(.active)', function (e) {
        e.preventDefault();
        showLostForm();
    });
    $signForm.on('click', '.nk-sign-form-register-toggle:not(.active)', function (e) {
        e.preventDefault();
        showRegisterForm();
    });

    if (typeof $.fn.ajaxSubmit === 'undefined' || typeof $.validator === 'undefined') {
        return;
    }

    // Validate Khaki Forms
    $('form:not(.nk-form-ajax):not(.nk-mchimp):not([novalidate])').each(function eachValidateForms() {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group');
                var $parentNumber = element.parent('.nk-form-control-number');
                if ($parent.length) {
                    $parent.after(error);
                } else if ($parentNumber.length) {
                    $parentNumber.parent().after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            }
        });
    });

    // ajax form
    $('form.nk-form-ajax:not([novalidate])').each(function eachAjaxForms() {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group');
                if ($parent.length) {
                    $parent.after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler(form) {
                var $responseSuccess = $(form).find('.nk-form-response-success');
                var $responseError = $(form).find('.nk-form-response-error');
                $(form).ajaxSubmit({
                    type: 'POST',
                    success: function success(response) {
                        response = JSON.parse(response);
                        if (response.type && response.type === 'success') {
                            $responseError.hide();
                            $responseSuccess.html(response.response).show();
                            form.reset();
                        } else {
                            $responseSuccess.hide();
                            $responseError.html(response.response).show();
                        }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init MailChimp

-------------------------------------------------------------------*/
function _initFormsMailChimp() {
    var $mchimp = $('form.nk-mchimp');
    if (typeof $.fn.ajaxSubmit === 'undefined' || typeof $.validator === 'undefined' || !$mchimp.length) {
        return;
    }
    var self = this;

    // Additional Validate Methods From MailChimp
    // Validate a multifield birthday
    $.validator.addMethod('mc_birthday', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            var dateArray = [];
            dateArray.month = $fields.filter('input[name*="[month]"]').val();
            dateArray.day = $fields.filter('input[name*="[day]"]').val();

            // correct month value
            dateArray.month -= 1;

            var testDate = new Date(1970, dateArray.month, dateArray.day);
            if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month) {
                isValid = false;
            } else {
                isValid = true;
            }
        }
        return isValid;
    }, 'Please enter a valid month and day.');

    // Validate a multifield date
    $.validator.addMethod('mc_date', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            var dateArray = [];
            dateArray.month = $fields.filter('input[name*="[month]"]').val();
            dateArray.day = $fields.filter('input[name*="[day]"]').val();
            dateArray.year = $fields.filter('input[name*="[year]"]').val();

            // correct month value
            dateArray.month -= 1;

            // correct year value
            if (dateArray.year.length < 4) {
                dateArray.year = parseInt(dateArray.year, 10) < 50 ? 2000 + parseInt(dateArray.year, 10) : 1900 + parseInt(dateArray.year, 10);
            }

            var testDate = new Date(dateArray.year, dateArray.month, dateArray.day);
            if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month || testDate.getFullYear() !== dateArray.year) {
                isValid = false;
            } else {
                isValid = true;
            }
        }
        return isValid;
    }, 'Please enter a valid date');

    // Validate a multifield phone number
    $.validator.addMethod('mc_phone', function (phone_number, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:filled:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            phone_number = $fields.eq(0).val() + $fields.eq(1).val() + $fields.eq(2).val();
            isValid = phone_number.length === 10 && phone_number.match(/[0-9]{9}/);
        }
        return isValid;
    }, 'Please specify a valid phone number');

    $.validator.addMethod('skip_or_complete_group', function (value, element, grouping_class) {
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class)),
            $fieldsFirst = $fields.eq(0),
            validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
            numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
            isValid = numberFilled === 0 || numberFilled === $fields.length;

        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please supply missing fields.'));

    $.validator.addMethod('skip_or_fill_minimum', function (value, element, options) {
        var $fields = $(options[1], element.form),
            $fieldsFirst = $fields.eq(0),
            validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
            numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
            isValid = numberFilled === 0 || numberFilled >= options[0];
        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each skip_or_fill_minimum field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please either skip these fields or fill at least {0} of them.'));

    $.validator.addMethod('zipcodeUS', function (value, element) {
        return this.optional(element) || /^\d{5}-\d{4}$|^\d{5}$/.test(value);
    }, 'The specified US ZIP Code is invalid');

    $mchimp.each(function () {
        var $form = $(this);
        if (!$form.length) {
            return;
        }

        var validator = $form.validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            // Grouping fields makes jQuery Validation display one error for all the fields in the group
            // It doesn't have anything to do with how the fields are validated (together or separately),
            // it's strictly for visual display of errors
            groups: function groups() {
                var groups = {};
                $form.find('.input-group').each(function () {
                    var inputs = $(this).find('input:text:not(:hidden)'); // TODO: What about non-text inputs like number?
                    if (inputs.length > 1) {
                        var mergeName = inputs.first().attr('name');
                        var fieldNames = $.map(inputs, function (f) {
                            return f.name;
                        });
                        groups[mergeName.substring(0, mergeName.indexOf('['))] = fieldNames.join(' ');
                    }
                });
                return groups;
            },

            // Place a field's inline error HTML just before the div.input-group closing tag
            errorPlacement: function errorPlacement(error, element) {
                element.closest('.input-group').after(error);
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler() {
                var $responseSuccess = $form.find('.nk-form-response-success');
                var $responseError = $form.find('.nk-form-response-error');
                var url = $form.attr('action');
                url = url.replace('/post?u=', '/post-json?u=');
                url += '&c=?';

                $form.ajaxSubmit({
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    url: url,
                    success: function success(resp) {
                        $responseSuccess.hide();
                        $responseError.hide();

                        // On successful form submission, display a success message and reset the form
                        if (resp.result === 'success') {
                            $responseSuccess.show().html(resp.msg);
                            $form[0].reset();

                            // If the form has errors, display them, inline if possible, or appended to #mce-error-response
                        } else {
                            // Example errors - Note: You only get one back at a time even if you submit several that are bad.
                            // Error structure - number indicates the index of the merge field that was invalid, then details
                            // Object {result: "error", msg: "6 - Please enter the date"}
                            // Object {result: "error", msg: "4 - Please enter a value"}
                            // Object {result: "error", msg: "9 - Please enter a complete address"}

                            // Try to parse the error into a field index and a message.
                            // On failure, just put the dump thing into in the msg letiable.
                            var index = -1;
                            var msg = void 0;
                            try {
                                var parts = resp.msg.split(' - ', 2);
                                if (typeof parts[1] === 'undefined') {
                                    msg = resp.msg;
                                } else {
                                    i = parseInt(parts[0], 10);
                                    if (i.toString() === parts[0]) {
                                        index = parts[0];
                                        msg = parts[1];
                                    } else {
                                        index = -1;
                                        msg = resp.msg;
                                    }
                                }
                            } catch (e) {
                                index = -1;
                                msg = resp.msg;
                            }

                            try {
                                // If index is -1 if means we don't have data on specifically which field was invalid.
                                // Just lump the error message into the generic response div.
                                if (index === -1) {
                                    $responseError.show().html(msg);
                                } else {
                                    var fieldName = $form.find('input[name]:eq(' + index + ')').attr('name'); // Make sure this exists
                                    var data = {};
                                    data[fieldName] = msg;
                                    validator.showErrors(data);
                                }
                            } catch (e) {
                                $responseError.show().html(msg);
                            }
                        }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
    });

    // Custom validation methods for fields with certain css classes
    $.validator.addClassRules('birthday', { digits: true, mc_birthday: '.datefield' });
    $.validator.addClassRules('datepart', { digits: true, mc_date: '.datefield' });
    $.validator.addClassRules('phonepart', { digits: true, mc_phone: '.phonefield' });
}

/*------------------------------------------------------------------

  Init Audio Player

-------------------------------------------------------------------*/
function initAudioPlayerProgressBar() {
    if (typeof Hammer !== 'undefined') {
        var $progresses = $('.nk-audio-plain:not(.nk-audio-plain-enabled), .nk-audio-player-main:not(.nk-audio-player-main-enabled)').find('.nk-audio-progress');
        $progresses.each(function eachProgresses() {
            var $curProgressCont = $(this);
            var $curProgres = $curProgressCont.children();
            var curApi = void 0;
            var progressW = void 0;
            var progressCurW = void 0;
            var progressStart = false;
            var HammerProgress = new Hammer.Manager($curProgressCont[0]);
            HammerProgress.add(new Hammer.Pan({
                pointers: 1,
                threshold: 0
            }));
            HammerProgress.add(new Hammer.Press({
                time: 1
            }));
            HammerProgress.on('pan press pressup', function (e) {
                // start
                if (e.type === 'press' || progressStart === false) {
                    $curProgressCont.data('busy', true);
                    progressW = $curProgressCont.width();
                    progressStart = e.pointers[0].clientX - $curProgressCont[0].getBoundingClientRect().left;
                    $curProgressCont.addClass('hover');
                }

                // each
                progressCurW = Math.min(1, Math.max(0, (progressStart + e.deltaX) / progressW));
                $curProgres[0].style.width = progressCurW * 100 + '%';

                // end
                if (e.isFinal || e.type === 'pressup') {
                    if (!curApi) {
                        curApi = $curProgressCont.parents('.nk-audio-player-main, .nk-audio-plain')[0].audioAPI;
                    }
                    if (curApi) {
                        curApi.seek(progressCurW);
                    }

                    $curProgressCont.removeClass('hover');
                    $curProgressCont.data('busy', false);
                    progressStart = false;
                }

                e.preventDefault();
            });
        });
    }
}
function _initAudioPlayer() {
    if (typeof soundManager === 'undefined') {
        return;
    }

    /* Global Audio Player */
    var _self = this;
    var $player = $('.nk-audio-player-main:not(.nk-audio-player-main-enabled)');
    var api = void 0;
    var player = void 0;
    var $title = $player.find('.nk-audio-title > div');
    var $timer = $player.find('.nk-audio-time');
    var $playBtn = $player.find('.nk-audio-play-pause .nk-audio-play');
    var $pauseBtn = $player.find('.nk-audio-play-pause .nk-audio-pause');
    var $prevBtn = $player.find('.nk-audio-prev');
    var $nextBtn = $player.find('.nk-audio-next');
    var $progressCont = $player.find('.nk-audio-progress');
    var $progress = $progressCont.find('.nk-audio-progress-current');
    var $volumeBtn = $player.find('.nk-audio-volume-icon');
    var $volumeCont = $player.find('.nk-audio-volume .nk-audio-volume-inner');
    var $volume = $volumeCont.find('.nk-audio-volume-current');
    var $playlist = $player.find('.nk-audio-player-playlist-inner');

    // Volume controller will be automatically removed on iOs devices, because of limitation of volume control
    if (isIOs) {
        $player.find('.nk-audio-volume').remove();
    }

    /**
    * Player class containing the state of our playlist and where we are in it.
    * Includes all methods for playing, skipping, updating the display, etc.
    * @param {Array} options Array of objects with playlist song details ({title, file, howl}).
    */
    function Player(options) {
        var self = this;

        self.options = options;
        self.playlist = options.playlist;
        self.index = options.start || 0;
        self.volume = typeof options.volume !== 'undefined' ? options.volume : 100;
        self.pinned = options.pinned || false;
        self.loop = false;
        self.shuffle = false;
        self.progress = 0;
        self.muted = false;
        self.playing = false;

        // restore player data
        if (localStorage && typeof localStorage.khakiAudioPlayer !== 'undefined') {
            var storedData = JSON.parse(localStorage.khakiAudioPlayer);
            self.playlist = storedData.playlist || self.options.playlist;
            self.index = storedData.index;
            self.volume = storedData.volume;
            self.pinned = storedData.pinned;
            self.loop = storedData.loop;
            self.shuffle = storedData.shuffle;
            self.progress = storedData.progress;
            self.muted = storedData.muted;
            self.playing = storedData.playing;
        }

        // create playlist
        self.createPlaylist(self.playlist);

        // set api
        var firstLoad = true;
        function onPlay() {
            self.playing = true;
            $player.addClass('nk-audio-player-playing');

            // update playlist
            $playlist.find('.nk-playlist-item-playing, .nk-playlist-item-active').removeClass('nk-playlist-item-playing nk-playlist-item-active');
            $playlist.find('[data-index=' + self.index + ']').addClass('nk-playlist-item-playing nk-playlist-item-active');

            // update playlist on the page
            if (self.$pagePlaylist) {
                self.$pagePlaylist.find('[data-index]').removeClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
                self.$pagePlaylist.find('[data-index=' + self.index + ']').addClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
            }
        }
        function onStop() {
            self.playing = false;
            $player.removeClass('nk-audio-player-playing');

            // update playlist
            $playlist.find('.nk-playlist-item-playing').removeClass('nk-playlist-item-playing');

            // update playlist on the page
            if (self.$pagePlaylist) {
                self.$pagePlaylist.find('[data-index].nk-audio-playlist-item-playing').removeClass('nk-audio-playlist-item-playing');
            }
        }
        api = soundManager.createSound({
            volume: self.volume,
            whileplaying: function whileplaying() {
                self.step();
            },

            onplay: onPlay,
            onresume: onPlay,
            onpause: onStop,
            onstop: onStop,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            },
            onerror: function onerror() {},
            onfinish: function onfinish() {
                if (self.loop) {
                    self.play();
                } else {
                    self.skip('right');
                }
            },
            onbufferchange: function onbufferchange() {
                if (firstLoad && api.duration) {
                    firstLoad = false;
                    // seek
                    self.seek(self.progress);
                }
            }
        });

        // autoplay
        if (self.playlist && self.playlist.list && self.playlist.list.length) {
            if (self.options.autoplay || self.playing) {
                self.play();
            } else {
                self.play();
                self.pause();
            }
        }

        // mute
        self.updateVolumeBar();

        // pin
        $player.css('transition', 'none');
        self.pin(self.pinned, true);
        setTimeout(function () {
            $player.css('transition', '');
        }, 1);

        // loop
        self.setLoop(self.loop);

        // shuffle
        self.setShuffle(self.shuffle);

        // save player data
        function saveData() {
            if (localStorage) {
                localStorage.khakiAudioPlayer = JSON.stringify({
                    playlist: self.playlist,
                    index: self.index,
                    volume: self.volume,
                    pinned: self.pinned,
                    loop: self.loop,
                    shuffle: self.shuffle,
                    progress: self.progress,
                    muted: self.muted,
                    playing: self.playing
                });
            }
        }
        if (localStorage) {
            // save on close window and every 20 seconds
            $(window).on('unload', saveData);
            setInterval(saveData, 20000);
        }

        // Events to control player
        // play, pause, next, prev
        $playBtn.on('click', function () {
            self.play();
        });
        $pauseBtn.on('click', function () {
            self.pause();
        });
        $prevBtn.on('click', function () {
            self.skip('prev');
        });
        $nextBtn.on('click', function () {
            self.skip('next');
        });

        // volume
        $volumeBtn.on('click', function () {
            self.mute();
        });
        if (typeof Hammer !== 'undefined') {
            var volumeW = void 0;
            var volumeCurW = void 0;
            var volumeStart = false;
            var HammerVol = new Hammer.Manager($volumeCont[0]);
            HammerVol.add(new Hammer.Pan({
                pointers: 1,
                threshold: 0
            }));
            HammerVol.add(new Hammer.Press({
                time: 1
            }));
            HammerVol.on('pan press pressup', function (e) {
                // start
                if (e.type === 'press' || volumeStart === false) {
                    volumeW = $volumeCont.width();
                    volumeStart = e.pointers[0].clientX - $volumeCont[0].getBoundingClientRect().left;
                    $volumeCont.addClass('hover');
                }

                // each
                volumeCurW = Math.min(1, Math.max(0, (volumeStart + e.deltaX) / volumeW)) * 100;
                self.setVolume(volumeCurW);

                // end
                if (e.isFinal || e.type === 'pressup') {
                    $volumeCont.removeClass('hover');
                    volumeStart = false;
                }

                e.preventDefault();
            });
        }

        // playlist
        $playlist.on('click', '> [data-index]', function eachPlylists() {
            var idx = parseInt($(this).attr('data-index'), 10);
            if (self.index === idx) {
                if (self.playing) {
                    self.pause();
                } else {
                    self.play();
                }
            } else {
                self.skipTo(idx);
            }
        });
        $playlist.on('click', '.nk-playlist-right a', function (e) {
            e.stopPropagation();
        });

        // pin player
        $('.nk-audio-pin').on('click', function (e) {
            self.pin();
            e.preventDefault();
        });

        // loop
        $player.on('click', '.nk-audio-settings .nk-audio-loop', function () {
            self.setLoop();
        });

        // shuffle
        $player.on('click', '.nk-audio-settings .nk-audio-shuffle', function () {
            self.setShuffle();
        });

        // show playlist
        $player.on('click', '.nk-audio-settings .nk-audio-playlist', function () {
            self.showPlaylist();
        });
    }
    Player.prototype = {
        /**
         * Create playlist and show player
         */
        createPlaylist: function createPlaylist(playlist, skipTo) {
            if (!playlist || !playlist.list || !playlist.list.length) {
                return;
            }
            var self = this;
            var oldPlaylist = $.extend(true, {}, self.playlist);

            self.playlist = $.extend(true, {}, playlist);
            self.playlistShuffle = [];

            // Setup the playlist display.
            var playlistInner = '';
            var playListBtn = '\n                <div class="nk-playlist-play-pause">\n                    <span class="nk-playlist-play"><span class="ion-play ml-3"></span></span>\n                    <span class="nk-playlist-pause"><span class="ion-pause"></span></span>\n                </div>';
            var song = void 0;
            for (var k = 0; k < self.playlist.list.length; k++) {
                song = self.playlist.list[k];
                self.playlistShuffle.push(k);
                playlistInner += '\n                    <li data-index="' + k + '">\n                        <div class="container nk-playlist-item-cont">\n                            <div>' + playListBtn + '</div>\n                            <div class="nk-playlist-title"><div>' + song.title + '</div></div>\n                            <div class="nk-playlist-right">\n                                ' + (song.buttons || '') + '\n                                ' + (song.duration ? ' <span class="nk-playlist-item-duration">' + song.duration + '</span>' : '') + '\n                            </div>\n                        </div>\n                    </li>';
            }
            $playlist.html(playlistInner);

            // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffleArr(a, b, c, d) {
                c = a.length;while (c) {
                    b = Math.random() * (--c + 1) || 0;
                    d = a[c];
                    a[c] = a[b];
                    a[b] = d;
                }
            }
            shuffleArr(self.playlistShuffle);

            // add page playlist dom item
            // $(this).data('nk-playlist-data', result);
            if (self.playlist.id) {
                var $newPagePlaylist = $('#' + self.playlist.id);
                if (JSON.stringify($newPagePlaylist.data('nk-playlist-data')) === JSON.stringify(self.playlist)) {
                    self.$pagePlaylist = $newPagePlaylist;
                } else {
                    self.$pagePlaylist = null;
                }
            } else {
                self.$pagePlaylist = null;
            }

            // prevent if new playlist the same as current
            if (JSON.stringify(oldPlaylist) === JSON.stringify(self.playlist)) {
                if (skipTo === self.index) {
                    if (self.playing) {
                        self.pause();
                    } else {
                        self.play();
                    }
                } else if (typeof skipTo !== 'undefined') {
                    self.skipTo(skipTo);
                }
            } else {
                // remove active items from old playlist
                // update playlist on the page
                if (oldPlaylist.id) {
                    $('#' + oldPlaylist.id).find('[data-index]').removeClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
                }
                if (typeof skipTo !== 'undefined') {
                    self.skipTo(skipTo);
                }
            }
            oldPlaylist = null;

            // show player
            $player.addClass('show');

            _self.initPluginNano();
        },


        /**
        * Play a song in the playlist.
        * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
        */
        play: function play(index) {
            var self = this;

            index = typeof index === 'number' ? index : self.index;
            if (!self.playlist.list[index]) {
                index = 0;
            }
            var data = self.playlist.list[index];

            self.index = index;

            // pause all players
            soundManager.pauseAll();

            // Begin playing the sound.
            api.play({
                url: data.src
            });

            // Update the track display.
            $title.html(data.title);
        },


        /**
        * Pause the currently playing track.
        */
        pause: function pause() {
            // Puase the sound.
            soundManager.pauseAll();
        },


        /**
        * Skip to the next or previous track.
        * @param  {String} direction 'next' or 'prev'.
        */
        skip: function skip(direction) {
            var self = this;
            var index = 0;

            // shuffle
            if (self.shuffle) {
                var _key = self.playlistShuffle.indexOf(self.index);
                _key = parseInt(_key, 10);

                // Get the next track based on the direction of the track.
                if (direction === 'prev') {
                    index = _key - 1;
                    if (index < 0) {
                        index = self.playlistShuffle.length - 1;
                    }
                } else {
                    index = _key + 1;
                    if (index >= self.playlistShuffle.length) {
                        index = 0;
                    }
                }
                index = self.playlistShuffle[index];

                // Get the next track based on the direction of the track.
            } else if (direction === 'prev') {
                index = self.index - 1;
                if (index < 0) {
                    index = self.playlist.list.length - 1;
                }
            } else {
                index = self.index + 1;
                if (index >= self.playlist.list.length) {
                    index = 0;
                }
            }

            self.skipTo(index);
        },


        /**
        * Skip to a specific track based on its playlist index.
        * @param  {Number} index Index in the playlist.
        */
        skipTo: function skipTo(index) {
            var self = this;

            // Stop the current track.
            api.stop();

            // Reset progress.
            if (!$progressCont.data('busy')) {
                $progress[0].style.width = '0%';
            }
            self.progress = 0;

            // Play the new track.
            self.play(index);
        },


        /**
        * Set the volume and update the volume slider display.
        * @param  {Number} val Volume between 0 and 1.
        */
        setVolume: function setVolume(val, noTouchMute) {
            var self = this;

            val = Math.min(100, Math.max(0, val));

            // Update the volume to the new value.
            api.setVolume(val);

            // unmute
            if (!api.muted && !noTouchMute) {
                self.mute(false);
            }

            self.volume = val;
            self.updateVolumeBar();
        },


        /**
        * Mute / Unmute sound
        */
        mute: function mute(val) {
            var self = this;

            // Update the volume to the new value.
            self.muted = typeof val !== 'undefined' ? val : !api.muted;
            if (self.muted) {
                api.mute();
            } else {
                api.unmute();
            }

            self.updateVolumeBar();
        },


        /**
        * Update volume bar icons
        */
        updateVolumeBar: function updateVolumeBar() {
            var self = this;

            // Volume controller will be automatically removed on iOs devices, because of limitation of volume control
            if (isIOs) {
                return;
            }

            $player.removeClass('volume-muted volume-half volume-small');

            // Update the display on the slider.
            $volume[0].style.width = self.volume + '%';

            if (self.muted || self.volume === 0) {
                $player.addClass('volume-muted');

                // change icons
            } else if (self.volume < 20) {
                $player.addClass('volume-small');
            } else if (self.volume < 70) {
                $player.addClass('volume-half');
            }
        },


        /**
        * Seek to a new position in the currently playing track.
        * @param  {Number} per Percentage through the song to skip.
        */
        seek: function seek(per) {
            api.setPosition(api.duration * per);
        },


        /**
        * The step called within requestAnimationFrame to update the playback position.
        */
        step: function step() {
            var self = this;
            // Determine our current seek position.
            var seek = api.position || 0;
            self.progress = seek / api.duration;
            $timer[0].innerHTML = self.formatTime(Math.round(seek));

            if (!$progressCont.data('busy')) {
                $progress[0].style.width = (self.progress * 100 || 0) + '%';
            }
        },


        /**
        * Format the time from seconds to M:SS.
        * @param  {Number} secs Seconds to format.
        * @return {String}      Formatted time.
        */
        formatTime: function formatTime(msec) {
            var secs = Math.round(msec / 1000) || 0;
            var minutes = Math.floor(secs / 60) || 0;
            minutes = (minutes < 10 ? '0' : 0) + minutes;
            var seconds = secs - minutes * 60;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        },


        /**
        * Loop track
        * @param  {Number} true or false. If nothing - toggle loop
        */
        setLoop: function setLoop(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-loop');
            } else {
                $player.toggleClass('nk-audio-player-loop');
            }
            self.loop = $player.hasClass('nk-audio-player-loop');
        },


        /**
        * Shuffle playlist
        * @param  {Number} true or false. If nothing - toggle shuffle
        */
        setShuffle: function setShuffle(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-shuffle');
            } else {
                $player.toggleClass('nk-audio-player-shuffle');
            }
            self.shuffle = $player.hasClass('nk-audio-player-shuffle');
        },


        /**
        * Pin player
        * @param  {Number} true or false. If nothing - toggle pin
        */
        pin: function pin(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-pin');
            } else {
                $player.toggleClass('nk-audio-player-pin');
            }
            self.pinned = $player.hasClass('nk-audio-player-pin');
        },


        /**
        * Show / Hide playlist
        * @param  {Number} true or false. If nothing - toggle pin
        */
        showPlaylist: function showPlaylist(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-playlist-opened');
            } else {
                $player.toggleClass('nk-audio-player-playlist-opened');
            }
            self.pinned = $player.hasClass('nk-audio-player-playlist-opened');
        }
    };

    // Setup all playlists on the page
    var playlist = [];
    $('ul.nk-audio-playlist:not(.nk-audio-playlist-enabled)').addClass('nk-audio-playlist-enabled').each(function eachAudioPlaylists() {
        var ID = $(this).attr('id') || false;
        var isHidden = $(this).hasClass('nk-audio-playlist-hidden');
        var isActive = $(this).hasClass('active');
        var list = [];
        $(this).find('> li').each(function eachPlylistItems() {
            var src = $(this).attr('data-src');
            if (!src) {
                return;
            }

            // add index attribute
            $(this).attr('data-index', list.length);

            // add to list
            list.push({
                title: $(this).find('.nk-audio-playlist-title').html() || '',
                src: src,
                duration: $(this).find('.nk-audio-playlist-duration').text() || '',
                buttons: $(this).find('.nk-audio-playlist-buttons').html() || ''
            });

            // add play and pause buttons
            if (!isHidden) {
                $(this).prepend(_self.options.templates.audioPlaylistButton);
            }
        });
        if (list.length) {
            var result = {
                id: ID,
                isHidden: isHidden,
                isActive: isActive,
                list: list
            };
            playlist.push(result);

            // add playlist data to the dom element
            $(this).data('nk-playlist-data', result);

            // add playlist to player
            $(this).on('click', 'li[data-index]', function onClickPlylistItem() {
                player.createPlaylist(result, parseInt($(this).attr('data-index'), 10));
            });
        }
    });

    /* Plain audio players */
    var $playersPlain = $('.nk-audio-plain:not(.nk-audio-plain-enabled)');

    // add play and pause buttons
    $playersPlain.prepend(_self.options.templates.audioPlainButton);

    function PlayersPlain($item) {
        var self = this;
        self.$item = $item;
        self.url = $item.attr('data-src');
        self.$playPauseBtn = $item.find('.nk-audio-plain-play-pause');
        self.$progress = $item.find('.nk-audio-progress-current');

        self.$timer = $item.find('.nk-audio-plain-duration');
        self.$timer.attr('data-duration', self.$timer.text());

        function onPlay() {
            $item.addClass('nk-audio-plain-playing');
        }
        function onStop() {
            self.seek(0);
            self.step();
            self.$item.removeClass('nk-audio-plain-playing');
            self.$timer.text(self.$timer.attr('data-duration'));
        }
        self.api = soundManager.createSound({
            volume: 100,
            whileplaying: function whileplaying() {
                self.step();
            },

            onplay: onPlay,
            onresume: onPlay,
            onpause: function onpause() {
                self.$item.removeClass('nk-audio-plain-playing');
                self.$timer.text(self.$timer.attr('data-duration'));
            },

            onstop: onStop,
            onfinish: onStop,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            }
        });

        self.$playPauseBtn.on('click', function () {
            if (!self.api.paused && self.api.playState && self.api.url) {
                self.pause();
            } else {
                self.play();
            }
        });
    }
    PlayersPlain.prototype = {
        /**
        * Play a song in the playlist.
        * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
        */
        play: function play() {
            // pause all players
            soundManager.pauseAll();

            // Begin playing the sound.
            this.api.play({
                url: this.url
            });
        },


        /**
        * Pause the currently playing track.
        */
        pause: function pause() {
            // Puase the sound.
            soundManager.pauseAll();
        },

        /**
        * Seek to a new position in the currently playing track.
        * @param  {Number} per Percentage through the song to skip.
        */
        seek: function seek(per) {
            this.api.setPosition(this.api.duration * per);
        },

        /**
        * The step called within requestAnimationFrame to update the playback position.
        */
        step: function step() {
            var self = this;
            // Determine our current seek position.
            var seek = self.api.position || 0;
            self.progress = seek / self.api.duration;
            self.$timer[0].innerHTML = self.formatTime(Math.round(seek));

            if (!$progressCont.data('busy')) {
                self.$progress[0].style.width = (self.progress * 100 || 0) + '%';
            }
        },


        /**
        * Format the time from seconds to M:SS.
        * @param  {Number} secs Seconds to format.
        * @return {String}      Formatted time.
        */
        formatTime: function formatTime(msec) {
            var secs = Math.round(msec / 1000) || 0;
            var minutes = Math.floor(secs / 60) || 0;
            minutes = (minutes < 10 ? '0' : 0) + minutes;
            var seconds = secs - minutes * 60;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }
    };

    // progress bar
    initAudioPlayerProgressBar();

    // add Enabled classes
    $player.addClass('nk-audio-player-main-enabled');
    $playersPlain.addClass('nk-audio-plain-enabled');

    var self = this;
    soundManager.onready(function () {
        if (playlist.length) {
            // find active playlist
            var activePlaylist = playlist.find(function (x) {
                return x.isActive;
            });

            player = new Player({
                playlist: activePlaylist,
                start: 0,
                volume: 100,
                autoplay: $player.hasClass('nk-audio-player-autoplay'),
                pinned: $player.hasClass('nk-audio-player-pin')
            });

            $player[0].audioAPI = player;
            self.audioPlayer = player;
        }

        if ($playersPlain.length) {
            $playersPlain.each(function eachPlayersPlain() {
                this.audioAPI = new PlayersPlain($(this));
            });
        }
    });
}

/*------------------------------------------------------------------

  Facebook

-------------------------------------------------------------------*/
function _initFacebook() {
    if (!$('.fb-page').length) {
        return;
    }

    $body.append('<div id="fb-root"></div>');

    (function loadFBScript(d, s, id) {
        if (location.protocol === 'file:') {
            return;
        }
        var fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        var js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}

/*------------------------------------------------------------------

  Init Instagram

-------------------------------------------------------------------*/
function _initInstagram() {
    var self = this;
    var $instagram = $('.nk-instagram');
    if (!$instagram.length || !self.options.templates.instagram) {
        return;
    }

    /**
     * Templating a instagram item using '{{ }}' braces
     * @param  {Object} data Instagram item details are passed
     * @return {String} Templated string
     */
    function templating(data, temp) {
        var tempVariables = ['link', 'image', 'caption'];

        for (var _i2 = 0, len = tempVariables.length; _i2 < len; _i2++) {
            temp = temp.replace(new RegExp('{{' + tempVariables[_i2] + '}}', 'gi'), data[tempVariables[_i2]]);
        }

        return temp;
    }

    $instagram.each(function eachInstagram() {
        var $this = $(this);
        var options = {
            userID: $this.attr('data-instagram-user-id') || null,
            count: $this.attr('data-instagram-count') || 6,
            template: $this.attr('data-instagram-template') || self.options.templates.instagram,
            quality: $this.attr('data-instagram-quality') || 'sm', // sm, md, lg
            loadingText: self.options.templates.instagramLoadingText,
            failText: self.options.templates.instagramFailText,
            apiPath: self.options.templates.instagramApiPath
        };

        // stop if running in file protocol
        if (window.location.protocol === 'file:') {
            $this.html('<div class="col-12">' + options.failText + '</div>');
            console.error('You should run your website on the server with PHP to get working Instagram');
            return;
        }

        $this.html('<div class="col-12">' + options.loadingText + '</div>');

        // Fetch instagram images
        $.getJSON(options.apiPath, {
            userID: options.userID,
            count: options.count
        }, function (response) {
            $this.html('');

            for (var _i3 = 0; _i3 < options.count; _i3++) {
                var instaItem = false;
                if (response[_i3]) {
                    instaItem = response[_i3];
                } else if (response.statuses && response.statuses[_i3]) {
                    instaItem = response.statuses[_i3];
                } else {
                    break;
                }

                var resolution = 'thumbnail';
                if (options.quality === 'md') {
                    resolution = 'low_resolution';
                }
                if (options.quality === 'lg') {
                    resolution = 'standard_resolution';
                }

                var tempData = {
                    link: instaItem.link,
                    image: instaItem.images[resolution].url,
                    caption: instaItem.caption
                };

                $this.append(templating(tempData, options.template));
            }
        }).fail(function (a) {
            $this.html('<div class="col-12">' + options.failText + '</div>');
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Twitter

-------------------------------------------------------------------*/
function _initTwitter() {
    var self = this;
    var $twtFeeds = $('.nk-twitter-list');
    if (!$twtFeeds.length || !self.options.templates.twitter) {
        return;
    }

    /**
     * Templating a tweet using '{{ }}' braces
     * @param  {Object} data Tweet details are passed
     * @return {String}      Templated string
     */
    function templating(data, temp) {
        var tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

        for (var _i4 = 0, len = tempVariables.length; _i4 < len; _i4++) {
            temp = temp.replace(new RegExp('{{' + tempVariables[_i4] + '}}', 'gi'), data[tempVariables[_i4]]);
        }

        return temp;
    }

    $twtFeeds.each(function eachTweets() {
        var $this = $(this);
        var options = {
            username: $this.attr('data-twitter-user-name') || null,
            list: null,
            hashtag: $this.attr('data-twitter-hashtag') || null,
            count: $this.attr('data-twitter-count') || 2,
            hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
            template: $this.attr('data-twitter-template') || self.options.templates.twitter,
            loadingText: self.options.templates.twitterLoadingText,
            failText: self.options.templates.twitterFailText,
            apiPath: self.options.templates.twitterApiPath
        };

        // stop if running in file protocol
        if (window.location.protocol === 'file:') {
            $this.html(options.failText);
            console.error('You should run you website on webserver with PHP to get working Twitter');
            return;
        }

        // Set loading
        $this.html('<span>' + options.loadingText + '</span>');

        // Fetch tweets
        $.getJSON(options.apiPath, {
            username: options.username,
            list: options.list,
            hashtag: options.hashtag,
            count: options.count,
            exclude_replies: options.hideReplies
        }, function (twt) {
            $this.html('');

            for (var _i5 = 0; _i5 < options.count; _i5++) {
                var tweet = false;
                if (twt[_i5]) {
                    tweet = twt[_i5];
                } else if (twt.statuses && twt.statuses[_i5]) {
                    tweet = twt.statuses[_i5];
                } else {
                    break;
                }

                var tempData = {
                    user_name: tweet.user.name,
                    date: tweet.date_formatted,
                    tweet: tweet.text_entitled,
                    avatar: '<img src="' + tweet.user.profile_image_url + '" />',
                    url: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str,
                    retweeted: tweet.retweeted,
                    screen_name: '@' + tweet.user.screen_name
                };

                $this.append(templating(tempData, options.template));
            }
        }).fail(function (a) {
            $this.html(options.failText);
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/
function _initPluginStickySidebar() {
    if (typeof $.fn.stick_in_parent === 'undefined') {
        return;
    }

    $('.nk-sidebar-sticky').each(function eachStickySidebar() {
        var $this = $(this);
        var $parent = $this.parent();

        $parent.addClass('nk-sidebar-sticky-parent');

        $this.wrapInner('<div>').children().stick_in_parent({
            parent: $parent,
            recalc_every: 50,
            offset_top: parseInt($this.attr('data-offset-top'), 10) || 0,

            // fixed ADS reloading issue https://github.com/leafo/sticky-kit/issues/45
            spacer: false
        }

        // we need to set min height on parent block (in theme it is equal height column) to prevent sidebar content jumping
        ).on('sticky_kit:unbottom sticky_kit:stick sticky_kit:bottom', function onStickyKitStick() {
            $parent.css('min-height', $(this).height());
        }).on('sticky_kit:unstick', function () {
            $parent.css('min-height', '');
        });
    });
}

/* FastClick */
function _initPluginFastClick() {
    if (typeof FastClick !== 'undefined') {
        FastClick.attach(document.body);
    }
}

/* Nano Scroller */
function _initPluginNano($context) {
    if (typeof $.fn.nanoScroller !== 'undefined') {
        ($context || $doc).find('.nano').nanoScroller();
    }
}

/* Jarallax */
function _initPluginJarallax() {
    if (typeof $.fn.jarallax === 'undefined') {
        return;
    }
    var self = this;

    // header parallax
    var $parallaxHeader = $('.nk-header-title-parallax, .nk-header-title-parallax-opacity').eq(0);
    if ($parallaxHeader.length) {
        var $headerImage = $parallaxHeader.find('> .bg-image > div');
        var _$headerContent = $parallaxHeader.find('> .bg-image ~ *');
        var headerParallaxScroll = $parallaxHeader.hasClass('nk-header-title-parallax');
        var headerParallaxOpacity = $parallaxHeader.hasClass('nk-header-title-parallax-opacity');
        $parallaxHeader.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll: function onScroll(calc) {
                var scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
                var scrollInfo = Math.min(50, 50 * (1 - calc.visiblePercent));

                // fix if top banner not on top
                if (calc.beforeTop > 0) {
                    scrollImg = 0;
                    scrollInfo = 0;
                }

                if (headerParallaxScroll) {
                    $headerImage.css({
                        transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                    });
                    _$headerContent.css({
                        transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                    });
                }
                if (headerParallaxOpacity) {
                    _$headerContent.css({
                        opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent
                    });
                }
            }
        });
    }

    // footer parallax
    var $parallaxFooter = $('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);
    if ($parallaxFooter.length) {
        var $footerImage = $parallaxFooter.find('> .bg-image > div');
        var $footerContent = $parallaxFooter.find('> .bg-image ~ *');
        var footerParallaxScroll = $parallaxFooter.hasClass('nk-footer-parallax');
        var footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
        $parallaxFooter.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll: function onScroll(calc) {
                var scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
                var scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));
                if (footerParallaxScroll) {
                    $footerImage.css({
                        transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                    });
                    $footerContent.css({
                        transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                    });
                }
                if (footerParallaxOpacity) {
                    $footerContent.css({
                        opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
                    });
                }
            }
        });
    }

    // video backgrounds
    $('.bg-video[data-video]').each(function eachBgVideo() {
        $(this).attr('data-jarallax-video', $(this).attr('data-video'));
        $(this).removeAttr('data-video');
    });

    // primary parallax
    $('.bg-image-parallax, .bg-video-parallax').jarallax({
        speed: self.options.parallaxSpeed
    });

    // video without parallax
    $('.bg-video:not(.bg-video-parallax)').jarallax({
        speed: 1
    });
}

function addDefaultArrows($carousel) {
    $('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="nk-icon-arrow-left"></span></div>').on('click', function () {
        $carousel.flickity('previous');
    }).appendTo($carousel);

    $('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="nk-icon-arrow-right"></span></div>').on('click', function () {
        $carousel.flickity('next');
    }).appendTo($carousel);
}

function updateCustomArrows($carousel) {
    var data = $carousel.children('.nk-carousel-inner').data('flickity');
    var currIndex = data.selectedIndex;
    var nextIndex = void 0;
    var prevIndex = void 0;

    // get next and prev cells
    if (currIndex === 0) {
        nextIndex = 1;
        prevIndex = data.cells.length - 1;
    } else if (currIndex === data.cells.length - 1) {
        nextIndex = 0;
        prevIndex = data.cells.length - 2;
    } else {
        nextIndex = currIndex + 1;
        prevIndex = currIndex - 1;
    }
    var $nextCell = $(data.cells[nextIndex].element);
    var $prevCell = $(data.cells[prevIndex].element);
    var $currCell = $(data.cells[currIndex].element);

    // get name and sources
    var nextName = $nextCell.find('.nk-carousel-item-name').text();
    var prevName = $prevCell.find('.nk-carousel-item-name').text();
    var currName = $currCell.find('.nk-carousel-item-name').html();
    var currLinks = $currCell.find('.nk-carousel-item-links').html();

    // add info to buttons
    $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
    $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
    $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
    $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
}

// prevent click event fire when drag carousel
function noClickEventOnDrag($carousel) {
    $carousel.on('dragStart.flickity', function onDragStartFlickity() {
        $(this).find('.flickity-viewport').addClass('is-dragging');
    });
    $carousel.on('dragEnd.flickity', function onDragEndFlickity() {
        $(this).find('.flickity-viewport').removeClass('is-dragging');
    });
}

/* Flickity */
function _initPluginFlickity() {
    if (typeof window.Flickity === 'undefined') {
        return;
    }

    /*
     * Hack to add imagesLoaded event
     * https://github.com/metafizzy/flickity/issues/328
     */
    Flickity.prototype.imagesLoaded = function imagesLoadedProtoFunc() {
        if (!this.options.imagesLoaded) {
            return;
        }
        var _this = this;
        var timeout = false;

        imagesLoaded(this.slider).on('progress', function (instance, image) {
            var cell = _this.getParentCell(image.img);
            _this.cellSizeChange(cell && cell.element);
            if (!_this.options.freeScroll) {
                _this.positionSliderAtSelected();
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.dispatchEvent('imagesLoadedTimeout', null, [image.img, cell.element]);
            }, 100);
        });
    };

    var self = this;

    // carousel 1
    var $carousel1 = $('.nk-carousel > .nk-carousel-inner:not(.flickity-enabled)').parent();
    if ($carousel1.length) {
        $carousel1.children('.nk-carousel-inner').each(function eachCarouselInner() {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
            updateCustomArrows($(this).parent());
        }).on('select.flickity', function onSelectFlickity() {
            updateCustomArrows($(this).parent());
        });
        $carousel1.on('click', '.nk-carousel-next', function onClickCarouselNext() {
            $(this).parent().children('.nk-carousel-inner').flickity('next');
        });
        $carousel1.on('click', '.nk-carousel-prev', function onClickCarouselPrev() {
            $(this).parent().children('.nk-carousel-inner').flickity('previous');
        });
        noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
    }

    // carousel 2
    $('.nk-carousel-2 > .nk-carousel-inner:not(.flickity-enabled)').each(function eachCarouselInner() {
        $(this).flickity({
            pageDots: $(this).parent().attr('data-dots') === 'true' || false,
            autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
            prevNextButtons: false,
            wrapAround: true,
            imagesLoaded: true,
            cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        });
        if ($(this).parent().attr('data-arrows') === 'true') {
            addDefaultArrows($(this));
        }
        noClickEventOnDrag($(this));
    });

    // carousel 3
    var $carousel3 = $('.nk-carousel-3 > .nk-carousel-inner:not(.flickity-enabled)').parent();
    // set height for items
    function setHeightCarousel3() {
        $carousel3.each(function eachCarousel() {
            var $allImages = $(this).find('img');
            var size = $(this).attr('data-size') || 0.8;
            var resultH = wndH * size;
            var maxItemW = Math.min($(this).parent().width(), wndW) * size;
            $allImages.each(function eachCarouselImages() {
                if (this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
                    resultH = maxItemW * this.naturalHeight / this.naturalWidth;
                }
            });
            $allImages.css('height', resultH);
            $(this).children('.nk-carousel-inner').flickity('reposition');
        });
    }
    if ($carousel3.length) {
        $carousel3.children('.nk-carousel-inner').each(function eachCarouselInner() {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                imagesLoaded: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            updateCustomArrows($(this).parent());
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
        }).on('select.flickity', function onSelectFlickity() {
            updateCustomArrows($(this).parent());
        }).on('imagesLoadedTimeout.flickity', function () {
            // fix items height when images loaded
            setHeightCarousel3();
        });
        $carousel3.on('click', '.nk-carousel-next', function onClickCarouselNext() {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('next');
        });
        $carousel3.on('click', '.nk-carousel-prev', function onClickCarouselPrev() {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('previous');
        });
        setHeightCarousel3();
        self.debounceResize(setHeightCarousel3);
        noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
    }

    // update products carousel
    var $storeCarousel = $('.nk-carousel-1, .nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store:not(.nk-store-carousel-enabled)').addClass('.nk-store-carousel-enabled');
    function updateStoreProducts() {
        $storeCarousel.each(function eachCarousel() {
            var currentTallest = 0;
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var currentDiv = 0;
            var $el = void 0;
            $(this).find('.nk-product').each(function eachCarouselProduct() {
                $el = $(this);
                $el.css('height', '');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].css('height', currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.innerHeight();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].css('height', currentTallest);
                }
            });
        });
    }
    if ($storeCarousel.length) {
        $storeCarousel.children('.nk-carousel-inner').on('imagesLoadedTimeout.flickity', function () {
            // fix items height when images loaded
            setHeightCarousel3();
        });
        self.debounceResize(updateStoreProducts);
        updateStoreProducts();
    }
}

/* Isotope */
function _initPluginIsotope() {
    if (typeof window.Isotope === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-isotope').each(function eachIsotope() {
        var $grid = $(this).isotope({
            itemSelector: '.nk-isotope-item'
        });
        if (typeof $.fn.imagesLoaded !== 'undefined') {
            $grid.imagesLoaded().progress(function () {
                $grid.isotope('layout');
            });
        }
        $grid.on('arrangeComplete', function () {
            self.debounceResize();
        });

        // filter
        var $filter = $(this).prev('.nk-isotope-filter');
        if ($filter.length) {
            $filter.on('click', '[data-filter]', function eachIsotopeFilter(e) {
                e.preventDefault();
                var filter = $(this).attr('data-filter');

                $(this).addClass('active').siblings().removeClass('active');

                $grid.isotope({
                    filter: filter === '*' ? '' : '[data-filter*=' + filter + ']'
                });
            });
        }
    });
}

/* PhotoSwipe */
function _initPluginPhotoswipe() {
    var $gallery = $('.nk-popup-gallery');
    if (typeof PhotoSwipe === 'undefined' || !$gallery.length) {
        return;
    }

    // prepare photoswipe markup
    var markup = '<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n          <div class="pswp__bg"></div>\n          <div class="pswp__scroll-wrap">\n            <div class="pswp__container">\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n            </div>\n            <div class="pswp__ui pswp__ui--hidden">\n              <div class="pswp__top-bar">\n                <div class="pswp__counter"></div>\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n                <div class="pswp__preloader">\n                  <div class="pswp__preloader__icn">\n                    <div class="pswp__preloader__cut">\n                      <div class="pswp__preloader__donut"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>\n              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n              <div class="pswp__caption">\n                <div class="pswp__caption__center">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>';
    $body.append(markup);

    // init code
    function parseThumbnailElements(el) {
        var thumbElements = $(el).find('a.nk-gallery-item');
        var items = [];
        var childElements = void 0;
        var size = void 0;
        var item = void 0;

        thumbElements.each(function eachThumbs() {
            childElements = $(this).find('img');
            size = (this.getAttribute('data-size') || '1920x1080').split('x');

            // create slide object
            item = {
                src: this.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: this.getAttribute('data-author')
            };

            // save link to element for getThumbBoundsFn
            item.el = this;

            if (childElements.length > 0) {
                // thumbnail url
                item.msrc = childElements[0].getAttribute('src');
                if (childElements.length > 1) {
                    item.title = $(childElements).filter('.photoswipe-description').html();
                }
            }

            var mediumSrc = this.getAttribute('data-med') || item.src;
            if (mediumSrc) {
                size = (this.getAttribute('data-med-size') || this.getAttribute('data-size') || '1920x1080').split('x');
                // "medium-sized" image
                item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
            }
            // original image
            item.o = {
                src: item.src,
                w: item.w,
                h: item.h
            };
            items.push(item);
        });

        return items;
    }

    function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = $('.pswp')[0];
        var items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        var options = {
            captionAndToolbarShowEmptyCaptions: false,
            mainClass: 'pswp--minimal--dark',
            barsSize: { top: 0, bottom: 0 },
            captionEl: true,
            fullscreenEl: false,
            shareEl: false,
            bgOpacity: 0.85,
            tapToClose: true,
            tapToToggleControls: false,

            // Function builds caption markup
            addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl) {
                // item      - slide object
                // captionEl - caption DOM element
                // isFake    - true when content is added to fake caption container
                //             (used to get size of next or previous caption)

                if (!item.title && !item.author) {
                    captionEl.children[0].innerHTML = '';
                    return false;
                }
                var caption = '';
                if (item.title) {
                    caption += item.title;
                }
                if (item.author) {
                    if (item.title) {
                        caption += '<br>';
                    }
                    caption += '<small>' + item.author + '</small>';
                }
                captionEl.children[0].innerHTML = caption;
                return true;
            },


            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function getThumbBoundsFn(idx) {
                // See Options->getThumbBoundsFn section of docs for more info
                var thumbnail = items[idx].el.children[0];
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                var rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }
        };

        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid === index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        // see: http://photoswipe.com/documentation/responsive-images.html
        var realViewportWidth = void 0;
        var useLargeImages = false;
        var firstResize = true;
        var imageSrcWillChange = void 0;

        gallery.listen('beforeResize', function () {
            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;

            if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }
            } else if (useLargeImages) {
                useLargeImages = false;
                imageSrcWillChange = true;
            }

            if (imageSrcWillChange && !firstResize) {
                gallery.invalidateCurrItems();
            }

            if (firstResize) {
                firstResize = false;
            }

            imageSrcWillChange = false;
        });

        gallery.listen('gettingData', function (idx, item) {
            if (useLargeImages) {
                item.src = item.o.src;
                item.w = item.o.w;
                item.h = item.o.h;
            } else {
                item.src = item.m.src;
                item.w = item.m.w;
                item.h = item.m.h;
            }
        });

        gallery.init();
    }

    function photoswipeParseHash() {
        var hash = window.location.hash.substring(1);
        var params = {};

        if (hash.length < 5) {
            // pid=1
            return params;
        }

        var vars = hash.split('&');
        for (var _i6 = 0; _i6 < vars.length; _i6++) {
            if (!vars[_i6]) {
                continue;
            }
            var pair = vars[_i6].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    }

    // select all gallery elements
    var i = 0;
    $gallery.each(function eachGallery() {
        var $thisGallery = $(this);
        $thisGallery.attr('data-pswp-uid', i + 1);

        $thisGallery.on('click', 'a.nk-gallery-item', function onClickGalleryItem(e) {
            e.preventDefault();
            var index = 0;
            var clicked = this;
            $thisGallery.find('a.nk-gallery-item').each(function eachGalleryItem(idx) {
                if (this === clicked) {
                    index = idx;
                    return false;
                }
                return true;
            });
            openPhotoSwipe(index, $thisGallery[0]);
        });
        i++;
    });

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true);
    }
}

/* Bootstrap Tabs */
function _initPluginTabs() {
    var self = this;
    $wnd.on('shown.bs.tab', function () {
        self.debounceResize();
    });
}

/* Bootstrap Accordions */
function _initPluginAccordions() {
    var self = this;
    $wnd.on('shown.bs.collapse', function () {
        self.debounceResize();
    });
}

/* Bootstrap Modals */
function _initPluginModals() {
    var speed = 0.4;

    $wnd.on('show.bs.modal', function (event) {
        var $modal = $(event.target);
        if (!$modal.hasClass('nk-modal')) {
            return;
        }

        var $dlg = $modal.children('.modal-dialog');
        $modal.show();
        var startHeight = $dlg.innerHeight();
        $modal.hide();

        tween.set($dlg, {
            height: 0,
            overflow: 'hidden'
        });
        // speed per 900px of height
        // max 0.8 and min 0.2
        tween.to($dlg, Math.min(0.8, Math.max(0.2, speed * startHeight / 900)), {
            height: startHeight,
            overflow: 'auto',
            delay: 0.2,
            ease: Linear.easeNone,
            onComplete: function onComplete() {
                tween.set($dlg, {
                    height: 'auto'
                });
            }
        });
    });
}

/* Countdown */
function _initPluginCountdown() {
    if (typeof $.fn.countdown === 'undefined' || typeof moment === 'undefined' || typeof moment.tz === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-countdown').each(function eachCountdown() {
        var tz = $(this).attr('data-timezone');
        var end = $(this).attr('data-end');
        end = moment.tz(end, tz).toDate();

        $(this).countdown(end, function onCountTick(event) {
            $(this).html(event.strftime(self.options.templates.countdown));
        });
    });
}

/* Typed.js */
function _initPluginTypedjs() {
    $('.nk-typed').each(function eachTyped() {
        var $this = $(this);
        var strings = [];
        $this.children('span').each(function eachTypedSpan() {
            strings.push($(this).html());
        });
        if (!strings.length) {
            return;
        }
        $this.html('');

        var loop = $this.attr('data-loop') ? $this.attr('data-loop') === 'true' : true;
        var shuffle = $this.attr('data-shuffle') ? $this.attr('data-shuffle') === 'true' : false;
        var typeSpeed = $this.attr('data-type-speed') ? parseInt($this.attr('data-type-speed'), 10) : 30;
        var startDelay = $this.attr('data-start-delay') ? parseInt($this.attr('data-start-delay'), 10) : 0;
        var backSpeed = $this.attr('data-back-speed') ? parseInt($this.attr('data-back-speed'), 10) : 0;
        var backDelay = $this.attr('data-back-delay') ? parseInt($this.attr('data-back-delay'), 10) : 1000;
        var cursor = $this.attr('data-cursor');

        if (!cursor) {
            cursor = '|';
        } else if (cursor === 'false') {
            cursor = false;
        }

        $('<span>').appendTo($this).typed({
            strings: strings,
            typeSpeed: typeSpeed,
            startDelay: startDelay,
            backSpeed: backSpeed,
            backDelay: backDelay,
            shuffle: shuffle,
            loop: loop,
            loopCount: false,
            showCursor: !!cursor,
            cursorChar: cursor
        });

        // typed js used timeout from startDelay option
        setTimeout(function () {
            $this.addClass('ready');
        }, 0);
    });
}

/*------------------------------------------------------------------

  Khaki Class

-------------------------------------------------------------------*/

var KHAKI = function () {
    function KHAKI() {
        _classCallCheck(this, KHAKI);

        this.options = options;
    }

    _createClass(KHAKI, [{
        key: 'init',
        value: function init() {
            var self = this;
            self.initSharePlace();
            self.initNavbar();
            self.initNavbarSide();
            self.initNavbarFullscreen();
            self.initNavbarDropEffect1();
            self.initSearchBlock();
            self.initHeaderTitle();
            self.initSideButtons();
            self.initStore();
            self.initActionsLike();
            self.initBackgroundImages();
            self.initLinkEffects();
            self.initCounters();
            self.initAnchors();
            self.initLinesForBoxes();
            self.initImageBoxes();
            self.initVideoFullscreen();
            self.initVideoBlocks();
            self.initGIF();
            self.initFullPage();
            self.initQuickView();
            self.initInfoBoxes();
            self.initForms();
            self.initFormsMailChimp();
            self.initAudioPlayer();
            self.initFacebook();
            self.initInstagram();
            self.initTwitter();
            self.initShortcuts();

            // init plugins
            self.initPluginStickySidebar();
            self.initPluginFastClick();
            self.initPluginNano();
            self.initPluginJarallax();
            self.initPluginFlickity();
            self.initPluginIsotope();
            self.initPluginPhotoswipe();
            self.initPluginTabs();
            self.initPluginAccordions();
            self.initPluginModals();
            self.initPluginCountdown();
            self.initPluginTypedjs();

            return self;
        }
    }, {
        key: 'setOptions',
        value: function setOptions(newOpts) {
            return _setOptions.call(this, newOpts);
        }
    }, {
        key: 'debounceResize',
        value: function debounceResize(func) {
            return _debounceResize.call(this, func);
        }
    }, {
        key: 'throttleScroll',
        value: function throttleScroll(callback) {
            return _throttleScroll.call(this, callback);
        }
    }, {
        key: 'bodyOverflow',
        value: function bodyOverflow(type) {
            return _bodyOverflow.call(this, type);
        }
    }, {
        key: 'isInViewport',
        value: function isInViewport($item, returnRect) {
            return _isInViewport.call(this, $item, returnRect);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo($to, callback) {
            return _scrollTo.call(this, $to, callback);
        }
    }, {
        key: 'key',
        value: function key(name, callback) {
            return _key2.call(this, name, callback);
        }
    }, {
        key: 'initShortcuts',
        value: function initShortcuts() {
            return _initShortcuts.call(this);
        }
    }, {
        key: 'initLinkEffects',
        value: function initLinkEffects() {
            return _initLinkEffects.call(this);
        }
    }, {
        key: 'initSharePlace',
        value: function initSharePlace() {
            return _initSharePlace.call(this);
        }
    }, {
        key: 'initHeaderTitle',
        value: function initHeaderTitle() {
            return _initHeaderTitle.call(this);
        }
    }, {
        key: 'initNavbar',
        value: function initNavbar() {
            return _initNavbar.call(this);
        }
    }, {
        key: 'initNavbarSide',
        value: function initNavbarSide() {
            return _initNavbarSide.call(this);
        }
    }, {
        key: 'initNavbarFullscreen',
        value: function initNavbarFullscreen() {
            return _initNavbarFullscreen.call(this);
        }
    }, {
        key: 'initNavbarDropEffect1',
        value: function initNavbarDropEffect1() {
            return _initNavbarDropEffect.call(this);
        }
    }, {
        key: 'initSearchBlock',
        value: function initSearchBlock() {
            return _initSearchBlock.call(this);
        }
    }, {
        key: 'initCounters',
        value: function initCounters() {
            return _initCounters.call(this);
        }
    }, {
        key: 'initSideButtons',
        value: function initSideButtons() {
            return _initSideButtons.call(this);
        }
    }, {
        key: 'initActionsLike',
        value: function initActionsLike() {
            return _initActionsLike.call(this);
        }
    }, {
        key: 'initStore',
        value: function initStore() {
            return _initStore.call(this);
        }
    }, {
        key: 'initBackgroundImages',
        value: function initBackgroundImages() {
            return _initBackgroundImages.call(this);
        }
    }, {
        key: 'parallaxMouseInit',
        value: function parallaxMouseInit() {
            return _parallaxMouseInit.call(this);
        }
    }, {
        key: 'initAnchors',
        value: function initAnchors() {
            return _initAnchors.call(this);
        }
    }, {
        key: 'initLinesForBoxes',
        value: function initLinesForBoxes() {
            return _initLinesForBoxes.call(this);
        }
    }, {
        key: 'initImageBoxes',
        value: function initImageBoxes() {
            return _initImageBoxes.call(this);
        }
    }, {
        key: 'initVideoFullscreen',
        value: function initVideoFullscreen() {
            return _initVideoFullscreen.call(this);
        }
    }, {
        key: 'initVideoBlocks',
        value: function initVideoBlocks() {
            return _initVideoBlocks.call(this);
        }
    }, {
        key: 'initGIF',
        value: function initGIF() {
            return _initGIF.call(this);
        }
    }, {
        key: 'initFullPage',
        value: function initFullPage() {
            return _initFullPage.call(this);
        }
    }, {
        key: 'initQuickView',
        value: function initQuickView() {
            return _initQuickView.call(this);
        }
    }, {
        key: 'initInfoBoxes',
        value: function initInfoBoxes() {
            return _initInfoBoxes.call(this);
        }
    }, {
        key: 'initForms',
        value: function initForms() {
            return _initForms.call(this);
        }
    }, {
        key: 'initFormsMailChimp',
        value: function initFormsMailChimp() {
            return _initFormsMailChimp.call(this);
        }
    }, {
        key: 'initAudioPlayer',
        value: function initAudioPlayer() {
            return _initAudioPlayer.call(this);
        }
    }, {
        key: 'initFacebook',
        value: function initFacebook() {
            return _initFacebook.call(this);
        }
    }, {
        key: 'initInstagram',
        value: function initInstagram() {
            return _initInstagram.call(this);
        }
    }, {
        key: 'initTwitter',
        value: function initTwitter() {
            return _initTwitter.call(this);
        }
    }, {
        key: 'initPluginStickySidebar',
        value: function initPluginStickySidebar() {
            return _initPluginStickySidebar.call(this);
        }
    }, {
        key: 'initPluginFastClick',
        value: function initPluginFastClick() {
            return _initPluginFastClick.call(this);
        }
    }, {
        key: 'initPluginNano',
        value: function initPluginNano($context) {
            return _initPluginNano.call(this, $context);
        }
    }, {
        key: 'initPluginJarallax',
        value: function initPluginJarallax($context) {
            return _initPluginJarallax.call(this, $context);
        }
    }, {
        key: 'initPluginFlickity',
        value: function initPluginFlickity($context) {
            return _initPluginFlickity.call(this, $context);
        }
    }, {
        key: 'initPluginIsotope',
        value: function initPluginIsotope($context) {
            return _initPluginIsotope.call(this, $context);
        }
    }, {
        key: 'initPluginPhotoswipe',
        value: function initPluginPhotoswipe($context) {
            return _initPluginPhotoswipe.call(this, $context);
        }
    }, {
        key: 'initPluginTabs',
        value: function initPluginTabs($context) {
            return _initPluginTabs.call(this, $context);
        }
    }, {
        key: 'initPluginAccordions',
        value: function initPluginAccordions($context) {
            return _initPluginAccordions.call(this, $context);
        }
    }, {
        key: 'initPluginModals',
        value: function initPluginModals($context) {
            return _initPluginModals.call(this, $context);
        }
    }, {
        key: 'initPluginCountdown',
        value: function initPluginCountdown($context) {
            return _initPluginCountdown.call(this, $context);
        }
    }, {
        key: 'initPluginTypedjs',
        value: function initPluginTypedjs($context) {
            return _initPluginTypedjs.call(this, $context);
        }
    }]);

    return KHAKI;
}();

/*------------------------------------------------------------------

  Init Khaki

-------------------------------------------------------------------*/


window.Khaki = new KHAKI();
}());
