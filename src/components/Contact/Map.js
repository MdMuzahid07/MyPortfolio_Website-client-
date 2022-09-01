import React from 'react';

const Map = () => {
    return (
        <section>
            <iframe className='w-full h-72 rounded-xl opacity-50' title='map' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=26d73d4e40650b3f73f63d4cb18b61118bb0df8c'></script>
        </section>
    );
};

export default Map;