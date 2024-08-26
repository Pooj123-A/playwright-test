
import { test, expect } from "@playwright/experimental-ct-react";
import App2578 from "../example/App2578.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2578 />);
  await expect(component).toContainText("Learn React");
});
