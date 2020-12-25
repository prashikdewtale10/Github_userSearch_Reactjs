import React from "react";


// import Style


const Card = ({ profile , repoData}) => {

  return (

    <div className='MainDiv'>

      <div>
        <img className='AvatarStyle' src={profile.avatar_url} alt={profile.name} />
      </div>
      <div className='InfoStyle'>
        <div>Name: {profile.name}</div>
             <div>Bio: {profile.bio}</div>
        <div>
          GitHub Link:{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div>
        {/* email */}
        {/* <div>Email: {profile.Email}</div> */}
        {/* Location */}
        {/* <div>Location:{profile.location}</div> */}
        {/* Public repo */}
        <div>Public repos: {profile.public_repos}</div>
        
   
      </div>
      <div>
<div className="repodata"><h3>Repository's</h3>
        <ul>
        { repoData.slice(0,5).map( ( item, index ) => (
                    <li  key={ index }>
                        { item.name }
                    </li>
                )) }
                </ul>
                </div>
</div>
    </div>
    
  );
};

export default Card;
