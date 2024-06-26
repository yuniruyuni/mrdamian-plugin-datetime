import { describe, expect, it } from "bun:test";
import dayjs from "dayjs";
import { NamedEventEmitter, eventChannel } from "mrdamian/model/events";
import Datetime, { type DatetimeConfig } from "./index";

describe("Datetime", () => {
  it("should return current datetime", async () => {
    const [emitter] = eventChannel();
    const named = new NamedEventEmitter(emitter, ["datetime"]);
    const datetime = new Datetime(named);
    const actual = await datetime.process({
      args: { format: "YYYY-MM-DD" },
    } as DatetimeConfig);
    expect(actual).toEqual(dayjs().format("YYYY-MM-DD"));
  });
});
