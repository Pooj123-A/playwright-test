
import { test, expect } from "@playwright/experimental-ct-react";
import App2452 from "../example/App2452.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2452 />);
  await expect(component).toContainText("Learn React");
});
