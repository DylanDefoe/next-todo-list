import React from 'react';
import { Button, Checkbox, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { TodoData } from "../../store/useTodoStore";

const { Text } = Typography;

interface TodoItemProps {
  item: TodoData;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  onToggle,
}) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
      <Checkbox
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className="flex-1"
      >
        <Text
          delete={item.completed}
          type={item.completed ? "secondary" : undefined}
          className="text-lg ml-2"
        >
          {item.content}
        </Text>
      </Checkbox>
      <Button
        key="delete"
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};
