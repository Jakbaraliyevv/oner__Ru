import { notification } from "antd";

const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "add":
        return notification.success({ message: "Tovar korzinkaga qo'shildi" });
    }
  };
  return notify;
};

export default notificationApi;
