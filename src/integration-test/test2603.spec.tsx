
import { test, expect } from "@playwright/experimental-ct-react";
import App2603 from "../example/App2603.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2603 />);
  await expect(component).toContainText("Learn React");
});
