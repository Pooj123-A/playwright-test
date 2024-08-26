
import { test, expect } from "@playwright/experimental-ct-react";
import App2611 from "../example/App2611.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2611 />);
  await expect(component).toContainText("Learn React");
});
