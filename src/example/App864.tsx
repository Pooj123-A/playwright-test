
import { test, expect } from "@playwright/experimental-ct-react";
import App864 from "./App864.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App864 />);
  await expect(component).toContainText("Learn React");
});
