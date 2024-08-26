
import { test, expect } from "@playwright/experimental-ct-react";
import App2510 from "../example/App2510.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2510 />);
  await expect(component).toContainText("Learn React");
});
