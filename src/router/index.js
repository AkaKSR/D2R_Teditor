// Default Initialize
import Vue from 'vue'
import Router from 'vue-router'

// Page Component
import Main from '@/components/Main'
import Gems_re from '@/components/GemsView'
import Affixes_re from '@/components/AffixesView'
import ItemName_re from '@/components/ItemNameView'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/d2r_teditor/gems_re',
      name: 'Gems_re',
      component: Gems_re
    },
    {
      path: '/affixes_re',
      name: 'Affixes_re',
      component: Affixes_re
    },
    {
      path: '/name_re',
      name: 'ItemName_re',
      component: ItemName_re
    },
  ]
})