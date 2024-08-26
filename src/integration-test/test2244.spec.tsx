
import { test, expect } from "@playwright/experimental-ct-react";
import App2244 from "../example/App2244.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2244 />);
  await expect(component).toContainText("Learn React");
});
