"use client";

import React, { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import {
  Form,
  Input,
  Button
} from "antd";
import { useRouter } from 'next/navigation'

import type { FormProps } from 'antd';

const App = () => {
  const route = useRouter();
  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    repassword?: string;
  };

  const [formRef] = Form.useForm();

  const [formData, setFormData] = useState<FieldType>({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });

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
          <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image className="w-8 h-8 mr-2"
            width={32}
            height={32}
            src="/imgs/logo.svg" 
            alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng ký
              </h1>
              <Form className="space-y-4 md:space-y-6"
                name="register"
                form={formRef}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
                  <Form.Item<FieldType> name="username" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input id="username" placeholder="Nhập tên đăng nhập"></Input>
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <Form.Item<FieldType> name="email" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input id="email" placeholder="Nhập email"></Input>
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                  <Form.Item<FieldType> name="password" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input.Password id="password" placeholder="Nhập mật khẩu" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input.Password>
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="repassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu</label>
                  <Form.Item<FieldType> name="repassword" rules={[{'required': true, 'message': 'Bắt buộc nhập'}]} >
                    <Input.Password id="repassword" placeholder="Nhập lại mật khẩu" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input.Password>
                  </Form.Item>
                </div>
                <Button type="primary" htmlType="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Đăng ký ngay
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Đã có tài khoản? <Link href='/dang-nhap' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</Link>
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