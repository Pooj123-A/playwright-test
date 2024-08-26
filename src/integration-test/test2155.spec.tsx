
import { test, expect } from "@playwright/experimental-ct-react";
import App2155 from "../example/App2155.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2155 />);
  await expect(component).toContainText("Learn React");
});
