
import { test, expect } from "@playwright/experimental-ct-react";
import App1292 from "../example/App1292.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1292 />);
  await expect(component).toContainText("Learn React");
});
