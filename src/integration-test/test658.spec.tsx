
import { test, expect } from "@playwright/experimental-ct-react";
import App658 from "../example/App658.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App658 />);
  await expect(component).toContainText("Learn React");
});
