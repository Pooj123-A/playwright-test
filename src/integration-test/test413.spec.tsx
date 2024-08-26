
import { test, expect } from "@playwright/experimental-ct-react";
import App413 from "../example/App413.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App413 />);
  await expect(component).toContainText("Learn React");
});
