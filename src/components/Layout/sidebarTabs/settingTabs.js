import CogIcon from '../../../assets/icons/CogIcon';
import FlagIcon from '../../../assets/icons/FlagIcon';
import HelpIcon from '../../../assets/icons/HelpIcon';
import AlertMessageIcon from '../../../assets/icons/AlertMessageIcon';

export default [
  { id: 1, name: 'Configuración', icon: CogIcon, isActive: true, path: '/' },
  {
    id: 2,
    name: 'Historial de denuncias',
    icon: FlagIcon,
    isActive: false,
    path: '/',
  },
  { id: 3, name: 'Ayuda', icon: HelpIcon, isActive: false, path: '/' },
  {
    id: 4,
    name: 'Enviar comentarios',
    icon: AlertMessageIcon,
    isActive: false,
    path: '/',
  },
];
