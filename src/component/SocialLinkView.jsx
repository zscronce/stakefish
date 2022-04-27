import './SocialLinkView.css';

export default function SocialLinkView(props) {
  if (!props.linkUrl) {
    return null;
  }

  return <a href={props.linkUrl}>
    <img className="social-icon" src={props.iconUrl} alt={props.alt}/>
  </a>;
}
