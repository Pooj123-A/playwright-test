
import { test, expect } from "@playwright/experimental-ct-react";
import App2568 from "../example/App2568.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2568 />);
  await expect(component).toContainText("Learn React");
});
