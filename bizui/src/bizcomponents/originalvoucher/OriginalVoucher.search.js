
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import Result from '../../components/Result'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message,Alert } from 'antd';
import GlobalComponents from '../../custcomponents'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './OriginalVoucher.search.less'
import ListViewTool from '../../common/ListView.tool'
import PermissionSettingService from '../../permission/PermissionSetting.service'
const  {  hasCreatePermission,hasExecutionPermission,hasDeletePermission,hasUpdatePermission,hasReadPermission } = PermissionSettingService


const {handleSelectRows,handleStandardTableChange,
  showDeletionDialog,handleUpdate,handleDeletionModalVisible,
  handleElementCreate,toggleAssociateModalVisible,handleCloseAlert}=ListViewTool


const buttonMenuFor =(targetComponent, internalName, localeName)=> (
  <Menu >
    <Menu.Item key="1" onClick={()=>toggleAssociateModalVisible(targetComponent,internalName)}>新建{localeName}</Menu.Item>
    <Menu.Item key="2">合并{localeName}</Menu.Item>
   
  </Menu>
);


 
const showListActionBar = (targetComponent)=>{

  const {selectedRows} = targetComponent.state
  const {metaInfo} = targetComponent.props
  const disable = (selectedRows.length === 0)

  return (<div className={styles.tableListOperator}>
        
 
              {hasCreatePermission(metaInfo)&&<Button icon="plus" type="primary" onClick={() => handleElementCreate(targetComponent)}>新建</Button>}
              
 {hasDeletePermission(metaInfo)&&<Button onClick={(event)=>handleDeletionModalVisible(event,targetComponent)} type="danger" icon="delete" disabled={disable}>批量删除</Button>}
               

               {hasUpdatePermission(metaInfo)&&<Button onClick={()=>handleUpdate(targetComponent)} icon="update" disabled={disable}>批量更新</Button>}
 
 	
    
               
	</div> )


}


const showAssociateDialog = (targetComponent) => {
  const {data, owner, visible,onCancel,onCreate} = targetComponent.props
  const {currentAssociateModal} = targetComponent.state
  
  const {selectedRows} = targetComponent.state
  
  const { AccountingDocumentAssociateForm } = GlobalComponents
  const { OriginalVoucherCreationAssociateForm } = GlobalComponents
  const { OriginalVoucherConfirmationAssociateForm } = GlobalComponents
  const { OriginalVoucherAuditingAssociateForm } = GlobalComponents


  return (
  <div>
  
    <OriginalVoucherCreationAssociateForm 
	visible={currentAssociateModal==='creation'} 
	data={{originalVoucherList:selectedRows}} owner={owner}  
	onCancel={()=>toggleAssociateModalVisible(targetComponent,'creation')} 
	onCreate={()=>toggleAssociateModalVisible(targetComponent,'creation')}/> <OriginalVoucherConfirmationAssociateForm 
	visible={currentAssociateModal==='confirmation'} 
	data={{originalVoucherList:selectedRows}} owner={owner}  
	onCancel={()=>toggleAssociateModalVisible(targetComponent,'confirmation')} 
	onCreate={()=>toggleAssociateModalVisible(targetComponent,'confirmation')}/> <OriginalVoucherAuditingAssociateForm 
	visible={currentAssociateModal==='auditing'} 
	data={{originalVoucherList:selectedRows}} owner={owner}  
	onCancel={()=>toggleAssociateModalVisible(targetComponent,'auditing')} 
	onCreate={()=>toggleAssociateModalVisible(targetComponent,'auditing')}/>
  
    <AccountingDocumentAssociateForm 
	visible={currentAssociateModal==='belongsTo'} 
	data={{originalVoucherList:selectedRows}} owner={owner}  
	onCancel={()=>toggleAssociateModalVisible(targetComponent,'belongsTo')} 
	onCreate={()=>toggleAssociateModalVisible(targetComponent,'belongsTo')}/> 
 


    </div>
    
    
    
    )
}


class OriginalVoucherSearch extends PureComponent {
  state = {
    deletionModalVisible: false,
    selectedRows: [],
    showDeleteResult: false,
    currentAssociateModal: null,
  }

  render(){
    const { data, loading, count, currentPage, owner,partialList } = this.props;
    const {displayName} = owner.ref
    const { showDeleteResult, selectedRows, deletionModalVisible, showAssociatePaymentForm } = this.state;
    const {OriginalVoucherTable} = GlobalComponents;
    const {OriginalVoucherSearchForm} = GlobalComponents;
    const {OriginalVoucherModalTable} = GlobalComponents;
    
    
  
    return (
      <PageHeaderLayout title={`${displayName}:${this.props.name}列表`}>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <OriginalVoucherSearchForm {...this.props} />
            </div>
            <div className={styles.tableListOperator}>
           
   
              {showListActionBar(this)}
              {partialList&&(
              <div className={styles.searchAlert}>
                	<Alert message="下面显示最近更新结果，关闭显示全部" type="success" closable  afterClose={()=>handleCloseAlert(displayName, this)}/>
              </div>  	
              )}
              
            </div>
            <OriginalVoucherTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              count={count}
              current={currentPage}
              onSelectRow={(selectedRows)=>handleSelectRows(selectedRows,this)}
              onChange={(pagination, filtersArg, sorter)=>handleStandardTableChange(pagination, filtersArg, sorter,this)}
              owner={owner}
              {...this.props}
            />
          </div>
        </Card>
        {showDeletionDialog(this,OriginalVoucherModalTable,"originalVoucherIds")}
        {showAssociateDialog(this)}
      </PageHeaderLayout>
    )
  }
}

export default Form.create()(OriginalVoucherSearch)


