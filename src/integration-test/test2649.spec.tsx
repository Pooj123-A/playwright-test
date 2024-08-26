
import { test, expect } from "@playwright/experimental-ct-react";
import App2649 from "../example/App2649.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2649 />);
  await expect(component).toContainText("Learn React");
});
