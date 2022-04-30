
import React from 'react'

const UserStats = ({repos,followers ,following}) => {
  return (
    <div className="grid grid-cols-3 gap-2 divide-gray-700 rounded-xl bg-gray-50 py-4 dark:divide-gray-50 dark:bg-[#1C1E21]">
    <div className="align-items flex flex-col px-4 text-center">
      <h4 className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-400 ">
        Repos
      </h4>
      <p className="font-mono text-md font-extrabold text-gray-700 dark:text-gray-50 ">
        {repos ? repos :"Non disponible"}
      </p>
    </div>

    <div className="align-items flex flex-col text-center">
      <h4 className="font-mono mx-auto text-xs font-semibold text-gray-700 dark:text-gray-400 ">
        Abonnés
      </h4>
      <p className="font-mono text-md font-extrabold text-gray-700 dark:text-gray-50 ">
        {followers ? followers :"Non disponible"}
      </p>
    </div>

    <div className="align-items flex flex-col text-center">
      <h4 className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-400 ">
        Abonnements
      </h4>
      <p className="font-mono text-md font-extrabold text-gray-700 dark:text-gray-50 ">
        {following? following : "Non disponible"}
      </p>
    </div>
  </div>
  )
}

export default UserStats
