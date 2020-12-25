import React from 'react'

const Repository = ({repoData}) => {
    return (
        <div>
                  
            <h3 className='title'>Repository</h3>
      
              <ol className='listdata'>  
              {repoData.map(profile => profile.map(repo =>  
              <li className='list_item'>
                       {repo.name}
                       
                       </li>))}
              {/* {
                   repoData.map((data)=>(
                       <li className='list_item'>
                       {data.name}
                       
                       </li>
                   ))
              } */}

              
            </ol> 

        </div>
    )
}

export default Repository
