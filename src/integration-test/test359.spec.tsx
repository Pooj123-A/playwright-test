
import { test, expect } from "@playwright/experimental-ct-react";
import App359 from "../example/App359.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App359 />);
  await expect(component).toContainText("Learn React");
});
