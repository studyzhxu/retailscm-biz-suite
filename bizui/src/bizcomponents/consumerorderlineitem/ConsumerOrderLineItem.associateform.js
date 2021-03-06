import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch,Modal } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './ConsumerOrderLineItem.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import ConsumerOrderLineItemBase from './ConsumerOrderLineItem.base'
import SelectObject from '../../components/SelectObject'


const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  skuId: 'SKU',
  skuName: '大瓶可乐',
  price: '5.79',
  quantity: '722.41',
  amount: '7287.34',
  bizOrderId: 'CO000001',
}
*/


const imageKeys = [
]


class ConsumerOrderLineItemAssociateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
 
    
    
    
  }

  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }
	
  

  render() {
	const { form, dispatch, submitting, role,data,owner,toggleAssociatePaymentVisible,visible,onCancel, onCreate } = this.props
    const { convertedImagesValues } = this.state
    const {ConsumerOrderLineItemService} = GlobalComponents


    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = ConsumerOrderLineItemBase
    
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    
    
    

    
    
    const tryinit  = (fieldName, candidates) => {
      
      if(candidates&&candidates.length==1){
          return candidates[0].id
      }
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }
    
    return (
 <Modal
          title="创建新的支付"
          visible={visible}
          onOk={onCancel}
          onCancel={onCancel}
          width={920}
          style={{ top: 40}}
        >
        <Card title="基础信息"  className={styles.card} style={{ backgroundColor:"#eee" }}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.skuId} {...formItemLayout}>
                  {getFieldDecorator('skuId', {
                    rules: [{ required: true, message: '请输入产品ID' }],
                  })(
                    <Input placeholder="请输入产品ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.skuName} {...formItemLayout}>
                  {getFieldDecorator('skuName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入产品名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.price} {...formItemLayout}>
                  {getFieldDecorator('price', {
                    rules: [{ required: true, message: '请输入价格' }],
                  })(
                    <Input placeholder="请输入价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.quantity} {...formItemLayout}>
                  {getFieldDecorator('quantity', {
                    rules: [{ required: true, message: '请输入数量' }],
                  })(
                    <Input placeholder="请输入数量" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.amount} {...formItemLayout}>
                  {getFieldDecorator('amount', {
                    rules: [{ required: true, message: '请输入金额' }],
                  })(
                    <Input placeholder="请输入金额" />
                  )}
                </Form.Item>
              </Col>

            </Row>


       
        









       
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bizOrder} {...formItemLayout}>
                  {getFieldDecorator('bizOrderId', {
                  	initialValue: tryinit('bizOrder'),
                    rules: [{ required: true, message: '请输入订单' }],
                  })(
                <SelectObject 
                    disabled={!availableForEdit('bizOrder')}
                    targetType={"bizOrder"} 
                    requestFunction={ConsumerOrderLineItemService.requestCandidateBizOrder}/>
  
                  )}
                </Form.Item>
              </Col>

            </Row>
         
       

			</Form>
			
			
			
			
        </Card>
        
        
        
        
      </Modal>)
    
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(ConsumerOrderLineItemAssociateForm))




