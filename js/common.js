$(document).ready(function () {
    $('.call-menu').click(function () {
        $('.nav-box').addClass('showed');
    });
    $('.close-menu').click(function () {
        $('.nav-box').removeClass('showed');
    });


    $('.close-modal').click(function () {
        $('.modal-plain').removeClass('modal-show');
        $('.overlay').removeClass('overlay-showed');
        $('body').removeClass('scroll-locked');
    });

    // Variables
    const $cursor = $('.cursor');

// Functions
    const onMouseMove = (e) => {
        const x = e.pageX
        const y = e.pageY

        TweenMax.to($cursor, 0.5, {
            x: x,
            y: y,
            ease: Cubic.easeOut,
            force3D: true,
        }, 0.2)
    };
//Events

    document.addEventListener('mousemove', onMouseMove);

//
//     const $bigBall = document.querySelector('.cursor__ball--big');
//     const $smallBall = document.querySelector('.cursor__ball--small');
//     const $hoverables = document.querySelectorAll('.hoverable');
//
// // Listeners
//     document.body.addEventListener('mousemove', onMouseMove);
//     for (let i = 0; i < $hoverables.length; i++) {
//         $hoverables[i].addEventListener('mouseenter', onMouseHover);
//         $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
//     }
//
// // Move the cursor
//     function onMouseMove(e) {
//         TweenMax.to($bigBall, .4, {
//             x: e.pageX - 15,
//             y: e.pageY - 15
//         })
//         TweenMax.to($smallBall, .1, {
//             x: e.pageX - 5,
//             y: e.pageY - 7
//         })
//     }
//
// // Hover an element
//     function onMouseHover() {
//         TweenMax.to($bigBall, .3, {
//             scale: 4
//         })
//     }
//     function onMouseHoverOut() {
//         TweenMax.to($bigBall, .3, {
//             scale: 1
//         })
//     }

});







