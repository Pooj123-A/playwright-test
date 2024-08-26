
import { test, expect } from "@playwright/experimental-ct-react";
import App2943 from "../example/App2943.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2943 />);
  await expect(component).toContainText("Learn React");
});
