
import { test, expect } from "@playwright/experimental-ct-react";
import App2855 from "../example/App2855.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2855 />);
  await expect(component).toContainText("Learn React");
});
