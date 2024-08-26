
import { test, expect } from "@playwright/experimental-ct-react";
import App2801 from "../example/App2801.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2801 />);
  await expect(component).toContainText("Learn React");
});
