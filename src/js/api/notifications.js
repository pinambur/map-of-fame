import {
  NOTIFICATIONS,
  NOTIFICATION_ID_ANSWER,
  NOTIFICATION_ID_SET_IS_SEEN,
} from "./endpoints";

export const requestNotifications = async (token, { limit, offset }) => {
  const bearer = `Bearer ${token}`;
  const response = await fetch(NOTIFICATIONS(limit, offset), {
    method: "GET",
    headers: { Authorization: bearer },
  });
  const result = await response.json();
  return result;
};

export const setNotificationSeen = async (token, id, status = 1) => {
  const bearer = `Bearer ${token}`;
  const formData = new FormData();
  formData.append("status", status);
  const response = await fetch(NOTIFICATION_ID_SET_IS_SEEN(id), {
    method: "POST",
    headers: { Authorization: bearer },
    body: formData,
  });
  const result = await response.json();
  return result;
};

export const answerNotification = async (token, id, confirm) => {
  const bearer = `Bearer ${token}`;
  const formData = new FormData();
  formData.append("confirm", confirm);
  const response = await fetch(NOTIFICATION_ID_ANSWER(id), {
    method: "POST",
    headers: { Authorization: bearer },
    body: formData,
  });
  const result = await response.json();
  return result;
};
