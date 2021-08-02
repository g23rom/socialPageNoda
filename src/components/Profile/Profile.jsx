import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () => {
  return <div className={s.content} >
    <div>
      <img src='https://zastavok.net/ts/arhitektura/1452898870.jpg'></img>
    </div>
      ava + description
    <div>
      <img src='https://yt3.ggpht.com/a/AATXAJzBn0YrJpEiOmWr7hrzDJ4zr0ZhwHAPjZojzw=s900-c-k-c0xffffffff-no-rj-mo'></img>
    </div>

<MyPosts />

  </div>
}

export default Profile;