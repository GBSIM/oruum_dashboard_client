import './Profile.css';

export default function Profile(props) {
    const name = props.name;
    return (
        <div className='profile-container'>
            <img className='profile-image' src={require('./images/image_profile.jpg')}></img>
            <span className='profile-name'>{name}</span>
        </div>
    )
}