import Vue from 'vue';
import Vuex from 'vuex';

// import strings from './modules/strings'
var strings = require('./modules/strings');
var strings_legacy = require('./modules/strings-legacy');

Vue.use(Vuex);

export default new Vuex.Store({
    // modules: {
    //     strings
    // },
    state: {
        strings,
        strings_legacy
        // strings_legacy: {
        //     gems: [],
        //     modifiers: [],
        //     nameaffixes: [],
        //     names: [],
        //     runes: [],
        //     levels: [],
        //     mercenaries: [],
        //     monsters: [],
        //     npcs: [],
        //     objects: [],
        //     presence_states: [],
        //     quests: [],
        //     shrines: []
        // }
    },
    getters: {},
    mutations: {},
    actions: {},
});