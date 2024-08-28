
import { test, expect } from "@playwright/experimental-ct-react";
import App2413 from "./App2413.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2413 />);
  await expect(component).toContainText("Learn React");
});
