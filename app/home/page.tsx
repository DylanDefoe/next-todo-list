"use client";

import { Card, Button, Typography, message, Layout, Empty } from "antd";
import { PlusOutlined, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TodoItem } from "./components/TodoItem";
import { useTodoStore } from "../store/useTodoStore";
import { useAuthStore } from "../store/useAuthStore";

const { Title, Text } = Typography;
const { Content } = Layout;

const TodoPage: React.FC = () => {
  const router = useRouter();
  const { todos, removeTodo, toggleTodo } = useTodoStore();
  const logout = useAuthStore((state) => state.logout);

  const handleDelete = (id: string) => {
    removeTodo(id);
    message.success("删除成功");
  };

  const handleToggle = (id: string) => {
    toggleTodo(id);
  };

  const handleLogout = () => {
    logout();
    message.success("已退出登录");
    router.replace("/login");
  };

  return (
    <div className="flex-1 flex flex-col">
      <Content className="p-12 flex flex-col items-center">
        <div className="w-full max-w-2xl flex justify-end mb-4">
          <Button onClick={handleLogout} icon={<LogoutOutlined />} danger>
            退出登录
          </Button>
        </div>
        <div className="w-full max-w-2xl">
          <Card
            className="shadow-lg rounded-lg"
            title={
              <div className="flex justify-between items-center">
                <Title level={3} className="m-0!">
                  待办事项清单
                </Title>
                <Text type="secondary">共 {todos.length} 项</Text>
              </div>
            }
            extra={
              <Link href="/home/add">
                <Button className="ml-4" type="primary" icon={<PlusOutlined />}>
                  添加新任务
                </Button>
              </Link>
            }
          >
            {todos.length === 0 ? (
              <Empty description="暂无待办事项，快去创建一个吧！" />
            ) : (
              <div className="flex flex-col">
                {todos.map((item) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            )}
          </Card>
        </div>
      </Content>
    </div>
  );
};

export default TodoPage;
