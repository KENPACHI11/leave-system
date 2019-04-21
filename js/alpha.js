$( document ).ready(function() {
    
    
    if ($('.material-design-hamburger__icon').length === 1) {
        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function() {      
                var child;
                document.body.classList.toggle('background--blur');
                this.parentNode.nextElementSibling.classList.toggle('menu--on');

                child = this.childNodes[1].classList;

                if (child.contains('material-design-hamburger__icon--to-arrow')) {
                    child.remove('material-design-hamburger__icon--to-arrow');
                    child.add('material-design-hamburger__icon--from-arrow');
                } else {
                    child.remove('material-design-hamburger__icon--from-arrow');
                    child.add('material-design-hamburger__icon--to-arrow');
                }
            }
        );
    }
    
    $(".fixed-sidebar .navigation-toggle a").removeClass('button-collapse');
    $(".fixed-sidebar .navigation-toggle a").addClass('reverse-icon');
        
            $(".fixed-sidebar .navigation-toggle a").click(function() {
                $('#slide-out').toggle();
                $('.mn-inner').toggleClass('hidden-fixed-sidebar');
                $('.mn-content').toggleClass('fixed-sidebar-on-hidden');
                $(document).trigger('fixedSidebarClick');
            });
    
    if(($(window).width() < 993)&&(!$('.mn-content').hasClass('fixed-sidebar-on-hidden'))){
        $(".fixed-sidebar .navigation-toggle a").click();
        $('.fixed-sidebar .navigation-toggle a span').addClass('material-design-hamburger__icon--to-arrow');
    };
    
     
    $('.sidebar-menu > li > a.collapsible-header').click(function() { 
        $('.sidebar-menu > li > a.active:not(.collapsible-header)').parent().removeClass('active');
        $('.sidebar-menu > li > a.active:not(.collapsible-header)').removeClass('active');
    });
    
    
    $('.search-toggle').click(function() { 
        $('.search').removeClass('hide-on-small-and-down');
        $('.search input').focus();
    });
    
    $('.close-search').click(function() { 
        $('.search').addClass('hide-on-small-and-down');
    });
    
    
    $('.search-results').hide();
    if(!$('body').hasClass('quick-results-off')) {
    $(document).mouseup(function (e){
        var container = $(".search-results");
        var container2 = $(".search input#search");
        if (!container.is(e.target)
            && !container2.is(e.target)
            && container.has(e.target).length === 0
            && container2.has(e.target).length === 0)
        {
            container.fadeOut(300);
        }
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $(".search-results").fadeOut(300);
            $(".search input#search").blur();
        }   
    });
    
    $('.search input#search').focus(function() { 
        if($.trim($('.search input#search').val()).length != 0){
            $('.search-results').fadeIn(300);
        }
    }); 

    $(".search input#search").keypress(function(){
        $('.search-results').fadeIn(300);
    });
    
    $('.search-result-container').fadeOut();
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $('.search-result-container').fadeOut(1);
    $('.res-not-found').fadeOut(1);
    $('.search input#search').on('input', function() {
        $('.search-result-container').fadeOut(1);
        $('.res-not-found').fadeOut(1);
        delay(function(){
            if(!$.trim($('.search input#search').val()).length != 0) {
                $('.search-result-container').fadeOut(1);
                $('.res-not-found').fadeIn(1);
            } else {
                $('.search-result-container').fadeIn();
            }
        }, 500 );
        $('.search-text').text(this.value);
    });
    }
    
    $('.sidebar-account-settings:not(.show)').fadeOut(0);
    $('.account-settings-link').click(function() { 
        if(!$('.sidebar-account-settings').hasClass('show')){
            $('.sidebar-account-settings').fadeIn(300);
            $('.sidebar-menu').fadeOut(0);
            $('.sidebar-account-settings').addClass('show');
        } else {
            $('.sidebar-account-settings').fadeOut(0);
            $('.sidebar-menu').fadeIn(300);
            $('.sidebar-account-settings').removeClass('show');
        }
    });
    
   
    $('.dropdown-right').dropdown({
        alignment: 'right' 
    });
    
    
    $('.button-collapse:not(.right-sidebar-button)').sideNav();
    $('.button-collapse.right-sidebar-button').sideNav({
        edge: 'right'
    });
    $('.chat-button').sideNav({
        edge: 'right'
    });
    $('.chat-message-link').sideNav({
        menuWidth: 320,
        edge: 'right'
    });
    $('.chat-message').click(function() { 
        $('.chat-message-link').click();
    });
    
    $('.collapsible').collapsible();
      $('.slider').slider({full_width: true});
    
    
    
    $('.left-sidebar-hover').mouseover(function() {
        $('.button-collapse').click();
        $('.material-design-hamburger__layer').removeClass('material-design-hamburger__icon--from-arrow');
        $('.material-design-hamburger__layer').addClass('material-design-hamburger__icon--to-arrow');
        $('#slide-out').addClass('openOnHover');
    $('#slide-out').mouseleave(function() {
        if($(this).hasClass('openOnHover')){
        $('.button-collapse').click();
        $('.material-design-hamburger__layer').addClass('material-design-hamburger__icon--from-arrow');
        $('.material-design-hamburger__layer').removeClass('material-design-hamburger__icon--to-arrow');
        $('#slide-out').removeClass('openOnHover');}
    });
    
    });
   
    $('.modal-trigger').leanModal();
    
   
    $('select').material_select();
    
    
    preloader = new $.materialPreloader({
        position: 'top',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    });
    preloader.on();
    $(window).load(function() {
        preloader.off();
    });
    
   
    function blockUI(item) {    
        $(item).block({
            message: '',
            css: {
                border: 'none',
                padding: '0px',
                margin: '-20px 0 0 0',
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent'
            },
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.6,
                cursor: 'wait'
            }
        });
    }
    
    function unblockUI(item) {
        $(item).unblock();
    }  

    
    $('.card-refresh').click(function() { 
        var el = $(this).closest('.card')
        blockUI(el);
        window.setTimeout(function () {
            unblockUI(el);
        }, 1000);
    }); 
    
    $('.card-remove').click(function() { 
        $(this).closest('.card').fadeOut(300);
    }); 

    window.onload = function() {
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 1000);
        setTimeout(function(){
            $('.loader').fadeOut('400');
        }, 600);
    }
    
    $('input.expand-search').click(function(){
        $(this).addClass('open-search');
    });
    $('input.expand-search').blur(function(){
        $(this).removeClass('open-search');
    });
});
