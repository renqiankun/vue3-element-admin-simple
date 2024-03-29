// import 'element-plus/dist/index.css' //theme中引用
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { App } from 'vue'
import {
  ElAlert,
  ElAside,
  // ElAutocomplete,
  ElAvatar,
  // ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  //   ElButtonGroup,
  // ElCalendar,
  ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElSpace,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  // ElPopper,
  // ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  // ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  // ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElUpload,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElConfigProvider,
  ElEmpty,
  ElAffix
} from 'element-plus'

const components = [
  ElAlert,
  ElAside,
  // ElAutocomplete,
  ElAvatar,
  // ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  // ElPopper,
  // ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  // ElRate,
  ElRow,
  ElSpace,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  // ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElUpload,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  // ElNotification,
  ElConfigProvider,
  ElEmpty,
  ElAffix
]
export default {
  install(vue: App) {
    components.forEach(item => {
      vue.use(item)
    })

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      vue.component(key, component)
    }
    vue.config.globalProperties.$message = ElMessage
    vue.config.globalProperties.$notify = ElNotification
  }
}
