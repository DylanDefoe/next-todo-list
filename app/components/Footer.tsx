"use client";

import React from "react";
import { Layout, Typography } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../context/AppContext";
import { ThemeToggle } from "./ThemeToggle";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  const pathname = usePathname();
  const { author, email } = useAppContext();

  if (pathname === "/about") {
    return null;
  }

  return (
    <AntFooter style={{ textAlign: "center", background: 'transparent' }}>
      <div className="flex flex-col gap-2 items-center">
        <div className="mb-2">
           <ThemeToggle />
        </div>
        <Text type="secondary" className="flex items-center">
          <UserOutlined className="mr-2" />
          Created by{" "}
          <NextLink
            href="/about"
            className="hover:text-blue-500 transition-colors"
          >
            <Text strong style={{ cursor: "pointer" }}>
              {author}
            </Text>
          </NextLink>
        </Text>
        <Text type="secondary" className="flex items-center">
          <MailOutlined className="mr-2" />
          Contact: <Link href={`mailto:${email}`}>{email}</Link>
        </Text>
        <Text type="secondary" style={{ fontSize: "12px" }}>
          © {new Date().getFullYear()} Next Todo List. All Rights Reserved.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
