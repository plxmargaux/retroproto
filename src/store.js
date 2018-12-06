import Vue from 'vue'
import Vuex from 'vuex'
// const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
    debug: true,
    state: {
        projects: {
            descamps: {
                title: 'Descamps',
                icon: require('./assets/descamps.jpg'),
                id: 'descamps',
                desc: 'Projet descamps, par Yannick Garaud',
                date: '02/05/2018',
                retros: {
                    '001': {
                        title: 'Sprint 14',
                        id: '001',
                        date: '02/10/2018',
                        participants: 4,
                        archived: false,
                        columns: [
                            {
                                title: 'To do'
                            }
                        ]
                    },
                    '002': {
                        title: 'Sprint 15',
                        id: '002',
                        date: '10/10/2018',
                        participants: 7,
                        archived: true
                    },
                    '003': {
                        title: 'Sprint 16',
                        id: '003',
                        date: '16/10/2018',
                        participants: 6,
                        archived: false
                    },
                    '004': {
                        title: 'Sprint 13',
                        id: '004',
                        date: '02/10/2018',
                        participants: 3,
                        archived: true
                    }
                }
            },
            courir: {
                title: 'Courir',
                icon: require('./assets/courir.jpg'),
                id: 'courir',
                desc: 'Projet courir, par Florence Bonizec',
                date: '01/12/2017',
                retros: {
                    '001': {
                        title: 'Sprint 07',
                        id: '001',
                        date: '02/10/2017',
                        participants: 4,
                        archived: false
                    },
                    '002': {
                        title: 'Sprint 08',
                        id: '002',
                        date: '10/10/2018',
                        participants: 7,
                        archived: true
                    },
                    '003': {
                        title: 'Sprint 16',
                        id: '003',
                        date: '16/10/2018',
                        participants: 6,
                        archived: false
                    }
                }
            },
            ales: {
                title: 'Alès Groupe',
                icon: require('./assets/ales.jpg'),
                id: 'ales',
                desc: 'Projet courir, par Mélissa Chauveaux',
                date: '01/12/2015',
                retros: {
                    '001': {
                        title: 'Sprint 22',
                        id: '001',
                        date: '02/10/2016',
                        participants: 4,
                        archived: false
                    },
                    '002': {
                        title: 'Sprint 21',
                        id: '002',
                        date: '10/10/2016',
                        participants: 7,
                        archived: true
                    }
                }
            }
        }
    },
    mutations: {},
    actions: {
        /*retrieveToken(context, credentials) {
            axios.get('/dashboard', {
                username: credentials.username,
                password: credentials.password
            })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
        }*/
    }
})
