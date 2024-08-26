
import { test, expect } from "@playwright/experimental-ct-react";
import App792 from "../example/App792.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App792 />);
  await expect(component).toContainText("Learn React");
});
