import dayjs from "dayjs";
import { Component } from "mrdamian/model/component";
import type { ComponentConfig } from "mrdamian/model/parameters";
import type { Field } from "mrdamian/model/variable";

export type DatetimeConfig = ComponentConfig & {
  args: {
    format: string;
  };
};

export default class Datetime extends Component<DatetimeConfig> {
  async process(config: DatetimeConfig): Promise<Field> {
    return dayjs().format(config.args.format);
  }
}
