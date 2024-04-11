"use client";

import React, { useState } from 'react';
import Image from "next/image";
import {
  Form,
  Input,
  Button, Checkbox,
} from "antd";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { CheckboxProps, FormProps } from 'antd';
import '@/index'

const App = () => {
  const route = useRouter();
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  const [formRef] = Form.useForm();

  const [formData, setFormData] = useState<FieldType>({
    username: '',
    password: '',
    remember: false,
  });


  const toggleRemembered: CheckboxProps['onChange'] = (e) => {
    formData.remember = e.target.checked;
    setFormData({ ...formData });
  };


  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    formRef.validateFields().then(() => {
      formRef.setFieldsValue({...formData})
      formRef.getFieldsValue();
    })
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main className="">
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image className="w-8 h-8 mr-2"
            width={32}
            height={32}
            src="/imgs/logo.svg" 
            alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <Form className="space-y-4 md:space-y-6"
                name="login"
                form={formRef}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
                  <Form.Item<FieldType> name="username" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input placeholder="Nhập tên đăng nhập"></Input>
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                  <Form.Item<FieldType> name="password" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input.Password id="password" placeholder="Nhập mật khẩu" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input.Password>
                  </Form.Item>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-4">
                      <Form.Item<FieldType> name="remember" className='!mb-0 h-4'>
                        <Checkbox id="remember" checked={formData.remember} onChange={toggleRemembered} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></Checkbox>
                      </Form.Item>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300 cursor-pointer">Nhớ mật khẩu</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Quên mật khẩu?</a>
                </div>
                <Button type="primary" htmlType="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Đăng nhập
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Chưa có tài khoản? <Link href="/dang-ky" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng ký</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;