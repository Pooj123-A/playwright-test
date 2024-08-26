
import { test, expect } from "@playwright/experimental-ct-react";
import App347 from "../example/App347.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App347 />);
  await expect(component).toContainText("Learn React");
});
