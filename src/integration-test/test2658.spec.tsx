
import { test, expect } from "@playwright/experimental-ct-react";
import App2658 from "../example/App2658.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2658 />);
  await expect(component).toContainText("Learn React");
});
