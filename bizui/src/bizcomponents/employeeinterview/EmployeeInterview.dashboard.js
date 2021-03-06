

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './EmployeeInterview.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'


const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers
}= DashboardTool



const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(employeeInterview)=>{return [
	 ]}

const internalImageListOf = (employeeInterview) =>defaultImageListOf(employeeInterview,imageList)

const optionList =(employeeInterview)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (employeeInterview) =>defaultSettingListOf(employeeInterview, optionList)
const internalLargeTextOf = (employeeInterview) =>{

	return null
	

}







const internalRenderExtraHeader = defaultRenderExtraHeader




const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf

const internalSummaryOf = (employeeInterview,targetComponent) =>{
	
	
	const {EmployeeInterviewService} = GlobalComponents
	
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{employeeInterview.id}</Description> 
<Description term="员工">{employeeInterview.employee==null?"未分配":employeeInterview.employee.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"员工","employee",EmployeeInterviewService.requestCandidateEmployee,
	      EmployeeInterviewService.transferToAnotherEmployee,"anotherEmployeeId",employeeInterview.employee?employeeInterview.employee.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="面试类型">{employeeInterview.interviewType==null?"未分配":employeeInterview.interviewType.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"面试类型","interviewType",EmployeeInterviewService.requestCandidateInterviewType,
	      EmployeeInterviewService.transferToAnotherInterviewType,"anotherInterviewTypeId",employeeInterview.interviewType?employeeInterview.interviewType.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="备注">{employeeInterview.remark}</Description> 
	
        {buildTransferModal(employeeInterview,targetComponent)}
      </DescriptionList>
	)

}


class EmployeeInterviewDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"城市",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'employeeInterview'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeInterview
    if(!this.props.employeeInterview.class){
      return null
    }
    const cardsData = {cardsName:"员工面试",cardsFor: "employeeInterview",cardsSource: this.props.employeeInterview,
  		subItems: [
    
      	],
  	};
    //下面各个渲染方法都可以定制，只要在每个模型的里面的_features="custom"就可以得到定制的例子
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        {subListsOf(cardsData)} 
        {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  employeeInterview: state._employeeInterview,
}))(Form.create()(EmployeeInterviewDashboard))

