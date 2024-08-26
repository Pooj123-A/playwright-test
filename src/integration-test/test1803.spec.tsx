
import { test, expect } from "@playwright/experimental-ct-react";
import App1803 from "../example/App1803.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1803 />);
  await expect(component).toContainText("Learn React");
});
