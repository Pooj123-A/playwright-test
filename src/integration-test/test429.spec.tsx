
import { test, expect } from "@playwright/experimental-ct-react";
import App429 from "../example/App429.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App429 />);
  await expect(component).toContainText("Learn React");
});
