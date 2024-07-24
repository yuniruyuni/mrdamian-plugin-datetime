import dayjs from "dayjs";
import type { Component, ComponentConfig, Field } from "mrdamian-plugin";

export type DatetimeConfig = ComponentConfig & {
  args: {
    format: string;
  };
};

export default class Datetime implements Component<DatetimeConfig> {
  async process(config: DatetimeConfig): Promise<Field> {
    return dayjs().format(config.args.format);
  }
}
