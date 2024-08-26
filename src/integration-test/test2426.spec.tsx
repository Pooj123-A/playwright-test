
import { test, expect } from "@playwright/experimental-ct-react";
import App2426 from "../example/App2426.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2426 />);
  await expect(component).toContainText("Learn React");
});
