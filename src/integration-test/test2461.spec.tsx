
import { test, expect } from "@playwright/experimental-ct-react";
import App2461 from "../example/App2461.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2461 />);
  await expect(component).toContainText("Learn React");
});
