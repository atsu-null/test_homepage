window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-items-button');
    var $menu = document.querySelector('.header-site-items');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});
