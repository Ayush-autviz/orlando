// Image mapping for local assets
// This allows us to use require() with static paths while mapping to dynamic keys

export const imageMap: { [key: string]: any } = {
  // Theme Parks & Unique Attractions
  'kennedy-space-center': require('../../assets/images/kennedy-space-center.webp'),
  'gatorland': require('../../assets/images/gatorland.jpg'),
  'fun-spot-america': require('../../assets/images/fun-spot-america.webp'),
  'icon-park': require('../../assets/images/icon-park.jpg'),
  'crayola-experience': require('../../assets/images/crayola-experience.jpg'),
  'sea-life-orlando-aquarium': require('../../assets/images/sea-life-orlando-aquarium.jpeg'),
  'madame-tussauds-orlando': require('../../assets/images/madame-tussauds-orlando.jpeg'),
  'blue-man-group': require('../../assets/images/blue-man-group.jpg'),
  'ifly-orlando': require('../../assets/images/ifly-orlando.jpeg'),
  'topgolf-orlando': require('../../assets/images/topgolf-orlando.jpeg'),
  'andretti-indoor-karting': require('../../assets/images/andretti-indoor-karting.jpg'),
  'k1-speed-orlando': require('../../assets/images/k1-speed-orlando.jpeg'),
  'dezerland-park': require('../../assets/images/dezerland-park.jpeg'),
  'dezerland-park-auto-museum': require('../../assets/images/dezerland-park-auto-museum.jpeg'),
  'ripleys-believe-it-or-not-orlando': require('../../assets/images/ripleys-believe-it-or-not-orlando.jpeg'),
  'titanic-artifact-exhibition': require('../../assets/images/titanic-artifact-exhibition.jpeg'),
  'museum-of-illusions-orlando': require('../../assets/images/museum-of-illusions-orlando.jpeg'),
  'chocolate-kingdom': require('../../assets/images/chocolate-kingdom.jpeg'),
  'the-great-magic-hall': require('../../assets/images/the-great-magic-hall.jpeg'),
  'cirque-du-soleil': require('../../assets/images/cirque-du-soleil.jpeg'),
  'dave-and-busters-orlando': require('../../assets/images/dave-and-busters-orlando.jpeg'),
  'main-event-orlando': require('../../assets/images/main-event-orlando.jpeg'),
  'arcade-monsters': require('../../assets/images/arcade-monsters.jpeg'),
  'tankAmerica': require('../../assets/images/tankAmerica.jpg'),
  'the-escape-game-orlando': require('../../assets/images/the-escape-game-orlando.jpeg'),
  'escapology': require('../../assets/images/escapology.jpeg'),
  'americas-escape': require('../../assets/images/americas-escape.jpeg'),
  'american-ghost-adventures': require('../../assets/images/american-ghost-adventures.jpeg'),
  'putting-edge': require('../../assets/images/putting-edge.jpeg'),
  'pirates-cove-adventure-golf': require('../../assets/images/pirates-cove-adventure-golf.jpeg'),
  'orlando-slingshot': require('../../assets/images/orlando-slingshot.jpeg'),
  'orlando-gun-club': require('../../assets/images/orlando-gun-club.jpeg'),
  'old-town-entertainment-district': require('../../assets/images/old-town-entertainment-district.jpeg'),
  'nona-adventure-park': require('../../assets/images/nona-adventure-park.jpg'),
  'underground-game-show': require('../../assets/images/underground-game-show.jpg'),

  // Outdoor Adventures
  'lake-eola-park': require('../../assets/images/lake-eola-park.jpeg'),
  'wekiwa-springs-state-park': require('../../assets/images/wekiwa-springs-state-park.jpeg'),
  'tibet-butler-nature-preserve': require('../../assets/images/tibet-butler-nature-preserve.jpeg'),
  'blue-spring-state-park': require('../../assets/images/blue-spring-state-park.jpeg'),
  'harry-p-leu-gardens': require('../../assets/images/harry-p-leu-gardens.jpeg'),
  'weeki-wachee-springs-state-park': require('../../assets/images/weeki-wachee-springs-state-park.jpeg'),
  'southern-hills-farms': require('../../assets/images/southern-hills-farms.jpg'),
  'epic-paddle-adventures': require('../../assets/images/epic-paddle-adventures.jpeg'),
  'boggy-creek-airboat-adventures': require('../../assets/images/boggy-creek-airboat-adventures.jpeg'),
  'get-up-and-go-kayaking': require('../../assets/images/get-up-and-go-kayaking.jpeg'),
  'spirit-of-the-swamp': require('../../assets/images/spirit-of-the-swamp.jpeg'),
  'kings-landing': require('../../assets/images/kings-landing.jpeg'),
  'paddling-center-at-shingle-creek': require('../../assets/images/paddling-center-at-shingle-creek.jpeg'),
  'bk-adventure': require('../../assets/images/bk-adventure.jpeg'),
  'revolution-adventures': require('../../assets/images/revolution-adventures.jpeg'),
  'showdown-atv': require('../../assets/images/showdown-atv.jpeg'),
  'orlando-tree-trek-adventure-park': require('../../assets/images/orlando-tree-trek-adventure-park.jpeg'),
  'buena-vista-watersports': require('../../assets/images/buena-vista-watersports.jpeg'),
  'orlando-canaveral-princess-deep-sea-fishing': require('../../assets/images/orlando-canaveral-princess-deep-sea-fishing.jpeg'),
  'island-h2o-water-park': require('../../assets/images/island-h2o-water-park.jpeg'),

  // Cultural/Educational
  'orlando-museum-of-art': require('../../assets/images/orlando-museum-of-art.jpeg'),
  'orlando-science-center': require('../../assets/images/orlando-science-center.jpeg'),
  'orange-county-regional-history-center': require('../../assets/images/orange-county-regional-history-center.jpeg'),
  'orlando-shakespeare-theater': require('../../assets/images/orlando-shakespeare-theater.jpeg'),
  'enzian-theater': require('../../assets/images/enzian-theater.jpeg'),
  'mennello-museum-of-american-art': require('../../assets/images/mennello-museum-of-american-art.jpeg'),
  'orlando-fire-museum': require('../../assets/images/orlando-fire-museum.jpeg'),
  'maitland-art-center': require('../../assets/images/maitland-art-center.jpeg'),
  'orlando-family-stage': require('../../assets/images/orlando-family-stage.jpeg'),

  // Dinner Shows
  'pirates-dinner-adventure': require('../../assets/images/pirates-dinner-adventure.jpeg'),
  'medieval-times-dinner-tournament': require('../../assets/images/medieval-times-dinner-tournament.jpeg'),
  'sleuths-mystery-dinner-show': require('../../assets/images/sleuths-mystery-dinner-show.jpeg'),
  'hoop-dee-doo-musical-revue': require('../../assets/images/hoop-dee-doo-musical-revue.jpeg'),
  'mangos-tropical-cafe': require('../../assets/images/mangos-tropical-cafe.jpeg'),
  'teatro-martini-orlando': require('../../assets/images/teatro-martini-orlando.jpeg'),
  'outta-control-magic-comedy-dinner-show': require('../../assets/images/outta-control-magic-comedy-dinner-show.jpeg'),
  'wantilan-luau': require('../../assets/images/wantilan-luau.jpeg'),

  // Additional mappings for missing items
  'dezerland-park-orlando': require('../../assets/images/dezerland-park.jpeg'),
  'escape-game-orlando': require('../../assets/images/the-escape-game-orlando.jpeg'),
  'andretti-indoor-karting-games': require('../../assets/images/andretti-indoor-karting.jpg'),
  'great-magic-hall': require('../../assets/images/the-great-magic-hall.jpeg'),
  'titanic-the-artifact-exhibition': require('../../assets/images/titanic-artifact-exhibition.jpeg'),
  'orlando-princess-canaveral-princess-deep-sea-fishing': require('../../assets/images/orlando-canaveral-princess-deep-sea-fishing.jpeg'),
  'central-florida-zoo-botanical-gardens': require('../../assets/images/kennedy-space-center.webp'), // fallback
  'dave-busters-orlando': require('../../assets/images/dave-and-busters-orlando.jpeg'),

  // Epic Universe
  'epic-celestial-park': require('../../assets/images/epic-celestial-park.jpg'),
  'epic-dark-universe': require('../../assets/images/epic-dark-universe.jpg'),
  'epic-isle-of-berk': require('../../assets/images/epic-isle-of-berk.jpg'),
  'epic-ministry-of-magic': require('../../assets/images/epic-ministry-of-magic.jpg'),
  'epic-nintendo-world': require('../../assets/images/epic-nintendo-world.jpg'),
  
  // Default fallback
  'default': require('../../assets/images/kennedy-space-center.webp'),
};

// Helper function to get image source from path or key
export const getImageSource = (imagePath?: string) => {
  console.log(imagePath,'imagePath')
  if (!imagePath) {
    return imageMap['default'];
  }
  
  // If it's already a full HTTP URL, use it as is
  if (imagePath.startsWith('http')) {
    return { uri: imagePath };
  }
  
  // Extract filename from path for mapping
  let imageKey = imagePath;
  
  // Handle different path formats
  if (imagePath.includes('/')) {
    const parts = imagePath.split('/');
    imageKey = parts[parts.length - 1]; // Get filename
  }
  
  // Remove file extension for key lookup
  imageKey = imageKey.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  
  // Return mapped image or default
  return imageMap[imageKey] || imageMap['default'];
};
