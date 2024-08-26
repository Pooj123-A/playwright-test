
import { test, expect } from "@playwright/experimental-ct-react";
import App536 from "./App536.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App536 />);
  await expect(component).toContainText("Learn React");
});
