import { Component } from "mrdamian/model/component";
import type { ComponentConfig } from "mrdamian/model/parameters";
import type { Field } from "mrdamian/model/variable";

import dayjs from "dayjs";

export type DatetimeConfig = ComponentConfig & {
  args: {
    format: string;
  };
};

export class Datetime extends Component<DatetimeConfig> {
  async run(config: DatetimeConfig): Promise<Field> {
    return dayjs().format(config.args.format);
  }
}
