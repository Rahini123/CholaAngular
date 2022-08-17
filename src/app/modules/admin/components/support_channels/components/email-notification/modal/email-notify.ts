export interface EmailNotify {
  notification_type: string;
  id: string;
  notifications?: notifyPayload[];
}
export interface notifyPayload {
  id: string;
  name: string;
  is_enable: string;
}
