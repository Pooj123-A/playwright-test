
import { test, expect } from "@playwright/experimental-ct-react";
import App135 from "../example/App135.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App135 />);
  await expect(component).toContainText("Learn React");
});
