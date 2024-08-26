
import { test, expect } from "@playwright/experimental-ct-react";
import App2904 from "../example/App2904.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2904 />);
  await expect(component).toContainText("Learn React");
});
