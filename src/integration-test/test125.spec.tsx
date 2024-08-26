
import { test, expect } from "@playwright/experimental-ct-react";
import App125 from "../example/App125.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App125 />);
  await expect(component).toContainText("Learn React");
});
