import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.TopImage} src='https://zastavok.net/ts/arhitektura/1452898870.jpg'></img>
      </div>

      <div>
        ava + description
      </div>

      <div>
        <img src='https://yt3.ggpht.com/a/AATXAJzBn0YrJpEiOmWr7hrzDJ4zr0ZhwHAPjZojzw=s900-c-k-c0xffffffff-no-rj-mo'></img>
      </div>
      
    </div>
  )
}

export default ProfileInfo;