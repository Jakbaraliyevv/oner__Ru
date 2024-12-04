import { notification } from "antd";
const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "add":
        return notification.success({
          message: "Add card",
          className: "custom-notification", // CSS sinfi qo‘shildi
          duration: 1,
        });
      default:
        return;
    }
  };
  return notify;
};

export default notificationApi;
