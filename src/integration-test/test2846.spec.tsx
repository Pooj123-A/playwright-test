
import { test, expect } from "@playwright/experimental-ct-react";
import App2846 from "../example/App2846.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2846 />);
  await expect(component).toContainText("Learn React");
});
