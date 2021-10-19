import Vue from 'vue';
import Vuex from 'vuex';

var strings = require('./modules/strings');
var strings_legacy = require('./modules/strings-legacy');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        strings,
        strings_legacy
        // strings: {
        //     item_gems: [],
        //     item_modifiers: [],
        //     item_nameaffixes: [],
        //     item_names: [],
        //     item_runes: []
        // },
        // strings_legacy: {
        //     item_gems: [],
        //     item_modifiers: [],
        //     item_nameaffixes: [],
        //     item_names: [],
        //     item_runes: []
        // }
    },
    getters: {},
    mutations: {},
    actions: {},
});