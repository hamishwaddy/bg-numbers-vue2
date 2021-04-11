import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  fas,
  faSignOutAlt,
  faTachometerAlt,
  faIdCardAlt,
  faChartLine,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faPooStorm,
} from '@fortawesome/free-solid-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  fas,
  faSignOutAlt,
  faTachometerAlt,
  faIdCardAlt,
  faChartLine,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faPooStorm,
);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'faSvg',
  },
  theme: {
    themes: {
      light: {
        primary: '#0052D6',
        accent: '#D58300',
        success: '#52D600',
        error: '#D61600',
        info: '#EBEBEB',
      },
    },
  },
});
