
import { test, expect } from "@playwright/experimental-ct-react";
import App2668 from "../example/App2668.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2668 />);
  await expect(component).toContainText("Learn React");
});
