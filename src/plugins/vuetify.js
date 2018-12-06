import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#1c6880',
        secondary: '#181d52',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        lightgrey: '#fafafa',
        mediumgrey: '#d5d5d5',
        grey: '#a2a2a2',
        darkgrey: '#757575'
    }
})
