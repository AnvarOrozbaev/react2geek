import React, { FC, useState} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './ChatListItem.module.scss'

interface Chat {
  name:string,
  id: string, 
}
interface ChatlistItemProps {
  chat: Chat,
  selectedId: string,
  handleListItemClick: (id:string) => void
}
export const ChatListItem: FC<ChatlistItemProps> = ({chat, selectedId, handleListItemClick })=>{
  
  return  <ListItemButton
          selected={selectedId === chat.id}
          onClick={() => handleListItemClick(chat.id)}
          sx={{maxHeight: 40, maxWidth: 150}}
          ><p className={styles.text}>
            {chat.name}
            </p>
          </ListItemButton>

}