
import { test, expect } from "@playwright/experimental-ct-react";
import App1246 from "../example/App1246.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1246 />);
  await expect(component).toContainText("Learn React");
});
