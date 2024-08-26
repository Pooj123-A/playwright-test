
import { test, expect } from "@playwright/experimental-ct-react";
import App1109 from "../example/App1109.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1109 />);
  await expect(component).toContainText("Learn React");
});
