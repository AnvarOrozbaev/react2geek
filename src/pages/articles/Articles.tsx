import React, { FC, useEffect} from 'react';
import { fetchArticles } from './articlesSlice'
import { useAppDispatch  } from '../../store/store';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
export const Articles: FC = () => {
const dispatch = useAppDispatch();
const articles = useSelector((state:RootState) => state.articles.articles);
const error = useSelector((state:RootState) => state.articles.error);
useEffect(()=>{
  console.log(articles)
  dispatch(fetchArticles())
},[])

if(error){
  return <h1>{error}</h1>
}


return (
  <>
<h2>Articles</h2>
  <ul>
  {articles.map((i) => (
    <li key={i.id}>
      {i.title}
    </li>
  ))}
</ul>
</>
);

}

