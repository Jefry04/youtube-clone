import gamesIcon from '../../../assets/images/icons/games.jpg';
import learnIcon from '../../../assets/images/icons/learn.jpg';
import livesIcon from '../../../assets/images/icons/lives.jpg';
import musicIcon from '../../../assets/images/icons/music.jpg';
import newsIcon from '../../../assets/images/icons/news.jpg';
import panoramicIcon from '../../../assets/images/icons/panoramic-videos.jpg';
import sportIcon from '../../../assets/images/icons/sports.jpg';

const categoryTabs = [
  { id: 1, name: 'Musica', icon: musicIcon, isActive: false, path: '/' },
  { id: 2, name: 'Deportes', icon: sportIcon, isActive: false, path: '/' },
  { id: 3, name: 'Videojuegos', icon: gamesIcon, isActive: false, path: '/' },
  { id: 4, name: 'En vivo', icon: livesIcon, isActive: false, path: '/' },
  { id: 5, name: 'Aprendizaje', icon: learnIcon, isActive: false, path: '/' },
  { id: 6, name: 'Noticias', icon: newsIcon, isActive: false, path: '/' },
  {
    id: 7,
    name: 'Video panoramico',
    icon: panoramicIcon,
    isActive: false,
    path: '/',
  },
];

export default categoryTabs;
