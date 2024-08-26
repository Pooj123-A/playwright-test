
import { test, expect } from "@playwright/experimental-ct-react";
import App2771 from "../example/App2771.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2771 />);
  await expect(component).toContainText("Learn React");
});
