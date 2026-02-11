"use client";

import { useState } from "react";
import { Card, Input, Button, Form, Typography, message, Layout } from "antd";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useTodoStore } from "../../store/useTodoStore";

const { Title, Text } = Typography;
const { Content } = Layout;

export default function AddTodoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  const onFinish = (values: { content: string }) => {
    setLoading(true);
    try {
      addTodo(values.content);
      message.success("添加成功");
      router.push("/home");
    } catch (error) {
      message.error("添加失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <Content className="p-12 flex justify-center">
        <div className="w-full max-w-xl">
          <Card
            className="shadow-lg rounded-lg"
            title={
              <div className="flex items-center gap-4">
                <Button
                  icon={<ArrowLeftOutlined />}
                  onClick={() => router.back()}
                  type="text"
                />
                <Title level={3} className="!m-0">
                  添加新任务
                </Title>
              </div>
            }
          >
            <div className="mb-6">
              <Text type="secondary">
                请输入您想要完成的任务内容，然后点击保存。
              </Text>
            </div>

            <Form layout="vertical" onFinish={onFinish} size="large">
              <Form.Item
                name="content"
                label="任务内容"
                rules={[{ required: true, message: "请输入任务内容!" }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="例如：完成 Next.js 项目开发..."
                  showCount
                  maxLength={100}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  icon={<SaveOutlined />}
                >
                  保存任务
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </div>
  );
}
