
import { test, expect } from "@playwright/experimental-ct-react";
import App2661 from "../example/App2661.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2661 />);
  await expect(component).toContainText("Learn React");
});
