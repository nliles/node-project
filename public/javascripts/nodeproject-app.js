// import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import dropdown from './modules/dropdown';

autocomplete( $('#address'), $('#lat'), $('#lng') );

