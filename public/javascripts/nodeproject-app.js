// import '../sass/style.scss';

import dropDown from './modules/dropDown';
import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import loginModal from './modules/loginModal';
import registerModal from './modules/registerModal';
import imageSlider from './modules/imageSlider';


autocomplete( $('#address'), $('#lat'), $('#lng') );

