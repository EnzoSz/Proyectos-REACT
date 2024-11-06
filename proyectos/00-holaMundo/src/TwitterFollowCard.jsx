import { useState } from "react";
import PropsType from "prop-types";

export function TwitterFollowCard({
  userName,
  name,
  formatUserName,
  initialIsFollowing,
}) {
  const [isFollowingState, setIsFollowingState] = useState(initialIsFollowing);
  const text = isFollowingState ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowingState
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowingState(!isFollowingState);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt=""
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text} </span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: 'unknown',
  name: PropsType.string.isRequired,
  formatUserName: PropsType.func.isRequired,
  initialIsFollowing: false,
};
