import controller from './initSaveData'
import COOKIES from 'js-cookie'

const env = 'indexdb' || COOKIES.get('saveType') // 目前固定为开发环境

export default {
  dashboard: {
    getdashboardList: params => controller[env]('getdashboardList', params)
  },
  sprints: {
    getIssueTypeList: params => controller[env]('getIssueTypeList', params),
    thridPartyLinks: params => controller[env]('thridPartyLinks', params),
    sprintIssueDetail: params => controller[env]('sprintIssueDetail', params),
    activeSprintList: params => controller[env]('activeSprintList', params),
    getModuleList: params => controller[env]('getModuleList', params),
    getProgressStateList: params => controller[env]('getProgressStateList', params),
    updateSptintmoduleState: params => controller[env]('updateSptintmoduleState', params),
    updateIssueSort: params => controller[env]('updateIssueSort', params),
    updateIssueData: params => controller[env]('updateIssueData', params),
    removeIssue: params => controller[env]('removeIssue', params),
    backlogSprintList: params => controller[env]('backlogSprintList', params),
    initLocalForageStore: params => controller[env]('initLocalForageStore', params)
  }
}
