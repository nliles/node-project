import dynamicForm from './modules/dynamicForm';
import autocomplete from './modules/autocomplete';
import loginModal from './modules/loginModal';
import registerModal from './modules/registerModal';
import imageSlider from './modules/imageSlider';
import dropDown from './modules/dropDown';
// import displayMap from './modules/displayMap';


const addressInput = document.querySelector('.address');
const latInput = document.querySelector('.lat');
const lngInput = document.querySelector('.lng');

autocomplete( addressInput, latInput, lngInput );

