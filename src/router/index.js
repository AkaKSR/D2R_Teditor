// Default Initialize
import Vue from 'vue'
import Router from 'vue-router'

// Page Component
import Main from '@/components/Main'

import Gems_re from '@/components/resurrect/GemsView'
import Affixes_re from '@/components/resurrect/AffixesView'
import ItemName_re from '@/components/resurrect/ItemNameView'

import Gems_le from '@/components/legacy/GemsView'
import Affixes_le from '@/components/legacy/AffixesView'
import ItemName_le from '@/components/legacy/ItemNameView'

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
      path: '/d2r_teditor',
      name: "D2RMain",
      component: Main
    },
    {
      path: '/gems_re',
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
    {
      path: '/gems_le',
      name: 'Gems_le',
      component: Gems_le
    },
    {
      path: '/affixes_le',
      name: 'Affixes_le',
      component: Affixes_le
    },
    {
      path: '/name_le',
      name: 'ItemName_le',
      component: ItemName_le
    },
  ]
})