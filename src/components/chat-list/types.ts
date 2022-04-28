export interface Message {
  author: string;
  text: string;
  id: string;
}
export interface ChatsType {
  [id: string]: {
    name: string;
    messages: Message[];
  };
}
export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface ChatProps {
  name: string;
  id: string;
}
