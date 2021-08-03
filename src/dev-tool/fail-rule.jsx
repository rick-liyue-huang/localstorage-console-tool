import React from 'react'
import { Button, Form, Input, List, Select, Typography } from 'antd'
import { useLocalStorageState } from '../util'
import { useForm } from 'antd/lib/form/Form'

const { Text, Link } = Typography

const { Option } = Select

export const FailRule = () => {
  const [form] = useForm()
  const [failConfig, setFailConfig] = useLocalStorageState(
    '__jira_request_fail_config__',
    []
  )

  function handleRemoveClick(index) {
    setFailConfig((c) => [...c.slice(0, index), ...c.slice(index + 1)])
  }

  function handleSubmit(values) {
    const { method, url } = values
    if (!url) {
      alert('Set URL')
      return
    }
    setFailConfig((c) => [
      ...c,
      { requestMethod: method.toUpperCase(), urlMatch: url }
    ])
    form.setFieldsValue({
      method: 'all',
      url: ''
    })
  }

  const prefixSelector = (
    <Form.Item name="method" noStyle>
      <Select style={{ width: 100 }}>
        <Option value="all">ALL</Option>
        <Option value="get">GET</Option>
        <Option value="post">POST</Option>
        <Option value="delete">DELETE</Option>
        <Option value="patch">PATCH</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div
      style={{
        display: 'grid',
        gridColumnGap: '30px',
        gridTemplateColumns: '1.2fr 2fr'
      }}
    >
      <Form form={form} initialValues={{ method: 'all' }} onFinish={handleSubmit} style={{ paddingTop: '12px' }}>
        <Form.Item
          name="url"
        >
          <Input
            addonBefore={prefixSelector}
            placeholder={'/projects'}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>Add</Button>
        </Form.Item>
      </Form>
      <List
        header={'List'}
        dataSource={failConfig}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a onClick={() => handleRemoveClick(index)} key="delete">
                Delete
              </a>
            ]}
          >
            <Text mark> Request method: {item.requestMethod || 'none'} </Text>
            <Typography.Text>URL: {item.urlMatch || 'none'}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  )
}
