import { describe, expect, it } from "bun:test";
import dayjs from "dayjs";
import type { Environment } from "mrdamian-plugin";
import Datetime, { type DatetimeConfig } from "./index";

describe("Datetime", () => {
  it("should return current datetime", async () => {
    const events = [];
    const emitter = {
      emit: (e: Environment) => events.push(e),
    };
    const datetime = new Datetime(emitter);
    const actual = await datetime.process({
      args: { format: "YYYY-MM-DD" },
    } as DatetimeConfig);
    expect(actual).toEqual(dayjs().format("YYYY-MM-DD"));
  });
});
