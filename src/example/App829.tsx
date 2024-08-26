
import { test, expect } from "@playwright/experimental-ct-react";
import App829 from "./App829.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App829 />);
  await expect(component).toContainText("Learn React");
});
