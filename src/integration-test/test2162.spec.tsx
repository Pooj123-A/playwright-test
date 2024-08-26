
import { test, expect } from "@playwright/experimental-ct-react";
import App2162 from "../example/App2162.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2162 />);
  await expect(component).toContainText("Learn React");
});
