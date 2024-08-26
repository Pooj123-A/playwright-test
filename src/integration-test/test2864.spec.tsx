
import { test, expect } from "@playwright/experimental-ct-react";
import App2864 from "../example/App2864.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2864 />);
  await expect(component).toContainText("Learn React");
});
