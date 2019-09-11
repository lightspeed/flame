import * as React from 'react';

export type FlagProps = {
  /** ISO-3166-2 code for requested Flag */
  code?: string;
  /** Name of region for requested Flag */
  name?: string;
  /** Width of Flag. Height set automatically.  */
  size?: string;
  theme?: string;
};

export default function FlagFactory(Flags: any, flagList: any) {
  const Flag: React.FC<FlagProps> = ({ code, name, size, theme, ...rest }) => {
    const searchedString = (code && 'code') || (name && 'name');
    const searchedValue = (code || name).toLowerCase();
    const flagFromList = flagList.find(
      (flag: any) => flag[searchedString].toLowerCase() === searchedValue,
    );

    if (!flagFromList) {
      return null;
    }

    const BaseFlag = Flags[flagFromList.code.replace('-', '_')];
    if (!BaseFlag) {
      return null;
    }

    return <BaseFlag size={size} {...rest} />;
  };

  Flag.defaultProps = {
    size: '1rem',
  };

  return Flag;
}
