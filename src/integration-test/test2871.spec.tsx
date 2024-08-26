
import { test, expect } from "@playwright/experimental-ct-react";
import App2871 from "../example/App2871.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2871 />);
  await expect(component).toContainText("Learn React");
});
