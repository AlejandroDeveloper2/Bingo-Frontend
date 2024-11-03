import { BadgeIndicatorProps } from "@interfaces/component";

import { Badge } from "./BadgeIndicator.style";

const BadgeIndicator = ({
  label,
  value,
  Icon,
}: BadgeIndicatorProps): JSX.Element => {
  return (
    <Badge>
      <div>
        <Icon />
        <label>{label}</label>
      </div>
      <span>{value}</span>
    </Badge>
  );
};

export default BadgeIndicator;
