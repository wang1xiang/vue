/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 把mixin中的所i有成员拷贝到this.options中 Vue
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
