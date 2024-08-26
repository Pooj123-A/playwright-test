
import { test, expect } from "@playwright/experimental-ct-react";
import App2978 from "../example/App2978.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2978 />);
  await expect(component).toContainText("Learn React");
});
