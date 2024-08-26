
import { test, expect } from "@playwright/experimental-ct-react";
import App2847 from "../example/App2847.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2847 />);
  await expect(component).toContainText("Learn React");
});
