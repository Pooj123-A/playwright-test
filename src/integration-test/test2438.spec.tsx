
import { test, expect } from "@playwright/experimental-ct-react";
import App2438 from "../example/App2438.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2438 />);
  await expect(component).toContainText("Learn React");
});
