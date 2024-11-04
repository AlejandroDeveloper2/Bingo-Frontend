import { User } from "iconoir-react";

import { AvatarProps } from "@interfaces/component";

import {
  AvatarCircle,
  AvatarContainer,
  ConnectionIndicator,
} from "./Avatar.style";

const Avatar = ({
  userName,
  connectionStatus,
  you,
}: AvatarProps): JSX.Element => {
  return (
    <AvatarContainer>
      <AvatarCircle you={String(you)}>
        <User />
        <ConnectionIndicator
          connected={String(connectionStatus)}
        ></ConnectionIndicator>
      </AvatarCircle>
      <p>{userName}</p>
    </AvatarContainer>
  );
};

export default Avatar;
