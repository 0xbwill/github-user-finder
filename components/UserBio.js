import React from 'react'

const UserBio = ({ bio }) => {
  return (
    <div>
      <p className="text-center font-mono text-sm font-medium text-gray-800 dark:text-gray-300 ">
        {bio === null ? 'Aucune bio.' : bio}
      </p>
    </div>
  )
}

export default UserBio
