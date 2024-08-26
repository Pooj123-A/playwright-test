
import { test, expect } from "@playwright/experimental-ct-react";
import App1273 from "../example/App1273.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1273 />);
  await expect(component).toContainText("Learn React");
});
