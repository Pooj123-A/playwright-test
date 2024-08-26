
import { test, expect } from "@playwright/experimental-ct-react";
import App1247 from "../example/App1247.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1247 />);
  await expect(component).toContainText("Learn React");
});
