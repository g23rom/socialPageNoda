import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  return (
    <div className = {s.Profile}>
      <ProfileInfo />
      <MyPosts 
      dispatch = {props.dispatch}
      postData = {props.state.profilePage.postData}
      newPostText = {props.state.profilePage.newPostText}

      />
    </div>
  )
}

export default Profile;