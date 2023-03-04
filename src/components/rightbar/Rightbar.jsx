import Online from "../online/Online"
import "./rightbar.css"
import { Users } from "../../dummyData"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends </b>have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>  
      </div>
    </div>
  )
}




/* <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg"
               src="assets/person/3.jpeg"
               alt=""
              />  
             <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li> */