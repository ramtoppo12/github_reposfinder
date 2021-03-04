import React from 'react';
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import "./ResultPage.css"

function ResultPage() {
    const [{git_info},dispatch] = useDataLayerValue();
    return (
        <div className="resultPage__container">
            <div className="header">
            <div className="header__left">
               <h1 className="name">{git_info.data.login}</h1>
                <div className="contact__info">
                    <h4>{git_info.data.location}</h4>
                    <a href="#">{git_info.data.email}</a>
                </div>
            </div>
            <div className="header__right">
                <p>Created At: {git_info.data.created_at}</p>
                <p>Updated At: {git_info.data.updated_at}</p>
            </div>
        </div>
        <div className="bio__section">
          <div className="user__info">
              Bio:{git_info.data.bio}
              <br/>
              Blog:<p>{git_info.data.blog}</p>
          </div>
          <div className="img_section">
              <img src={git_info.data.avatar_url} alt=""/>
              <h3>Company:{git_info.data.company}</h3>
          </div>
        </div>
        <div className="followers__section">
            <div className="followers">
                <h3>Followers</h3>
                <span>{git_info.data.followers}</span>
            </div>
            <div className="following">
                <h3>Following</h3>
                <span>{git_info.data.following}</span>
            </div>
        </div>
        <div className="git_repo__section">
            <div className="public__gits">
                <h3>Public Gists</h3>
                <span>{git_info.data.public_gists}</span>
            </div>
            <div className="public__repo">
                <h3>public Repo</h3>
                <span>{git_info.data.public_repos}</span>
            </div>
        </div>
        </div>
    )
}

export default ResultPage
