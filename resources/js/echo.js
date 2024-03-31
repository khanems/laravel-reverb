import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});




window.Echo.channel('message')
    .listen('message', (e) => {
        toastr.options = {
            "closeButton": true, // Show close button
            "timeOut": 5000, // Time in milliseconds before the toast disappears
            "extendedTimeOut": 1000, // Time in milliseconds to extend the toast timeout if the mouse is hovered over it
            "positionClass": "toast-top-right", // Position of the toast on the screen
            "preventDuplicates": true, // Prevent duplicate toasts
            "progressBar": true, // Show progress bar
            "onclick": null, // Function to run when toast is clicked
            "showDuration": "300", // Duration of show animation
            "hideDuration": "1000", // Duration of hide animation
            "timeOut": "5000", // Time to close the toast automatically
            "extendedTimeOut": "1000", // Time to close the toast automatically after mouse hover
            "showEasing": "swing", // Easing for show animation
            "hideEasing": "linear", // Easing for hide animation
            "showMethod": "fadeIn", // Show method
            "hideMethod": "fadeOut" // Hide method
        };
        toastr.success(e.message);
    });

