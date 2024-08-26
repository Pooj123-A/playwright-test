
import { test, expect } from "@playwright/experimental-ct-react";
import App2628 from "../example/App2628.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2628 />);
  await expect(component).toContainText("Learn React");
});
