
import { test, expect } from "@playwright/experimental-ct-react";
import App625 from "../example/App625.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App625 />);
  await expect(component).toContainText("Learn React");
});
