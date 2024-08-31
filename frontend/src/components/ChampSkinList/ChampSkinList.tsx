import React from 'react'
import { useParams } from 'react-router-dom';

const ChampSkinList : React.FC = () => {
  const { name } = useParams();

  console.log(name)
  return (
    <div>
      hey
    </div>
  )
}

export default ChampSkinList
