exports.seed = function(knex, Promise) {
  return knex('post').insert([
    {title: 'Google Spinoff’s Drone Delivery Business First to Get FAA Approval', 
    category: 'business', 
    link: "https://www.bloomberg.com/news/articles/2019-04-23/alphabet-s-drone-delivery-business-cleared-for-takeoff-by-faa",
     seen: false, public: true},

     {title: 'The Shirley Chisholm Monument in Brooklyn Finds Its Designers', 
     category: 'art',
     link: "https://www.nytimes.com/2019/04/23/arts/design/shirley-chisholm-monument-prospect-park.html?rref=collection%2Ftimestopic%2FArt&action=click&contentCollection=timestopics&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=collection",
     imgURL: "https://static01.nyt.com/images/2019/04/24/arts/23monument1/merlin_153739047_0d5d4314-bb19-417e-b5c9-112281d00447-superJumbo.jpg?quality=90&auto=webp", 
     seen: false, public: true},

      {title: 'This Tiny Museum Fits Inside an Elevator Shaft', 
      category: 'art', 
      link: "https://www.nytimes.com/2019/04/21/nyregion/tiny-museum-new-york-city.html?rref=collection%2Ftimestopic%2FArt&action=click&contentCollection=timestopics&region=stream&module=stream_unit&version=latest&contentPlacement=6&pgtype=collection",
      imgURL: "https://static01.nyt.com/images/2019/04/21/nyregion/21minimuseum1/merlin_153723687_67d2ad36-68d3-4111-8a8a-8137aa0fbbb3-superJumbo.jpg?quality=90&auto=webp",
      seen: false, public: true},

       {title: 'If the Animals from Game of Thrones Houses Battled, Which One Would Win?', 
       category: 'animals', 
       link: "https://www.livescience.com/65272-game-of-thrones-animals-winner.html",
       imgURL: "https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNS8yODUvb3JpZ2luYWwvZ290LWFuaW1hbC1iYXR0bGUuanBn",
       seen: false, public: true},

       {title: 'Samsung Galaxy Fold appears to be first device to use ultra-fast eUFS 3.0 storage', 
       category: 'technology', 
       link: "https://www.androidpolice.com/2019/04/16/samsung-galaxy-fold-appears-to-be-first-device-to-use-ultra-fast-eufs-3-0-storage/",
       imgURL: "https://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2019%2F02%2F2019-02-20-13_14_24-Galaxy-Unpacked-2019-live-stream-YouTube.png&w=728",
       seen: false, public: true},
    ]);
 
 
 };
 
 
 