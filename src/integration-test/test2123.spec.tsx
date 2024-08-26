
import { test, expect } from "@playwright/experimental-ct-react";
import App2123 from "../example/App2123.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2123 />);
  await expect(component).toContainText("Learn React");
});
