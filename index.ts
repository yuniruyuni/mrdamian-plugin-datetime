import dayjs from "dayjs";
import { Component, type ComponentConfig, type Field } from "mrdamian-plugin";

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
