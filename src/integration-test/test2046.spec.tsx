
import { test, expect } from "@playwright/experimental-ct-react";
import App2046 from "../example/App2046.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2046 />);
  await expect(component).toContainText("Learn React");
});
