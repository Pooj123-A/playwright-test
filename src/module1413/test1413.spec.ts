
import { test, expect } from "@playwright/experimental-ct-react";
import App1413 from "./App1413.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1413 />);
  await expect(component).toContainText("Learn React");
});
