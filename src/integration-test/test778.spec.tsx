
import { test, expect } from "@playwright/experimental-ct-react";
import App778 from "../example/App778.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App778 />);
  await expect(component).toContainText("Learn React");
});
