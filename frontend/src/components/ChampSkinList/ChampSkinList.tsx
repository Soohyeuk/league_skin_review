import React from 'react'
import { useParams } from 'react-router-dom';

const ChampSkinList : React.FC = () => {
  const { name } = useParams();

  return (
    <div>
      {name}
    </div>
  )
}

export default ChampSkinList
