/* eslint-disable func-names,import/no-extraneous-dependencies,global-require,import/no-unresolved,prefer-spread */
/*!
 * Name    : nK Share
 * Version : 1.0.0
 * Author  : _nK http://nkdev.info
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(($) => {
    // nKShare instance
    const NKShare = (function nKShareOuter() {
        let instanceID = 0;

        function nKShareInner(item, userOptions) {
            const self = this;

            self.$item = $(item);

            self.defaults = {
                name: null,
                text: null,
                link: null,
                media: null,
                popupOptions: 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600',
                networks: {
                    facebook() {
                        let result = `//www.facebook.com/share.php?m2w&s=100&p[url]=${encodeURIComponent(this.options.link)}`;

                        if (this.options.media) {
                            result += `&p[images][0]=${encodeURIComponent(this.options.media)}`;
                        }
                        if (this.options.text) {
                            result += `&p[title]=${encodeURIComponent(this.options.text)}`;
                        }

                        window.open(result, 'Facebook', this.options.popupOptions);
                    },
                    twitter() {
                        let result = `https://twitter.com/intent/tweet?original_referer=${encodeURIComponent(this.options.link)}`;

                        if (this.options.text) {
                            result += `&text=${encodeURIComponent(this.options.text)}%20${encodeURIComponent(this.options.link)}`;
                        } else {
                            result += `&text=${encodeURIComponent(this.options.link)}`;
                        }

                        window.open(result, 'Twitter', this.options.popupOptions);
                    },
                    pinterest() {
                        let result = `//pinterest.com/pin/create/button/?url=${encodeURIComponent(this.options.link)}`;

                        if (this.options.media) {
                            result += `&media=${encodeURIComponent(this.options.media)}`;
                        }
                        if (this.options.text) {
                            result += `&description=${encodeURIComponent(this.options.text)}`;
                        }

                        window.open(result, 'Pinterest', this.options.popupOptions);
                    },
                    'google-plus': function googlePlus() {
                        window.open(`//plus.google.com/share?url=${encodeURIComponent(this.options.link)}`, 'GooglePlus', this.options.popupOptions);
                    },
                    linkedin() {
                        let result = `//www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.options.link)}&source=${encodeURIComponent(this.options.link)}`;

                        if (this.options.text) {
                            result += `&title=${encodeURIComponent(this.options.text)}`;
                        }

                        window.open(result, 'LinkedIn', this.options.popupOptions);
                    },
                    vk() {
                        window.open(`//vk.com/share.php?url=${encodeURIComponent(this.options.link)}`, 'Vkontakte', this.options.popupOptions);
                    },
                },
            };

            self.options = $.extend({}, self.defaults, userOptions);

            self.instanceID = instanceID++;

            self.onClickInit();
        }

        return nKShareInner;
    }());

    NKShare.prototype.onClickInit = function onClickInit() {
        const self = this;

        self.$item.on('click', (e) => {
            if (self.options.networks[self.options.name]) {
                e.preventDefault();
                self.options.networks[self.options.name].call(self);
            }
        });
    };

    const oldNkshare = $.fn.nkshare;

    $.fn.nkshare = function nkShareJq() {
        const items = this;
        const options = arguments[0] || {};
        const args = Array.prototype.slice.call(arguments, 1);
        const len = items.length;
        let k = 0;
        let ret;

        for (k; k < len; k++) {
            if (typeof options === 'object') {
                if (!items[k].nkshare) {
                    const thisOpts = $.extend({}, options);
                    const $item = $(items[k]);

                    // prepare options
                    if (typeof thisOpts.name === 'undefined') {
                        thisOpts.name = $item.attr('data-share');
                    }
                    if (typeof thisOpts.name === 'undefined') {
                        return false;
                    }
                    if (typeof thisOpts.text === 'undefined') {
                        thisOpts.text = $item.attr('data-share-text');
                    }
                    if (typeof thisOpts.link === 'undefined') {
                        thisOpts.link = $item.attr('data-share-link');
                    }
                    if (typeof thisOpts.media === 'undefined') {
                        thisOpts.media = $item.attr('data-share-media');
                    }

                    // init
                    items[k].nkshare = new NKShare(items[k], thisOpts);
                }
            } else {
                ret = items[k].nkshare ? items[k].nkshare[options].apply(items[k].nkshare, args) : undefined;
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }

        return this;
    };

    // no conflict
    $.fn.nkshare.noConflict = function nKshareNoConflict() {
        $.fn.nkshare = oldNkshare;
        return this;
    };

    // data-jarallax initialization
    $(document).on('ready.data-nkshare', () => {
        $('[data-share]').nkshare();
    });
}));
