export interface Message {
  author: string;
  text: string;
  id: string;
}
export interface Chat {
  name: string;
  id: string;
  messages: Message[];
}
export interface ChatsType {
  [id: string]: {
    name: string;
    messages: Message[];
  };
}