
import { test, expect } from "@playwright/experimental-ct-react";
import App2196 from "../example/App2196.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2196 />);
  await expect(component).toContainText("Learn React");
});
