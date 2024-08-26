
import { test, expect } from "@playwright/experimental-ct-react";
import App2086 from "../example/App2086.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2086 />);
  await expect(component).toContainText("Learn React");
});
