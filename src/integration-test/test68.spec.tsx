
import { test, expect } from "@playwright/experimental-ct-react";
import App68 from "../example/App68.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App68 />);
  await expect(component).toContainText("Learn React");
});
