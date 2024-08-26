
import { test, expect } from "@playwright/experimental-ct-react";
import App2827 from "../example/App2827.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2827 />);
  await expect(component).toContainText("Learn React");
});
