
import { test, expect } from "@playwright/experimental-ct-react";
import App2428 from "../example/App2428.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2428 />);
  await expect(component).toContainText("Learn React");
});
