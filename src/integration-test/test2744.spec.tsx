
import { test, expect } from "@playwright/experimental-ct-react";
import App2744 from "../example/App2744.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2744 />);
  await expect(component).toContainText("Learn React");
});
