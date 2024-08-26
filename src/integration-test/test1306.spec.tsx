
import { test, expect } from "@playwright/experimental-ct-react";
import App1306 from "../example/App1306.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1306 />);
  await expect(component).toContainText("Learn React");
});
