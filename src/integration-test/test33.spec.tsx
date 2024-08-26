
import { test, expect } from "@playwright/experimental-ct-react";
import App33 from "../example/App33.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App33 />);
  await expect(component).toContainText("Learn React");
});
