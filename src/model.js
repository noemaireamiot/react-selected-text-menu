import { GoClippy } from 'react-icons/lib/go';
import {
  FaGoogle,
  FaWikipediaW,
  FaGithub,
  FaAmazon,
  FaYahoo,
  FaPinterestP,
  FaYoutubeSquare,
  FaLastfm,
  FaMapMarker,
  FaYelp,
  FaTripadvisor,
  FaSoundcloud,
  FaRedditAlien,
} from 'react-icons/lib/fa';

export default {
  google: {
    link: 'http://www.google.com/search?q=',
    icon: FaGoogle({ color: 'white' }),
  },
  wikipedia: {
    link: 'https://en.wikipedia.org/wiki/',
    icon: FaWikipediaW({ color: 'white' }),
  },
  github: {
    link: 'https://github.com/search?utf8=%E2%9C%93&q=',
    icon: FaGithub({ color: 'white' }),
  },
  amazon: {
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=',
    icon: FaAmazon({ color: 'white' }),
  },
  yahoo: {
    link: 'https://search.yahoo.com/search;_ylt=A0oG7l7PeB5P3G0AKASl87UF?p=',
    icon: FaYahoo({ color: 'white' }),
  },
  pinterest: {
    link: 'https://pinterest.com/search/pins/?q=',
    icon: FaPinterestP({ color: 'white' }),
  },
  youtube: {
    link: 'https://www.youtube.com/results?search_query=',
    icon: FaYoutubeSquare({ color: 'white' }),
  },
  lastfm: {
    link: 'https://www.last.fm/fr/search?q=',
    icon: FaLastfm({ color: 'white' }),
  },
  maps: {
    link: 'https://www.google.com/maps/search/',
    icon: FaMapMarker({ color: 'white' }),
  },
  yelp: {
    link: 'https://www.yelp.com/search?find_desc=',
    icon: FaYelp({ color: 'white' }),
  },
  tripadvisor: {
    link: 'https://www.tripadvisor.com/Search?q=',
    icon: FaTripadvisor({ color: 'white' }),
  },
  soundcloud: {
    link: 'https://soundcloud.com/search?q=',
    icon: FaSoundcloud({ color: 'white' }),
  },
  reddit: {
    link: 'https://www.reddit.com/search?q=',
    icon: FaRedditAlien({ color: 'white' }),
  },
  clippy: {
    link: '',
    icon: GoClippy({ color: 'white' }),
  },
};
