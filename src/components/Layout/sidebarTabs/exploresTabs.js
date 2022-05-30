import HomeIcon from '../../../assets/icons/HomeIcon';
import ExplorerIcon from '../../../assets/icons/ExplorerIcon';
import ShortsIcon from '../../../assets/icons/ShortsIcon';
import SubscriptionsIcon from '../../../assets/icons/SubscriptionsIcon';

const explorerTabs = [
  { id: 1, name: 'Principal', icon: HomeIcon, isActive: true, path: '/' },
  { id: 2, name: 'Explorar', icon: ExplorerIcon, isActive: false, path: '/' },
  { id: 3, name: 'Shorts', icon: ShortsIcon, isActive: false, path: '/' },
  {
    id: 4,
    name: 'SubscriptionsIcon',
    icon: SubscriptionsIcon,
    isActive: false,
    path: '/',
  },
];

export default explorerTabs;
