
import { test, expect } from "@playwright/experimental-ct-react";
import App520 from "../example/App520.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App520 />);
  await expect(component).toContainText("Learn React");
});
